// eslint-disable-next-line no-unused-vars
import { K8sKind } from '../module/k8s';

export const FederatedNamespaceModel: K8sKind = {
  kind: 'FederatedNamespace',
  label: 'Federated Namespace',
  apiGroup: 'types.kubefed.io',
  apiVersion: 'v1beta1',
  path: 'federatednamespaces',
  abbr: 'FN',
  namespaced: false,
  plural: 'federatednamespaces',
  id: 'federatednamespace',
  labelPlural: 'Federated Namespaces',
  crd: true,
};

export const FederatedDeploymentModel: K8sKind = {
  kind: 'FederatedDeployment',
  label: 'Federated Deployment',
  apiGroup: 'types.kubefed.io',
  apiVersion: 'v1beta1',
  path: 'federateddeployments',
  abbr: 'FD',
  namespaced: false,
  plural: 'federateddeployments',
  id: 'federateddeployment',
  labelPlural: 'Federated Deployments',
  crd: true,
};

export const FederatedConfigMapModel: K8sKind = {
  kind: 'FederatedConfigMap',
  label: 'Federated ConfigMap',
  apiGroup: 'types.kubefed.io',
  apiVersion: 'v1beta1',
  path: 'federatedconfigmaps',
  abbr: 'FCM',
  namespaced: false,
  plural: 'federatedconfigmaps',
  id: 'federatedconfigmap',
  labelPlural: 'Federated ConfigMaps',
  crd: true,
};

export const FederatedIngressModel: K8sKind = {
  kind: 'FederatedIngress',
  label: 'Federated Ingress',
  apiGroup: 'types.kubefed.io',
  apiVersion: 'v1beta1',
  path: 'federatedingresses',
  abbr: 'FN',
  namespaced: false,
  plural: 'federatedingresses',
  id: 'federatedingresses',
  labelPlural: 'Federated Ingresses',
  crd: true,
};

export const KubeFedClusterModel: K8sKind = {
  kind: 'KubeFedCluster',
  namespaced: true,
  label: 'Federation Cluster',
  plural: 'federationclusters',
  apiVersion: 'v1beta1',
  abbr: 'FC',
  apiGroup: 'core.kubefed.io',
  labelPlural: 'Federation Clusters',
  path: 'kubefedclusters',
  id: 'federationcluster',
  crd: false,
};

export const KubeFedConfigModel: K8sKind = {
  kind: 'KubeFedConfig',
  namespaced: true,
  label: 'Federation Config',
  plural: 'federationconfigs',
  apiVersion: 'v1beta1',
  abbr: 'FC',
  apiGroup: 'core.kubefed.io',
  labelPlural: 'Federation Configs',
  path: 'kubefedconfigs',
  id: 'federationconfig',
  crd: false,
};

export const FederatedTypeConfigModel: K8sKind = {
  kind: 'FederatedTypeConfig',
  namespaced: true,
  label: 'Federated Type Config',
  plural: 'federatedtypeconfigs',
  apiVersion: 'v1beta1',
  abbr: 'FTC',
  apiGroup: 'core.kubefed.io',
  labelPlural: 'Federation Type Configs',
  path: 'federatedtypeconfigs',
  id: 'federatedtypeconfig',
  crd: false,
};

export const FederatedResourceModel: K8sKind = {
  label: 'Federated Resource',
  apiGroup: 'apiextensions.k8s.io',
  apiVersion: 'v1beta1',
  path: 'customresourcedefinitions',
  abbr: 'CRD',
  namespaced: false,
  plural: 'federatedresources',
  kind: 'CustomResourceDefinition',
  id: 'customresourcedefinition',
  labelPlural: 'Federated Resources',
};

export const ReplicaSchedulingPreferenceModel: K8sKind = {
  kind: 'ReplicaSchedulingPreference',
  namespaced: true,
  label: 'Replica Scheduling Preference',
  plural: 'replicaschedulingpreferences',
  apiVersion: 'v1alpha1',
  abbr: 'RSP',
  apiGroup: 'scheduling.kubefed.io',
  labelPlural: 'Replica Scheduling Preferences',
  path: 'replicaschedulingpreferences',
  id: 'replicaschedulingpreference',
  crd: false,
};

export const DNSEndpointModel: K8sKind = {
  kind: 'DNSEndpoint',
  namespaced: true,
  label: 'DNS Endpoint',
  plural: 'dnsendpoints',
  apiVersion: 'v1alpha1',
  abbr: 'DE',
  apiGroup: 'multiclusterdns.kubefed.io',
  labelPlural: 'DNS Endpoints',
  path: 'dnsendpoints',
  id: 'dnsendpoint',
  crd: false,
};

export const DomainModel: K8sKind = {
  kind: 'Domain',
  namespaced: true,
  label: 'Domain',
  plural: 'domains',
  apiVersion: 'v1alpha1',
  abbr: 'D',
  apiGroup: 'multiclusterdns.kubefed.io',
  labelPlural: 'Domains',
  path: 'domains',
  id: 'domain',
  crd: false,
};

export const IngressDNSRecordModel: K8sKind = {
  kind: 'IngressDNSRecord',
  namespaced: true,
  label: 'Ingress DNS Record',
  plural: 'ingressdnsrecords',
  apiVersion: 'v1alpha1',
  abbr: 'IDR',
  apiGroup: 'multiclusterdns.kubefed.io',
  labelPlural: 'Ingress DNS Records',
  path: 'ingressdnsrecords',
  id: 'ingressdnsrecord',
  crd: false,
};

export const ServiceDNSRecordModel: K8sKind = {
  kind: 'ServiceDNSRecord',
  namespaced: true,
  label: 'Service DNS Record',
  plural: 'servicednsrecords',
  apiVersion: 'v1alpha1',
  abbr: 'SDR',
  apiGroup: 'multiclusterdns.kubefed.io',
  labelPlural: 'Service DNS Records',
  path: 'servicednsrecords',
  id: 'servicednsrecord',
  crd: false,
};

export const KubeadmControlPlaneModel: K8sKind = {
  kind: 'KubeadmControlPlane',
  namespaced: true,
  label: 'Kubeadm Control Plane',
  plural: 'kubeadmcontrolplanes',
  apiVersion: 'v1alpha3',
  abbr: 'KCP',
  apiGroup: 'controlplane.cluster.x-k8s.io',
  labelPlural: 'Kubeadm Control Planes',
  path: 'kubeadmcontrolplanes',
  id: 'kubeadmcontrolplane',
  crd: false,
};

export const KubeadmConfigTemplateModel: K8sKind = {
  kind: 'KubeadmConfigTemplate',
  namespaced: true,
  label: 'Kubeadm Config Template',
  plural: 'kubeadmconfigtemplates',
  apiVersion: 'v1alpha2',
  abbr: 'KCT',
  apiGroup: 'bootstrap.cluster.x-k8s.io',
  labelPlural: 'Kubeadm Config Template',
  path: 'kubeadmconfigtemplates',
  id: 'kubeadmconfigtemplate',
  crd: false,
};

export const ClusterModel: K8sKind = {
  kind: 'Cluster',
  namespaced: true,
  label: 'Cluster',
  plural: 'clusters',
  apiVersion: 'v1alpha3',
  abbr: 'C',
  apiGroup: 'cluster.x-k8s.io',
  labelPlural: 'Clusters',
  path: 'clusters',
  id: 'cluster',
  crd: false,
};

export const MachineDeploymentModel: K8sKind = {
  kind: 'MachineDeployment',
  namespaced: true,
  label: 'Machine Deployment',
  plural: 'machinedeployments',
  apiVersion: 'v1alpha3',
  abbr: 'MD',
  apiGroup: 'cluster.x-k8s.io',
  labelPlural: 'Machine Deployments',
  path: 'machinedeployments',
  id: 'machinedeployment',
  crd: false,
};

// export const MachineHealthCheckModel: K8sKind = {
//   kind: 'MachineHealthCheck',
//   namespaced: true,
//   label: 'Machine Health Check',
//   plural: 'machinehealthchecks',
//   apiVersion: '',
//   abbr: 'MHC',
//   apiGroup: '',
//   labelPlural: 'Machine Health Checks',
//   path: 'machinehealthchecks',
//   id: 'machinehealthcheck',
//   crd: false,
// };

export const MachineModel: K8sKind = {
  kind: 'Machine',
  namespaced: true,
  label: 'Machine',
  plural: 'machines',
  apiVersion: 'v1alpha3',
  abbr: 'M',
  apiGroup: 'cluster.x-k8s.io',
  labelPlural: 'Machines',
  path: 'machines',
  id: 'machine',
  crd: false,
};

export const MachineSetModel: K8sKind = {
  kind: 'MachineSet',
  namespaced: true,
  label: 'Machine Set',
  plural: 'machinesets',
  apiVersion: 'v1alpha3',
  abbr: 'MS',
  apiGroup: 'cluster.x-k8s.io',
  labelPlural: 'Machine Sets',
  path: 'machinesets',
  id: 'machineset',
  crd: false,
};

export const Metal3ClusterModel: K8sKind = {
  kind: 'Metal3Cluster',
  namespaced: true,
  label: 'Baremetal Cluster',
  plural: 'baremetalclusters',
  apiVersion: 'v1alpha3',
  abbr: 'BC',
  apiGroup: 'infrastructure.cluster.x-k8s.io',
  labelPlural: 'Baremetal Clusters',
  path: 'metal3clusters',
  id: 'baremetalcluster',
  crd: false,
};

export const Metal3MachineModel: K8sKind = {
  kind: 'Metal3Machine',
  namespaced: true,
  label: 'Baremetal Machine',
  plural: 'baremetalmachines',
  apiVersion: 'v1alpha3',
  abbr: 'BM',
  apiGroup: 'infrastructure.cluster.x-k8s.io',
  labelPlural: 'Baremetal Machine',
  path: 'metal3machines',
  id: 'baremetalmachine',
  crd: false,
};

export const Metal3MachineTemplateModel: K8sKind = {
  kind: 'Metal3MachineTemplate',
  namespaced: true,
  label: 'Baremetal Machine Template',
  plural: 'baremetalmachinetemplates',
  apiVersion: 'v1alpha3',
  abbr: 'BMT',
  apiGroup: 'infrastructure.cluster.x-k8s.io',
  labelPlural: 'Baremetal Machine Templates',
  path: 'metal3machinetemplates',
  id: 'baremetalmachinetemplate',
  crd: false,
};

export const AWSClusterModel: K8sKind = {
  kind: 'AWSCluster',
  namespaced: true,
  label: 'AWS Cluster',
  plural: 'awsclusters',
  apiVersion: 'v1alpha3',
  abbr: 'AC',
  apiGroup: 'infrastructure.cluster.x-k8s.io',
  labelPlural: 'AWS Clusters',
  path: 'awsclusters',
  id: 'awscluster',
  crd: false,
};

export const AWSMachineModel: K8sKind = {
  kind: 'AWSMachine',
  namespaced: true,
  label: 'AWS Machine',
  plural: 'awsmachines',
  apiVersion: 'v1alpha3',
  abbr: 'AM',
  apiGroup: 'infrastructure.cluster.x-k8s.io',
  labelPlural: 'AWS Machines',
  path: 'awsmachines',
  id: 'awsmachine',
  crd: false,
};

export const AWSMachineTemplateModel: K8sKind = {
  kind: 'AWSMachineTemplate',
  namespaced: true,
  label: 'AWS Machine Template',
  plural: 'awsmachinetemplates',
  apiVersion: 'v1alpha3',
  abbr: 'AMT',
  apiGroup: 'infrastructure.cluster.x-k8s.io',
  labelPlural: 'AWS Machine Templates',
  path: 'awsmachinetemplates',
  id: 'awsmachinetemplate',
  crd: false,
};

export const VirtualMachineModel: K8sKind = {
  kind: 'VirtualMachine',
  namespaced: true,
  label: 'Virtual Machine',
  plural: 'virtualmachines',
  apiVersion: 'v1alpha3',
  abbr: 'VM',
  apiGroup: 'kubevirt.io',
  labelPlural: 'Virtual Machines',
  path: 'virtualmachines',
  id: 'virtualmachine',
  crd: false,
};

export const VirtualMachineInstanceModel: K8sKind = {
  kind: 'VirtualMachineInstance',
  namespaced: true,
  label: 'Virtual Machine Instance',
  plural: 'virtualmachineinstances',
  apiVersion: 'v1alpha3',
  abbr: 'VMI',
  apiGroup: 'kubevirt.io',
  labelPlural: 'Virtual Machine Instances',
  path: 'virtualmachineinstances',
  id: 'virtualmachineinstance',
  crd: false,
};

export const UserModel: K8sKind = {
  kind: 'User',
  namespaced: false,
  label: 'User',
  plural: 'users',
  apiVersion: 'v1',
  abbr: 'U',
  apiGroup: 'tmax.io',
  labelPlural: 'Users',
  path: 'users',
  id: 'user',
  crd: false,
};

export const UserSecurityPolicyModel: K8sKind = {
  kind: 'Usersecuritypolicy',
  namespaced: false,
  label: 'User Security Policy',
  plural: 'usersecuritypolicies',
  apiGroup: 'tmax.io',
  apiVersion: 'v1',
  abbr: 'USP',
  labelPlural: 'User Security Policies',
  path: 'usersecuritypolicies',
  id: 'usersecuritypolicy',
  crd: false,
};

export const ClusterMenuPolicyModel: K8sKind = {
  kind: 'ClusterMenuPolicy',
  namespaced: false,
  label: 'Cluster Menu Policy',
  plural: 'clustermenupolicies',
  apiGroup: 'ui.tmax.io',
  apiVersion: 'v1',
  abbr: 'CMP',
  labelPlural: 'Cluster Menu Policies',
  path: 'clustermenupolicies',
  id: 'clustermenupolicy',
  crd: false,
};

export const NamespaceClaimModel: K8sKind = {
  kind: 'NamespaceClaim',
  namespaced: false,
  label: 'Namespace Claim',
  plural: 'namespaceclaims',
  apiVersion: 'v1',
  abbr: 'NC',
  apiGroup: 'tmax.io',
  labelPlural: 'Namespace Claims',
  path: 'namespaceclaims',
  id: 'namespaceclaim',
  crd: false,
};

export const ResourceQuotaClaimModel: K8sKind = {
  kind: 'ResourceQuotaClaim',
  namespaced: true,
  label: 'Resource Quota Claim',
  plural: 'resourcequotaclaims',
  apiVersion: 'v1',
  abbr: 'RQC',
  apiGroup: 'tmax.io',
  labelPlural: 'Resource Quota Claims',
  path: 'resourcequotaclaims',
  id: 'resourcequotaclaim',
  crd: false,
};

export const PodSecurityPolicyModel: K8sKind = {
  kind: 'PodSecurityPolicy',
  namespaced: false,
  label: 'Pod Security Policy',
  plural: 'podsecuritypolicies',
  apiVersion: 'v1beta1',
  abbr: 'PSP',
  apiGroup: 'policy',
  labelPlural: 'Pod Security Policies',
  path: 'podsecuritypolicies',
  id: 'podsecuritypolicie',
  crd: false,
};

export const LimitRangeModel: K8sKind = {
  kind: 'LimitRange',
  namespaced: true,
  label: 'Limit Range',
  plural: 'limitranges',
  apiVersion: 'v1',
  abbr: 'LR',
  labelPlural: 'Limit Ranges',
  path: 'limitranges',
  id: 'limitrange',
  crd: false,
};

export const RoleBindingClaimModel: K8sKind = {
  kind: 'RoleBindingClaim',
  namespaced: true,
  label: 'Role Binding Claim',
  plural: 'rolebindingclaims',
  apiVersion: 'v1',
  abbr: 'RBC',
  apiGroup: 'tmax.io',
  labelPlural: 'Role Binding Claims',
  path: 'rolebindingclaims',
  id: 'rolebindingclaim',
  crd: false,
};

export const CatalogSourceModel: K8sKind = {
  kind: 'CatalogSource',
  label: 'CatalogSource',
  labelPlural: 'CatalogSources',
  apiGroup: 'operators.coreos.com',
  apiVersion: 'v1alpha1',
  path: 'catalogsources',
  abbr: 'CS',
  namespaced: true,
  crd: true,
  plural: 'catalogsources',
};

export const ClusterServiceVersionModel: K8sKind = {
  kind: 'ClusterServiceVersion',
  label: 'ClusterServiceVersion',
  labelPlural: 'ClusterServiceVersions',
  apiGroup: 'operators.coreos.com',
  apiVersion: 'v1alpha1',
  path: 'clusterserviceversions',
  abbr: 'CSV',
  namespaced: true,
  crd: true,
  plural: 'clusterserviceversions',
  propagationPolicy: 'Foreground',
};

export const InstallPlanModel: K8sKind = {
  kind: 'InstallPlan',
  label: 'InstallPlan',
  labelPlural: 'InstallPlans',
  apiGroup: 'operators.coreos.com',
  apiVersion: 'v1alpha1',
  path: 'installplans',
  abbr: 'IP',
  namespaced: true,
  crd: true,
  plural: 'installplans',
};

export const TemplateModel: K8sKind = {
  kind: 'Template',
  namespaced: true,
  label: 'Template',
  plural: 'templates',
  apiVersion: 'v1',
  abbr: 'T',
  apiGroup: 'tmax.io',
  labelPlural: 'Templates',
  path: 'templates',
  id: 'template',
  crd: false,
};

export const TemplateInstanceModel: K8sKind = {
  kind: 'TemplateInstance',
  namespaced: true,
  label: 'Template Instance',
  plural: 'templateinstances',
  apiVersion: 'v1',
  abbr: 'TI',
  apiGroup: 'tmax.io',
  labelPlural: 'Template Instances',
  path: 'templateinstances',
  id: 'templateinstance',
  crd: false,
};

export const SubscriptionModel: K8sKind = {
  kind: 'Subscription',
  label: 'Subscription',
  labelPlural: 'Subscriptions',
  apiGroup: 'operators.coreos.com',
  apiVersion: 'v1alpha1',
  path: 'subscriptions',
  abbr: 'SUB',
  namespaced: true,
  crd: true,
  plural: 'subscriptions',
};

export const EtcdClusterModel: K8sKind = {
  kind: 'EtcdCluster',
  label: 'etcd Cluster',
  labelPlural: 'Etcd Clusters',
  apiGroup: 'etcd.database.coreos.com',
  apiVersion: 'v1beta2',
  path: 'etcdclusters',
  abbr: 'EC',
  namespaced: true,
  crd: true,
  plural: 'etcdclusters',
  propagationPolicy: 'Foreground',
};

export const PrometheusModel: K8sKind = {
  kind: 'Prometheus',
  label: 'Prometheus',
  labelPlural: 'Prometheuses',
  apiGroup: 'monitoring.coreos.com',
  apiVersion: 'v1',
  path: 'prometheuses',
  abbr: 'PI',
  namespaced: true,
  crd: true,
  plural: 'prometheuses',
  propagationPolicy: 'Foreground',
};

export const ServiceMonitorModel: K8sKind = {
  kind: 'ServiceMonitor',
  label: 'Service Monitor',
  labelPlural: 'Service Monitors',
  apiGroup: 'monitoring.coreos.com',
  apiVersion: 'v1',
  path: 'servicemonitors',
  abbr: 'SM',
  namespaced: true,
  crd: true,
  plural: 'servicemonitors',
  propagationPolicy: 'Foreground',
};

export const RegistryModel: K8sKind = {
  kind: 'Registry',
  namespaced: true,
  label: 'Registry',
  plural: 'registries',
  apiVersion: 'v1',
  abbr: 'RG',
  apiGroup: 'tmax.io',
  labelPlural: 'Registries',
  path: 'registries',
  id: 'registry',
  crd: false,
};

export const AlertmanagerModel: K8sKind = {
  kind: 'Alertmanager',
  label: 'Alertmanager',
  labelPlural: 'Alertmanagers',
  apiGroup: 'monitoring.coreos.com',
  apiVersion: 'v1',
  path: 'alertmanagers',
  abbr: 'AM',
  namespaced: true,
  plural: 'alertmanagers',
  propagationPolicy: 'Foreground',
  crd: false,
};

// export const ClusterModel: K8sKind = {
//   kind: 'Cluster',
//   label: 'Cluster',
//   labelPlural: 'Clusters',
//   apiGroup: 'multicluster.coreos.com',
//   path: 'clusters',
//   apiVersion: 'v1',
//   crd: true,
//   plural: 'clusters',
//   abbr: 'C',
//   namespaced: false,
// };

export const ChargebackReportModel: K8sKind = {
  kind: 'Report',
  label: 'Report',
  labelPlural: 'Reports',
  apiGroup: 'chargeback.coreos.com',
  path: 'reports',
  apiVersion: 'v1alpha1',
  crd: true,
  plural: 'reports',
  abbr: 'R',
  namespaced: true,
};

export const ServiceModel: K8sKind = {
  apiVersion: 'v1',
  label: 'Service',
  path: 'services',
  plural: 'services',
  abbr: 'S',
  namespaced: true,
  kind: 'Service',
  id: 'service',
  labelPlural: 'Services',
};

export const PodModel: K8sKind = {
  apiVersion: 'v1',
  label: 'Pod',
  path: 'pods',
  plural: 'pods',
  abbr: 'PD',
  namespaced: true,
  kind: 'Pod',
  id: 'pod',
  labelPlural: 'Pods',
};

export const ContainerModel: K8sKind = {
  apiVersion: 'v1',
  label: 'Container',
  path: 'containers',
  plural: 'containers',
  abbr: 'C',
  kind: 'Container',
  id: 'container',
  labelPlural: 'Containers',
};

export const DaemonSetModel: K8sKind = {
  label: 'Daemon Set',
  path: 'daemonsets',
  apiGroup: 'apps',
  plural: 'daemonsets',
  apiVersion: 'v1',
  abbr: 'DS',
  namespaced: true,
  propagationPolicy: 'Foreground',
  kind: 'DaemonSet',
  id: 'daemonset',
  labelPlural: 'Daemon Sets',
};

export const ReplicationControllerModel: K8sKind = {
  apiVersion: 'v1',
  label: 'Replication Controller',
  path: 'replicationcontrollers',
  plural: 'replicationcontrollers',
  abbr: 'RC',
  namespaced: true,
  propagationPolicy: 'Foreground',
  kind: 'ReplicationController',
  id: 'replicationcontroller',
  labelPlural: 'Replication Controllers',
};

export const UsergroupModel: K8sKind = {
  kind: 'Usergroup',
  namespaced: false,
  apiGroup: 'tmax.io',
  label: 'Usergroup',
  plural: 'usergroups',
  apiVersion: 'v1',
  abbr: 'UG',
  labelPlural: 'UserGroups',
  path: 'usergroups',
  id: 'usergroup',
  crd: false,
};

export const HorizontalPodAutoscalerModel: K8sKind = {
  label: 'Horizontal Pod Autoscaler',
  path: 'horizontalpodautoscalers',
  plural: 'horizontalpodautoscalers',
  apiVersion: 'v2beta1',
  apiGroup: 'autoscaling',
  abbr: 'HPA',
  namespaced: true,
  kind: 'HorizontalPodAutoscaler',
  id: 'horizontalpodautoscaler',
  labelPlural: 'HPA',
};

export const ServiceAccountModel: K8sKind = {
  apiVersion: 'v1',
  label: 'Service Account',
  path: 'serviceaccounts',
  plural: 'serviceaccounts',
  abbr: 'SA',
  namespaced: true,
  kind: 'ServiceAccount',
  id: 'serviceaccount',
  labelPlural: 'Service Accounts',
};

export const ReplicaSetModel: K8sKind = {
  label: 'Replica Set',
  apiVersion: 'v1',
  path: 'replicasets',
  apiGroup: 'apps',
  plural: 'replicasets',
  abbr: 'RS',
  namespaced: true,
  propagationPolicy: 'Foreground',
  kind: 'ReplicaSet',
  id: 'replicaset',
  labelPlural: 'Replica Sets',
};

export const DeploymentModel: K8sKind = {
  label: 'Deployment',
  apiVersion: 'v1',
  path: 'deployments',
  apiGroup: 'apps',
  plural: 'deployments',
  abbr: 'D',
  namespaced: true,
  propagationPolicy: 'Foreground',
  kind: 'Deployment',
  id: 'deployment',
  labelPlural: 'Deployments',
};

export const DeploymentConfigModel: K8sKind = {
  label: 'Deployment Config',
  apiVersion: 'v1',
  path: 'deploymentconfigs',
  apiGroup: 'apps.openshift.io',
  plural: 'deploymentconfigs',
  abbr: 'DC',
  namespaced: true,
  propagationPolicy: 'Foreground',
  kind: 'DeploymentConfig',
  id: 'deploymentconfig',
  labelPlural: 'Deployment Configs',
};

export const BuildConfigModel: K8sKind = {
  label: 'Build Config',
  apiVersion: 'v1',
  path: 'buildconfigs',
  apiGroup: 'build.openshift.io',
  plural: 'buildconfigs',
  abbr: 'BC',
  namespaced: true,
  propagationPolicy: 'Foreground',
  kind: 'BuildConfig',
  id: 'buildconfig',
  labelPlural: 'Build Configs',
};

export const ImageModel: K8sKind = {
  label: 'Image',
  apiVersion: 'v1',
  path: 'images',
  apiGroup: 'tmax.io',
  plural: 'images',
  abbr: 'I',
  namespaced: true,
  kind: 'Image',
  id: 'image',
  labelPlural: 'Images',
  crd: false,
};

export const BuildModel: K8sKind = {
  label: 'Build',
  apiVersion: 'v1',
  path: 'builds',
  apiGroup: 'build.openshift.io',
  plural: 'builds',
  abbr: 'B',
  namespaced: true,
  propagationPolicy: 'Foreground',
  kind: 'Build',
  id: 'build',
  labelPlural: 'Builds',
};

export const ImageStreamModel: K8sKind = {
  label: 'Image Stream',
  apiVersion: 'v1',
  path: 'imagestreams',
  apiGroup: 'image.openshift.io',
  plural: 'imagestreams',
  abbr: 'IS',
  namespaced: true,
  propagationPolicy: 'Foreground',
  kind: 'ImageStream',
  id: 'imagestream',
  labelPlural: 'Image Streams',
};

export const ImageStreamTagModel: K8sKind = {
  label: 'Image Stream Tag',
  apiVersion: 'v1',
  path: 'imagestreamtags',
  apiGroup: 'image.openshift.io',
  plural: 'imagestreamtags',
  abbr: 'IST',
  namespaced: true,
  propagationPolicy: 'Foreground',
  kind: 'ImageStreamTag',
  id: 'imagestreamtag',
  labelPlural: 'Image Stream Tags',
};

export const JobModel: K8sKind = {
  label: 'Job',
  apiVersion: 'v1',
  path: 'jobs',
  apiGroup: 'batch',
  plural: 'jobs',
  abbr: 'J',
  namespaced: true,
  propagationPolicy: 'Foreground',
  kind: 'Job',
  id: 'job',
  labelPlural: 'Jobs',
};

export const NodeModel: K8sKind = {
  apiVersion: 'v1',
  label: 'Node',
  path: 'nodes',
  plural: 'nodes',
  abbr: 'N',
  kind: 'Node',
  id: 'node',
  labelPlural: 'Nodes',
};

export const EventModel: K8sKind = {
  apiVersion: 'v1',
  label: 'Event',
  path: 'events',
  plural: 'events',
  abbr: 'E',
  namespaced: true,
  kind: 'Event',
  id: 'event',
  labelPlural: 'Events',
};

export const ComponentStatusModel: K8sKind = {
  apiVersion: 'v1',
  label: 'Component Status',
  labelPlural: 'Component Statuses',
  path: 'componentstatuses',
  plural: 'componentstatuses',
  abbr: 'CS',
  kind: 'ComponentStatus',
  id: 'componentstatus',
};

export const NamespaceModel: K8sKind = {
  apiVersion: 'v1',
  label: 'Namespace',
  path: 'namespaces',
  plural: 'namespaces',
  abbr: 'NS',
  kind: 'Namespace',
  id: 'namespace',
  labelPlural: 'Namespaces',
};

export const ProjectModel: K8sKind = {
  apiVersion: 'v1',
  apiGroup: 'project.openshift.io',
  label: 'Project',
  path: 'projects',
  plural: 'projects',
  abbr: 'PR',
  kind: 'Project',
  id: 'project',
  labelPlural: 'Projects',
};

export const ProjectRequestModel: K8sKind = {
  apiVersion: 'v1',
  apiGroup: 'project.openshift.io',
  label: 'Project Request',
  path: 'projectrequests',
  plural: 'projectrequests',
  abbr: '',
  kind: 'ProjectRequest',
  id: 'projectrequest',
  labelPlural: 'Project Requests',
};

export const IngressModel: K8sKind = {
  label: 'Ingress',
  labelPlural: 'Ingresses',
  apiGroup: 'extensions',
  apiVersion: 'v1beta1',
  path: 'ingresses',
  plural: 'ingresses',
  abbr: 'I',
  namespaced: true,
  kind: 'Ingress',
  id: 'ingress',
};

export const RouteModel: K8sKind = {
  label: 'Route',
  labelPlural: 'Routes',
  apiGroup: 'route.openshift.io',
  apiVersion: 'v1',
  path: 'routes',
  plural: 'routes',
  abbr: 'RT',
  namespaced: true,
  kind: 'Route',
  id: 'route',
};

export const ConfigMapModel: K8sKind = {
  apiVersion: 'v1',
  label: 'Config Map',
  path: 'configmaps',
  plural: 'configmaps',
  abbr: 'CM',
  namespaced: true,
  kind: 'ConfigMap',
  id: 'configmap',
  labelPlural: 'Config Maps',
};

export const SecretModel: K8sKind = {
  apiVersion: 'v1',
  label: 'Secret',
  path: 'secrets',
  plural: 'secrets',
  abbr: 'SCR',
  namespaced: true,
  kind: 'Secret',
  id: 'secret',
  labelPlural: 'Secrets',
};

export const ClusterRoleBindingModel: K8sKind = {
  label: 'Cluster Role Binding',
  apiGroup: 'rbac.authorization.k8s.io',
  apiVersion: 'v1',
  path: 'clusterrolebindings',
  plural: 'clusterrolebindings',
  abbr: 'CRB',
  kind: 'ClusterRoleBinding',
  id: 'clusterrolebinding',
  labelPlural: 'Cluster Role Bindings',
};

export const ClusterRoleModel: K8sKind = {
  label: 'Cluster Role',
  apiGroup: 'rbac.authorization.k8s.io',
  apiVersion: 'v1',
  path: 'clusterroles',
  plural: 'clusterroles',
  abbr: 'CR',
  kind: 'ClusterRole',
  id: 'clusterrole',
  labelPlural: 'Cluster Roles',
};

export const RoleBindingModel: K8sKind = {
  label: 'Role Binding',
  apiGroup: 'rbac.authorization.k8s.io',
  apiVersion: 'v1',
  path: 'rolebindings',
  plural: 'rolebindings',
  abbr: 'RB',
  namespaced: true,
  kind: 'RoleBinding',
  id: 'rolebinding',
  labelPlural: 'Role Bindings',
};

export const RoleModel: K8sKind = {
  label: 'Role',
  apiGroup: 'rbac.authorization.k8s.io',
  apiVersion: 'v1',
  path: 'roles',
  plural: 'roles',
  abbr: 'R',
  namespaced: true,
  kind: 'Role',
  id: 'role',
  labelPlural: 'Roles',
};

export const SelfSubjectAccessReviewModel: K8sKind = {
  label: 'SelfSubjectAccessReview',
  apiGroup: 'authorization.k8s.io',
  apiVersion: 'v1',
  path: 'selfsubjectaccessreviews',
  plural: 'selfsubjectaccessreviews',
  abbr: 'SSAR',
  namespaced: true,
  kind: 'SelfSubjectAccessReview',
  id: 'selfsubjectaccessreview',
  labelPlural: 'Self Subject Access Reviews',
};

export const TectonicVersionModel: K8sKind = {
  label: 'Tectonic Version',
  apiGroup: 'tco.coreos.com',
  apiVersion: 'v1',
  path: 'tectonicversions',
  plural: 'tectonicversions',
  abbr: 'TV',
  namespaced: true,
  kind: 'TectonicVersion',
  id: 'tectonicversion',
  labelPlural: 'Tectonic Versions',
};

export const ChannelOperatorConfigModel: K8sKind = {
  label: 'Channel Operator Config',
  apiGroup: 'tco.coreos.com',
  apiVersion: 'v1',
  path: 'channeloperatorconfigs',
  plural: 'channeloperatorconfigs',
  abbr: 'COC',
  namespaced: true,
  kind: 'ChannelOperatorConfig',
  id: 'channeloperatorconfig',
  labelPlural: 'Channel Operator Configs',
};

export const AppVersionModel: K8sKind = {
  label: 'AppVersion',
  apiGroup: 'tco.coreos.com',
  apiVersion: 'v1',
  path: 'appversions',
  plural: 'appversions',
  abbr: 'AV',
  namespaced: true,
  kind: 'AppVersion',
  id: 'appversion',
  labelPlural: 'AppVersions',
};

export const PersistentVolumeModel: K8sKind = {
  label: 'Persistent Volume',
  apiVersion: 'v1',
  path: 'persistentvolumes',
  plural: 'persistentvolumes',
  abbr: 'PV',
  kind: 'PersistentVolume',
  id: 'persistentvolume',
  labelPlural: 'Persistent Volumes',
};

export const PersistentVolumeClaimModel: K8sKind = {
  label: 'Persistent Volume Claim',
  apiVersion: 'v1',
  path: 'persistentvolumeclaims',
  plural: 'persistentvolumeclaims',
  abbr: 'PVC',
  namespaced: true,
  kind: 'PersistentVolumeClaim',
  id: 'persistentvolumeclaim',
  labelPlural: 'Persistent Volume Claims',
};
export const ConditionModel: K8sKind = {
  kind: 'Condition',
  namespaced: true,
  label: 'Condition',
  plural: 'conditions',
  apiVersion: 'v1alpha1',
  abbr: 'PC',
  apiGroup: 'tekton.dev',
  labelPlural: 'Pipeline Conditions',
  path: 'conditions',
  id: 'condition',
  crd: false,
};
export const TaskModel: K8sKind = {
  kind: 'Task',
  namespaced: true,
  label: 'Task',
  plural: 'tasks',
  apiVersion: 'v1alpha1',
  abbr: 'TK',
  apiGroup: 'tekton.dev',
  labelPlural: 'Tasks',
  path: 'tasks',
  id: 'task',
  crd: false,
};
export const ClusterTaskModel: K8sKind = {
  kind: 'ClusterTask',
  namespaced: false,
  label: 'ClusterTask',
  plural: 'clustertasks',
  apiVersion: 'v1alpha1',
  abbr: 'CTK',
  apiGroup: 'tekton.dev',
  labelPlural: 'Cluster Tasks',
  path: 'clustertasks',
  id: 'clustertask',
  crd: false,
};
export const TaskRunModel: K8sKind = {
  kind: 'TaskRun',
  namespaced: true,
  label: 'Task Run',
  plural: 'taskruns',
  apiVersion: 'v1alpha1',
  abbr: 'TR',
  apiGroup: 'tekton.dev',
  labelPlural: 'Task Runs',
  path: 'taskruns',
  id: 'taskrun',
  crd: false,
};
export const PipelineResourceModel: K8sKind = {
  kind: 'PipelineResource',
  namespaced: true,
  label: 'Pipeline Resource',
  plural: 'pipelineresources',
  apiVersion: 'v1alpha1',
  abbr: 'PRS',
  apiGroup: 'tekton.dev',
  labelPlural: 'Pipeline Resources',
  path: 'pipelineresources',
  id: 'pipelineresource',
  crd: false,
};
export const PipelineModel: K8sKind = {
  kind: 'Pipeline',
  namespaced: true,
  label: 'Pipeline',
  plural: 'pipelines',
  apiVersion: 'v1alpha1',
  abbr: 'P',
  apiGroup: 'tekton.dev',
  labelPlural: 'Pipelines',
  path: 'pipelines',
  id: 'pipeline',
  crd: false,
};
export const PipelineRunModel: K8sKind = {
  kind: 'PipelineRun',
  namespaced: true,
  label: 'Pipeline Run',
  plural: 'pipelineruns',
  apiVersion: 'v1alpha1',
  abbr: 'PR',
  apiGroup: 'tekton.dev',
  labelPlural: 'Pipeline Runs',
  path: 'pipelineruns',
  id: 'pipelinerun',
  crd: false,
};
export const ApprovalModel: K8sKind = {
  kind: 'Approval',
  namespaced: true,
  label: 'Approval',
  plural: 'approvals',
  apiVersion: 'v1',
  abbr: 'PA',
  apiGroup: 'tmax.io',
  labelPlural: 'Pipeline Approvals',
  path: 'approvals',
  id: 'approval',
  crd: false,
};
export const PetsetModel: K8sKind = {
  apiVersion: 'v1',
  label: 'Petset',
  plural: 'petsets',
  abbr: 'PS',
  path: 'petsets',
  propagationPolicy: 'Foreground',
  kind: 'Petset',
  id: 'petset',
  labelPlural: 'Petsets',
};

export const StatefulSetModel: K8sKind = {
  label: 'Stateful Set',
  apiGroup: 'apps',
  apiVersion: 'v1',
  path: 'statefulsets',
  plural: 'statefulsets',
  abbr: 'SS',
  namespaced: true,
  propagationPolicy: 'Foreground',
  kind: 'StatefulSet',
  id: 'statefulset',
  labelPlural: 'Stateful Sets',
};

export const ResourceQuotaModel: K8sKind = {
  label: 'Resource Quota',
  apiVersion: 'v1',
  path: 'resourcequotas',
  plural: 'resourcequotas',
  abbr: 'RQ',
  namespaced: true,
  kind: 'ResourceQuota',
  id: 'resourcequota',
  labelPlural: 'Resource Quotas',
};

export const NetworkPolicyModel: K8sKind = {
  label: 'Network Policy',
  labelPlural: 'Network Policies',
  apiVersion: 'v1',
  apiGroup: 'networking.k8s.io',
  path: 'networkpolicies',
  plural: 'networkpolicies',
  abbr: 'NP',
  namespaced: true,
  kind: 'NetworkPolicy',
  id: 'networkpolicy',
  crd: false,
};

export const CustomResourceDefinitionModel: K8sKind = {
  label: 'Custom Resource Definition',
  apiGroup: 'apiextensions.k8s.io',
  apiVersion: 'v1beta1',
  path: 'customresourcedefinitions',
  abbr: 'CRD',
  namespaced: false,
  plural: 'customresourcedefinitions',
  kind: 'CustomResourceDefinition',
  id: 'customresourcedefinition',
  labelPlural: 'Custom Resource Definitions',
};

export const CronJobModel: K8sKind = {
  label: 'Cron Job',
  apiVersion: 'v1beta1',
  path: 'cronjobs',
  apiGroup: 'batch',
  plural: 'cronjobs',
  abbr: 'CJ',
  namespaced: true,
  kind: 'CronJob',
  id: 'cronjob',
  labelPlural: 'Cron Jobs',
  propagationPolicy: 'Foreground',
};

export const StorageClassModel: K8sKind = {
  label: 'Storage Class',
  labelPlural: 'Storage Classes',
  apiVersion: 'v1',
  path: 'storageclasses',
  apiGroup: 'storage.k8s.io',
  plural: 'storageclasses',
  abbr: 'SCS',
  namespaced: false,
  kind: 'StorageClass',
  id: 'storageclass',
};

export const ServiceBrokerModel: K8sKind = {
  kind: 'ServiceBroker',
  namespaced: true,
  label: 'Service Broker',
  plural: 'servicebrokers',
  apiVersion: 'v1beta1',
  abbr: 'SB',
  apiGroup: 'servicecatalog.k8s.io',
  labelPlural: 'Service Brokers',
  path: 'servicebrokers',
  id: 'servicebroker',
  crd: false,
};

export const ServiceClassModel: K8sKind = {
  kind: 'ServiceClass',
  namespaced: true,
  label: 'Service Class',
  plural: 'serviceclasses',
  apiVersion: 'v1beta1',
  abbr: 'SC',
  apiGroup: 'servicecatalog.k8s.io',
  labelPlural: 'Service Classes',
  path: 'serviceclasses',
  id: 'serviceclass',
  crd: false,
};

export const ServicePlanModel: K8sKind = {
  kind: 'ServicePlan',
  namespaced: true,
  label: 'Service Plan',
  plural: 'serviceplans',
  apiVersion: 'v1beta1',
  abbr: 'SP',
  apiGroup: 'servicecatalog.k8s.io',
  labelPlural: 'Service Plans',
  path: 'serviceplans',
  id: 'serviceplan',
  crd: false,
};

export const ClusterServiceBrokerModel: K8sKind = {
  label: 'Cluster Service Broker',
  labelPlural: 'Cluster Service Brokers',
  apiVersion: 'v1beta1',
  path: 'clusterservicebrokers',
  apiGroup: 'servicecatalog.k8s.io',
  plural: 'clusterservicebrokers',
  abbr: 'CSB',
  namespaced: false,
  kind: 'ClusterServiceBroker',
  id: 'clusterservicebroker',
  crd: false,
};

export const ClusterServiceClassModel: K8sKind = {
  label: 'Cluster Service Class',
  labelPlural: 'Cluster Service Classes',
  apiVersion: 'v1beta1',
  path: 'clusterserviceclasses',
  apiGroup: 'servicecatalog.k8s.io',
  plural: 'clusterserviceclasses',
  abbr: 'CSC',
  namespaced: false,
  kind: 'ClusterServiceClass',
  id: 'clusterserviceclass',
  crd: false,
};

export const DataVolumeModel: K8sKind = {
  kind: 'DataVolume',
  namespaced: true,
  label: 'Data Volume',
  plural: 'datavolumes',
  apiVersion: 'v1alpha1',
  abbr: 'DV',
  apiGroup: 'cdi.kubevirt.io',
  labelPlural: 'Data Volumes',
  path: 'datavolumes',
  id: 'datavolume',
  crd: false,
};

export const ClusterServicePlanModel: K8sKind = {
  label: 'Cluster Service Plan',
  labelPlural: 'Cluster Service Plans',
  apiVersion: 'v1beta1',
  path: 'clusterserviceplans',
  apiGroup: 'servicecatalog.k8s.io',
  plural: 'clusterserviceplans',
  abbr: 'CSP',
  namespaced: false,
  kind: 'ClusterServicePlan',
  id: 'clusterserviceplan',
  crd: false,
};

export const ServiceInstanceModel: K8sKind = {
  label: 'Service Instance',
  labelPlural: 'Service Instances',
  apiVersion: 'v1beta1',
  path: 'serviceinstances',
  apiGroup: 'servicecatalog.k8s.io',
  plural: 'serviceinstances',
  abbr: 'SI',
  namespaced: true,
  kind: 'ServiceInstance',
  id: 'serviceinstance',
};

export const ServiceBindingModel: K8sKind = {
  label: 'Service Binding',
  labelPlural: 'Service Bindings',
  apiVersion: 'v1beta1',
  path: 'servicebindings',
  apiGroup: 'servicecatalog.k8s.io',
  plural: 'servicebindings',
  abbr: 'SB',
  namespaced: true,
  kind: 'ServiceBinding',
  id: 'servicebinding',
};
export const VirtualServiceModel: K8sKind = {
  label: 'Virtual Service',
  labelPlural: 'Virtual Services',
  apiVersion: 'v1alpha3',
  path: 'virtualservices',
  apiGroup: 'networking.istio.io',
  plural: 'virtualservices',
  abbr: 'VS',
  namespaced: true,
  kind: 'VirtualService',
  id: 'virtualservice',
};
export const DestinationRuleModel: K8sKind = {
  label: 'Destination Rule',
  labelPlural: 'Destination Rules',
  apiVersion: 'v1alpha3',
  path: 'destinationrules',
  apiGroup: 'networking.istio.io',
  plural: 'destinationrules',
  abbr: 'DR',
  namespaced: true,
  kind: 'DestinationRule',
  id: 'destinationrule',
};
export const EnvoyFilterModel: K8sKind = {
  label: 'Envoy Filter',
  labelPlural: 'Envoy Filters',
  apiVersion: 'v1alpha3',
  path: 'envoyfilters',
  apiGroup: 'networking.istio.io',
  plural: 'envoyfilters',
  abbr: 'EF',
  namespaced: true,
  kind: 'EnvoyFilter',
  id: 'envoyfilter',
};
export const GatewayModel: K8sKind = {
  label: 'Gateway',
  labelPlural: 'Gateways',
  apiVersion: 'v1alpha3',
  path: 'gateways',
  apiGroup: 'networking.istio.io',
  plural: 'gateways',
  abbr: 'G',
  namespaced: true,
  kind: 'Gateway',
  id: 'gateway',
};
export const SidecarModel: K8sKind = {
  label: 'Side Car',
  labelPlural: 'SideCars',
  apiVersion: 'v1alpha3',
  path: 'sidecars',
  apiGroup: 'networking.istio.io',
  plural: 'sidecars',
  abbr: 'SC',
  namespaced: true,
  kind: 'Sidecar',
  id: 'sidecar',
};
export const ServiceEntryModel: K8sKind = {
  label: 'Service Entry',
  labelPlural: 'Service Entries',
  apiVersion: 'v1alpha3',
  path: 'serviceentries',
  apiGroup: 'networking.istio.io',
  plural: 'serviceentries',
  abbr: 'SE',
  namespaced: true,
  kind: 'ServiceEntry',
  id: 'serviceentry',
};
export const RequestAuthenticationModel: K8sKind = {
  label: 'Request Authentication',
  labelPlural: 'Request Authentications',
  apiVersion: 'v1beta1',
  path: 'requestauthentications',
  apiGroup: 'security.istio.io',
  plural: 'requestauthentications',
  abbr: 'RA',
  namespaced: true,
  kind: 'RequestAuthentication',
  id: 'requestauthentication',
};
export const PeerAuthenticationModel: K8sKind = {
  label: 'Peer Authentication',
  labelPlural: 'Peer Authentications',
  apiVersion: 'v1beta1',
  path: 'peerauthentications',
  apiGroup: 'security.istio.io',
  plural: 'peerauthentications',
  abbr: 'PA',
  namespaced: true,
  kind: 'PeerAuthentication',
  id: 'peerauthentication',
};
export const AuthorizationPolicyModel: K8sKind = {
  label: 'Authorization Policy',
  labelPlural: 'Authorization Policies',
  apiVersion: 'v1beta1',
  path: 'authorizationpolicies',
  apiGroup: 'security.istio.io',
  plural: 'authorizationpolicies',
  abbr: 'AP',
  namespaced: true,
  kind: 'AuthorizationPolicy',
  id: 'authorizationpolicy',
};
export const NotebookModel: K8sKind = {
  label: 'Notebook',
  labelPlural: 'Notebook Server',
  apiVersion: 'v1',
  path: 'notebooks',
  apiGroup: 'kubeflow.org',
  plural: 'notebooks',
  abbr: 'NB',
  namespaced: true,
  kind: 'Notebook',
  id: 'notebook',
};
export const ExperimentModel: K8sKind = {
  label: 'Experiment',
  labelPlural: 'Katib',
  apiVersion: 'v1alpha3',
  path: 'experiments',
  apiGroup: 'kubeflow.org',
  plural: 'experiments',
  abbr: 'EX',
  namespaced: true,
  kind: 'Experiment',
  id: 'experiment',
};
export const TrainingJobModel: K8sKind = {
  label: 'Training Job',
  labelPlural: 'Training Jobs',
  apiVersion: 'v1',
  path: 'trainingjobs',
  apiGroup: 'kubeflow.org',
  plural: 'trainingjobs',
  abbr: 'TJ',
  namespaced: true,
  kind: 'TrainingJob',
  id: 'trainingjob',
  crd: false,
};
export const TFJobModel: K8sKind = {
  label: 'TFJob',
  labelPlural: 'TF Jobs',
  apiVersion: 'v1',
  path: 'tfjobs',
  apiGroup: 'kubeflow.org',
  plural: 'tfjobs',
  abbr: 'TFJ',
  namespaced: true,
  kind: 'TFJob',
  id: 'tfjob',
};
export const PyTorchJobModel: K8sKind = {
  label: 'PyTorchJob',
  labelPlural: 'PyTorch Jobs',
  apiVersion: 'v1',
  path: 'pytorchjobs',
  apiGroup: 'kubeflow.org',
  plural: 'pytorchjobs',
  abbr: 'PTJ',
  namespaced: true,
  kind: 'PyTorchJob',
  id: 'pytorchjob',
};
export const InferenceServiceModel: K8sKind = {
  label: 'Inference Service',
  labelPlural: 'KFServing',
  apiVersion: 'v1alpha2',
  path: 'inferenceservices',
  apiGroup: 'serving.kubeflow.org',
  plural: 'inferenceservices',
  abbr: 'IS',
  namespaced: true,
  kind: 'InferenceService',
  id: 'inferenceservice',
};
export const WorkflowTemplateModel: K8sKind = {
  label: 'WorkflowTemplate',
  labelPlural: 'Workflow Templates',
  apiVersion: 'v1alpha1',
  path: 'workflowtemplates',
  apiGroup: 'argoproj.io',
  plural: 'workflowtemplates',
  abbr: 'WFT',
  namespaced: true,
  kind: 'WorkflowTemplate',
  id: 'workflowtemplate',
};
export const WorkflowModel: K8sKind = {
  label: 'Workflow',
  labelPlural: 'Workflows',
  apiVersion: 'v1alpha1',
  path: 'workflows',
  apiGroup: 'argoproj.io',
  plural: 'workflows',
  abbr: 'WF',
  namespaced: true,
  kind: 'Workflow',
  id: 'workflow',
};
export const CatalogServiceClaimModel: K8sKind = {
  label: 'CatalogServiceClaim',
  labelPlural: 'Catalog Service Claim',
  apiVersion: 'v1',
  path: 'catalogserviceclaims',
  apiGroup: 'tmax.io',
  plural: 'catalogserviceclaims',
  abbr: 'CSC',
  namespaced: true,
  kind: 'CatalogServiceClaim',
  id: 'catalogserviceclaim',
};
