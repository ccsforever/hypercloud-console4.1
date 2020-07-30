import * as _ from 'lodash-es';
import * as React from 'react';

import { ColHead, DetailsPage, List, ListHeader, ListPage } from './factory';
import { Cog, navFactory, ResourceCog, SectionHeading, ResourceLink, ResourceSummary } from './utils';
import { fromNow } from './utils/datetime';
import { kindForReference } from '../module/k8s';
import { breadcrumbsForOwnerRefs } from './utils/breadcrumbs';
import { useTranslation } from 'react-i18next';
import { ResourcePlural } from './utils/lang/resource-plural';

const menuActions = [Cog.factory.ModifyLabels, Cog.factory.ModifyAnnotations, Cog.factory.Edit, Cog.factory.Delete];
const HDCModeFlag = window.SERVER_FLAGS.HDCModeFlag;

const DNSEndpointHeader = props => {
  const { t } = useTranslation();
  return (
    <ListHeader>
      <ColHead {...props} className="col-xs-2 col-sm-2" sortField="metadata.name">
        {t('CONTENT:NAME')}
      </ColHead>
      <ColHead {...props} className="col-lg-2 col-md-2 col-sm-4 col-xs-4" sortField="metadata.namespace">
        {t('CONTENT:NAMESPACE')}
      </ColHead>
      <ColHead {...props} className="col-sm-6 hidden-6" sortField="spec.endpoints[0].dnsName">
        {t('CONTENT:DNSNAME')}
      </ColHead>
      <ColHead {...props} className="col-sm-2 hidden-xs" sortField="spec.endpoints[0].targets[0]">
        {t('CONTENT:TARGET')}
      </ColHead>
    </ListHeader>
  );
};

const DNSEndpointRow = () =>
  // eslint-disable-next-line no-shadow
  function DNSEndpointRow({ obj }) {
    const dnsName = obj.spec && obj.spec.endpoints && obj.spec.endpoints.map(cur => <p>{cur.dnsName}</p>);
    const targets = obj.spec && obj.spec.endpoints && obj.spec.endpoints.map(cur => <p>{cur.targets.join(', ')}</p>);

    return (
      <div className="row co-resource-list__item">
        <div className="col-xs-2 col-sm-2 co-resource-link-wrapper">
          {!HDCModeFlag && <ResourceCog actions={menuActions} kind="DNSEndpoint" resource={obj} />}
          <ResourceLink kind="DNSEndpoint" name={obj.metadata.name} namespace={obj.metadata.namespace} title={obj.metadata.name} />
        </div>
        <div className="col-xs-2 col-sm-2 hidden-xs">{obj.metadata.namespace}</div>
        <div className="col-xs-6 col-sm-6 hidden-xs">
          <div>{dnsName}</div>
        </div>
        <div className="col-xs-2 col-sm-2 hidden-xs">{targets}</div>
      </div>
    );
  };

const DetailsForKind = kind =>
  function DetailsForKind_({ obj }) {
    const { t } = useTranslation();
    return (
      <React.Fragment>
        <div className="co-m-pane__body">
          <SectionHeading text={t('ADDITIONAL:OVERVIEWTITLE', { something: ResourcePlural('DNSEndpoint', t) })} />
          <ResourceSummary resource={obj} podSelector="spec.podSelector" showNodeSelector={false} />
        </div>
      </React.Fragment>
    );
  };

export const DNSEndpointList = props => {
  const { kinds } = props;
  const Row = DNSEndpointRow(kinds[0]);
  Row.displayName = 'DNSEndpointRow';
  return <List {...props} Header={DNSEndpointHeader} Row={Row} />;
};
DNSEndpointList.displayName = DNSEndpointList;

export const DNSEndpointsPage = props => {
  const { t } = useTranslation();
  return HDCModeFlag ? <ListPage {...props} ListComponent={DNSEndpointList} canCreate={false} kind="DNSEndpoint" /> : <ListPage {...props} ListComponent={DNSEndpointList} createButtonText={t('ADDITIONAL:CREATEBUTTON', { something: ResourcePlural(props.kind, t) })} canCreate={false} kind="DNSEndpoint" />;
};
DNSEndpointsPage.displayName = 'DNSEndpointsPage';

export const DNSEndpointsDetailsPage = props => {
  const { t } = useTranslation();
  let menu = HDCModeFlag ? null : menuActions;
  let page = HDCModeFlag ? [navFactory.details(DetailsForKind(props.kind), t('CONTENT:OVERVIEW'))] : [navFactory.details(DetailsForKind(props.kind), t('CONTENT:OVERVIEW')), navFactory.editYaml()];
  return <DetailsPage {...props} kind="DNSEndpoint" menuActions={menu} pages={page} />;
};

DNSEndpointsDetailsPage.displayName = 'DNSEndpointsDetailsPage';
