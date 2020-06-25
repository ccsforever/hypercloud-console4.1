import * as _ from 'lodash-es';
import * as React from 'react';
import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { Route, Switch, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EmptyBox, StatusBox } from './index';
import { PodsPage } from '../pod';
import { ImagesPage } from '../image';
import { TrafficPage } from '../traffic';
import { TracePage } from '../trace';
import { AsyncComponent } from '../utils/async';

const editYamlComponent = props => {
  const { t } = useTranslation();
  return <AsyncComponent loader={() => import('../edit-yaml').then(c => c.EditYAML)} obj={props.obj} t={t} />;
};

class PodsComponent extends React.PureComponent {
  render() {
    const {
      metadata: { namespace },
      spec: { selector },
    } = this.props.obj;
    if (_.isEmpty(selector)) {
      return <EmptyBox label="Pod" />;
    }

    // Hide the create button to avoid confusion when showing pods for an object.
    // Otherwise it might seem like you click "Create Pod" to add replicas instead
    // of scaling the owner.
    return <PodsPage showTitle={false} namespace={namespace} selector={selector} canCreate={false} />;
  }
}

class ImageComponent extends React.PureComponent {
  render() {
    const {
      metadata: { namespace },
      // spec: { selector },
    } = this.props.obj;
    // if (_.isEmpty(selector)) {
    //   return <EmptyBox label="Pod" />;
    // }

    // Hide the create button to avoid confusion when showing pods for an object.
    // Otherwise it might seem like you click "Create Pod" to add replicas instead
    // of scaling the owner.
    return <ImagesPage showTitle={false} namespace={namespace} canCreate={false} />;
  }
}
class TrafficComponent extends React.PureComponent {
  render() {
    const {
      metadata: { namespace, name },
    } = this.props.obj;
    return <TrafficPage showTitle={false} namespace={namespace} name={name} canCreate={false} />;
  }
}

class TraceComponent extends React.PureComponent {
  render() {
    const {
      metadata: { namespace, name },
    } = this.props.obj;
    return <TracePage showTitle={false} namespace={namespace} name={name} canCreate={false} />;
  }
}

export const navFactory = {
  details: (component, name = '') => ({
    href: '',
    name: name || 'Overview',
    component,
  }),
  events: (component, name = '') => ({
    href: 'events',
    name: name || 'Events',
    component,
  }),
  logs: (component, name) => ({
    href: 'logs',
    name: name || 'Logs',
    component,
  }),
  editYaml: (name = '', component = editYamlComponent) => ({
    href: 'yaml',
    name: name || 'YAML',
    component: component,
  }),
  images: (name, component) => ({
    href: 'images',
    name: name || 'Images',
    component: component || ImageComponent,
  }),
  pods: (name, component) => ({
    href: 'pods',
    name: name || 'Pods',
    component: component || PodsComponent,
  }),
  roles: (name, component) => ({
    href: 'roles',
    name: name || 'Role Bindings',
    component,
  }),
  builds: (name, component) => ({
    href: 'builds',
    name: name || 'Builds',
    component,
  }),
  envEditor: (component, name) => ({
    href: 'environment',
    name: name || 'Environment',
    component,
  }),
  metering: (name, component) => ({
    href: 'metering',
    name: name || 'Metering',
    component,
  }),
  traffic: (name, component) => ({
    href: 'traffic',
    name: name || 'traffic',
    component: component || TrafficComponent,
  }),
  trace: (name, component) => ({
    href: 'trace',
    name: name || 'trace',
    component: component || TraceComponent,
  }),
};

/** @type {React.SFC<{pages: {href: string, name: string}[], basePath: string}>} */
export const NavBar = ({ pages, basePath }) => {
  const divider = <li className="co-m-vert-nav__menu-item co-m-vert-nav__menu-item--divider" key="_divider" />;
  basePath = basePath.replace(/\/$/, '');

  return (
    <ul className="co-m-vert-nav__menu">
      {_.flatten(
        _.map(pages, ({ name, href }, i) => {
          const klass = classNames('co-m-vert-nav__menu-item', { 'co-m-vert-nav-item--active': location.pathname.replace(basePath, '/').endsWith(`/${href}`) });
          const tab = (
            <li className={klass} key={name}>
              <Link to={`${basePath}/${href}`}>{name}</Link>
            </li>
          );

          // These tabs go before the divider
          const before = ['', 'edit', 'yaml'];
          return !before.includes(href) && i !== 0 && before.includes(pages[i - 1].href) ? [divider, tab] : [tab];
        }),
      )}
    </ul>
  );
};
NavBar.displayName = 'NavBar';

/** @augments {React.PureComponent<{className?: string, label?: string, pages: {href: string, name: string, component: React.ComponentType}[], match: any, resourceKeys?: string[]}>} */
export class VertNav extends React.PureComponent {
  render() {
    const props = this.props;

    const componentProps = _.pick(props, ['filters', 'selected', 'match']);
    componentProps.obj = props.obj.data;
    const extraResources = _.reduce(props.resourceKeys, (acc, key) => ({ ...acc, [key]: props[key].data }), {});

    const routes = props.pages.map(p => {
      const path = `${props.match.url}/${p.href}`;
      const render = () => {
        return <p.component {...componentProps} {...extraResources} />;
      };
      return <Route path={path} exact key={p.name} render={render} />;
    });

    return (
      <div className={props.className}>
        <div className="co-m-vert-nav">
          {!props.hideNav && <NavBar pages={props.pages} basePath={props.match.url} />}
          <StatusBox {...props.obj} EmptyMsg={props.EmptyMsg} label={props.label}>
            <Switch> {routes} </Switch>
          </StatusBox>
        </div>
      </div>
    );
  }
}

VertNav.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      name: PropTypes.string,
      component: PropTypes.func,
    }),
  ),
  className: PropTypes.string,
  hideNav: PropTypes.bool,
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};
