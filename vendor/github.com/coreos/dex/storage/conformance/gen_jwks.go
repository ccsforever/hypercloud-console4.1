// +build ignore

// This file is used to generate static JWKs for tests.

package main

import (
	"bytes"
	"crypto/rand"
	"crypto/rsa"
	"encoding/hex"
	"encoding/json"
	"go/format"
	"io"
	"io/ioutil"
	"log"
	"text/template"

	jose "gopkg.in/square/go-jose.v2"
)

func newUUID() string {
	u := make([]byte, 16)
	if _, err := io.ReadFull(rand.Reader, u); err != nil {
		panic(err)
	}

	u[8] = (u[8] | 0x80) & 0xBF
	u[6] = (u[6] | 0x40) & 0x4F

	return hex.EncodeToString(u)
}

var tmpl = template.Must(template.New("jwks.go").Parse(`
// This file was generaged by gen_jwks.go

package conformance

import jose "gopkg.in/square/go-jose.v2"

type keyPair struct {
	Public  *jose.JSONWebKey
	Private *jose.JSONWebKey
}

// keys are generated beforehand so we don't have to generate RSA keys for every test.
var jsonWebKeys = []keyPair{
	{{ range $i, $pair := .Keys }}
	{
		Public:  mustLoadJWK({{ $pair.Public }}),
		Private: mustLoadJWK({{ $pair.Private }}),
	},
	{{ end }}
}
`[1:])) // Remove the first newline.

type keyPair struct {
	Public  string
	Private string
}

func main() {
	var tmplData struct {
		Keys []keyPair
	}
	for i := 0; i < 5; i++ {
		// TODO(ericchiang): Test with ECDSA keys.
		key, err := rsa.GenerateKey(rand.Reader, 2048)
		if err != nil {
			log.Fatalf("gen rsa key: %v", err)
		}
		priv := jose.JSONWebKey{
			Key:       key,
			KeyID:     newUUID(),
			Algorithm: "RS256",
			Use:       "sig",
		}
		pub := jose.JSONWebKey{
			Key:       key.Public(),
			KeyID:     newUUID(),
			Algorithm: "RS256",
			Use:       "sig",
		}

		privBytes, err := json.MarshalIndent(priv, "\t\t", "\t")
		if err != nil {
			log.Fatalf("marshal priv: %v", err)
		}
		pubBytes, err := json.MarshalIndent(pub, "\t\t", "\t")
		if err != nil {
			log.Fatalf("marshal pub: %v", err)
		}
		tmplData.Keys = append(tmplData.Keys, keyPair{
			Private: "`" + string(privBytes) + "`",
			Public:  "`" + string(pubBytes) + "`",
		})
	}
	buff := new(bytes.Buffer)
	if err := tmpl.Execute(buff, tmplData); err != nil {
		log.Fatalf("execute tmpl: %v", err)
	}

	out, err := format.Source(buff.Bytes())
	if err != nil {
		log.Fatalf("gofmt failed: %v", err)
	}
	if err := ioutil.WriteFile("jwks.go", out, 0644); err != nil {
		log.Fatal(err)
	}
}
