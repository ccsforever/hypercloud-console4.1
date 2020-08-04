import * as _ from 'lodash-es';
import * as React from 'react';
import * as fuzzy from 'fuzzysearch';
// import { Link } from 'react-router-dom';

import { ColHead, DetailsPage, List, ListHeader, MultiListPage, ResourceRow, TextFilter } from '../factory';
import { Cog, SectionHeading, MsgBox, navFactory, ResourceCog, Loading, ResourceLink, Timestamp } from '../utils';
import { BindingName, BindingsList, RulesList, RoleBindingsPage } from './index';
import { flatten as bindingsFlatten } from './bindings';
import { flagPending, connectToFlags, FLAGS } from '../../features';
import { useTranslation } from 'react-i18next';
import { ResourcePlural } from '../utils/lang/resource-plural';

export const isSystemRole = role => _.startsWith(role.metadata.name, 'system:');

// const addHref = (name, ns) => ns ? `/k8s/ns/${ns}/roles/${name}/add-rule` : `/k8s/cluster/clusterroles/${name}/add-rule`;

export const roleKind = role => (role.metadata.namespace ? 'Role' : 'ClusterRole');

const menuActions = [
  // This page is temporarily disabled until we update the safe resources list.
  // (kind, role) => ({
  //   label: 'Add Rule...',
  //   href: addHref(role.metadata.name, role.metadata.namespace),
  // }),
  (kind, role) => {
    const { t } = useTranslation();
    return {
      label: t('CONTENT:ADDROLEBINDING'),
      href: `/k8s/cluster/rolebindings/new?rolekind=${roleKind(role)}&rolename=${role.metadata.name}`,
    };
  },
  Cog.factory.Edit,
  Cog.factory.Delete,
];

const Header = props => {
  const { t } = useTranslation();
  return (
    <ListHeader>
      <ColHead {...props} className="col-xs-6" sortField="metadata.name">
        {t('CONTENT:NAME')}
      </ColHead>
      <ColHead {...props} className="col-xs-6" sortField="metadata.namespace">
        {t('CONTENT:NAMESPACE')}
      </ColHead>
    </ListHeader>
  );
};

const Row = ({ obj: role }) => {
  const { t } = useTranslation();
  return (
    <div className="row co-resource-list__item">
      <div className="col-xs-6 co-resource-link-wrapper">
        <ResourceCog actions={menuActions} kind={roleKind(role)} resource={role} />
        <ResourceLink kind={roleKind(role)} name={role.metadata.name} namespace={role.metadata.namespace} />
      </div>
      <div className="col-xs-6 co-break-word">{role.metadata.namespace ? <ResourceLink kind="Namespace" name={role.metadata.namespace} /> : t('CONTENT:ALL')}</div>
    </div>
  );
};

// class Details extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.changeFilter = e => this.setState({ ruleFilter: e.target.value });
//   }
const Details = props => {
  // render() {
  const ruleObj = props.obj;
  const { creationTimestamp, name, namespace } = ruleObj.metadata;
  const [ruleFilter, setruleFilter] = React.useState('');
  const { t } = useTranslation();

  let rules = ruleObj.rules;

  const changeFilter = e => {
    setruleFilter(e.target.value);
  };

  if (ruleFilter) {
    const fuzzyCaseInsensitive = (a, b) => fuzzy(_.toLower(a), _.toLower(b));
    const searchKeys = ['nonResourceURLs', 'resources', 'verbs'];
    rules = rules.filter(rule => searchKeys.some(k => _.some(rule[k], v => fuzzyCaseInsensitive(ruleFilter, v))));
  }
  return (
    <div>
      <div className="co-m-pane__body">
        <SectionHeading text={t('ADDITIONAL:OVERVIEWTITLE', { something: ResourcePlural('ROLE', t) })} />
        <div className="row">
          <div className="col-xs-6">
            <dl className="co-m-pane__details">
              <dt>{t('CONTENT:NAME')}</dt>
              {/* <dt>Role Name</dt> */}
              <dd>{name}</dd>
              {namespace && (
                <div>
                  <dt>{t('CONTENT:NAMESPACE')}</dt>
                  <dd>
                    <ResourceLink kind="Namespace" name={namespace} />
                  </dd>
                </div>
              )}
            </dl>
          </div>
          <div className="col-xs-6">
            <dl className="co-m-pane__details">
              <dt>{t('CONTENT:CREATEDAT')}</dt>
              <dd>
                <Timestamp timestamp={creationTimestamp} t={t} />
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="co-m-pane__body">
        <SectionHeading text={t('CONTENT:RULES')} />
        <div className="co-m-pane__filter-bar co-m-pane__filter-bar--alt">
          {/* This page is temporarily disabled until we update the safe resources list.
          <div className="co-m-pane__filter-bar-group">
            <Link to={addHref(name, namespace)} className="co-m-primary-action">
              <button className="btn btn-primary">Add Rule</button>
            </Link>
          </div>
          */}
          <div className="co-m-pane__filter-bar-group co-m-pane__filter-bar-group--filter">
            <TextFilter id="rule" label="Rules by action or resource" onChange={changeFilter} />
          </div>
        </div>
        <RulesList rules={rules} name={name} namespace={namespace} />
      </div>
    </div>
  );
  // }
};

const BindingHeader = props => {
  const { t } = useTranslation();
  return (
    <ListHeader>
      <ColHead {...props} className="col-xs-4" sortField="metadata.name">
        {t('CONTENT:NAME')}
      </ColHead>
      <ColHead {...props} className="col-xs-2" sortField="subject.kind">
        {t('CONTENT:SUBJECTKIND')}
      </ColHead>
      <ColHead {...props} className="col-xs-4" sortField="subject.name">
        {t('CONTENT:SUBJECTNAME')}
      </ColHead>
      <ColHead {...props} className="col-xs-2" sortField="metadata.namespace">
        {t('CONTENT:NAMESPACE')}
      </ColHead>
    </ListHeader>
  );
};
BindingHeader.displayName = 'BindingHeader';

const BindingRow = ({ obj: binding }) => (
  <ResourceRow obj={binding}>
    <div className="col-xs-4">
      <BindingName binding={binding} />
    </div>
    <div className="col-xs-2">{binding.subject.kind}</div>
    <div className="col-xs-4">{binding.subject.name}</div>
    <div className="col-xs-2">{binding.namespace || 'all'}</div>
  </ResourceRow>
);

const BindingsListComponent = props => <BindingsList {...props} Header={BindingHeader} Row={BindingRow} virtualize />;

export const BindingsForRolePage = props => {
  const {
    match: {
      params: { name, ns },
    },
    obj: { kind },
  } = props;

  const resources = [{ kind: 'RoleBinding', namespaced: true }];
  if (!ns) {
    resources.push({ kind: 'ClusterRoleBinding', namespaced: false, optional: true });
  }
  return <MultiListPage canCreate={true} createProps={{ to: `/k8s/${ns ? `ns/${ns}` : 'cluster'}/rolebindings/new?rolekind=${kind}&rolename=${name}` }} ListComponent={BindingsListComponent} staticFilters={[{ 'role-binding-roleRef': name }]} resources={resources} textFilter="role-binding" filterLabel="Role Bindings by role or subject" namespace={ns} flatten={bindingsFlatten} />;
};

export const RolesDetailsPage = props => {
  const { t } = useTranslation();
  return <DetailsPage {...props} pages={[navFactory.details(Details, t('CONTENT:OVERVIEW')), navFactory.editYaml(), { href: 'bindings', name: t('CONTENT:ROLEBINDINGS'), component: BindingsForRolePage }]} menuActions={menuActions} />;
};

export const ClusterRolesDetailsPage = RolesDetailsPage;

const EmptyMsg = () => {
  const { t } = useTranslation();
  return <MsgBox title={t('STRING:EMPTYBOX')} detail={t('STRING:ROLE_0')} />;
};

const RolesList = props => <List {...props} EmptyMsg={EmptyMsg} Header={Header} Row={Row} />;

export const roleType = role => {
  if (!role) {
    return undefined;
  }
  if (isSystemRole(role)) {
    return 'system';
  }
  return role.metadata.namespace ? 'namespace' : 'cluster';
};

export const RolesPage = connectToFlags(
  FLAGS.PROJECTS_AVAILBLE,
  // FLAGS.CAN_LIST_NS,
  // FLAGS.CAN_LIST_CR,
)(({ namespace, showTitle, flags }) => {
  const projectsAvailable = !flagPending(flags.PROJECTS_AVAILBLE) && flags.PROJECTS_AVAILBLE;
  // const isAdmin = !flagPending(flags.CAN_LIST_CR) && flags.CAN_LIST_CR;
  const { t } = useTranslation();
  // if (!flags.CAN_LIST_NS && !flagPending(flags.CAN_LIST_CR)) {
  //   return <Loading />;
  // }
  // const data = isAdmin
  //   ? [
  //       { kind: 'Role', namespaced: true, optional: !projectsAvailable },
  //       { kind: 'ClusterRole', namespaced: false, optional: true },
  //     ]
  //   : [{ kind: 'Role', namespaced: true, optional: !projectsAvailable }];
  const { t } = useTranslation();
  const createItems = {
    form: t('CONTENT:FORMEDITOR'),
    yaml: t('CONTENT:YAMLEDITOR'),
  };
  const createProps = {
    items: createItems,
    createLink: type => type === 'yaml' ? `/k8s/ns/${namespace || 'default'}/roles/new` : `/k8s/cluster/roles/new/form`
  };
  return (
    <MultiListPage
      ListComponent={RolesList}
      canCreate={true}
      showTitle={showTitle}
      namespace={namespace}
      createProps={createProps}
      filterLabel="Roles by name"
      flatten={resources => _.flatMap(resources, 'data').filter(r => !!r)}
      createButtonText={t('ADDITIONAL:CREATEBUTTON', { something: ResourcePlural('Role', t) })}
      resources={[
        { kind: 'Role', namespaced: true, optional: !projectsAvailable },
        { kind: 'ClusterRole', namespaced: false, optional: true },
      ]}
      rowFilters={[
        {
          type: 'role-kind',
          selected: ['cluster', 'namespace'],
          reducer: roleType,
          items: [
            { id: 'cluster', title: t('CONTENT:CLUSTER-WIDEROLES') },
            { id: 'namespace', title: t('CONTENT:NAMESPACEROLES') },
            { id: 'system', title: t('CONTENT:SYSTEMROLES') },
          ],
        },
      ]}
      title={t('RESOURCE:ROLE')}
    />
  );
});
