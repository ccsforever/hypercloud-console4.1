import * as _ from 'lodash-es';
import * as React from 'react';

import { ColHead, DetailsPage, List, ListHeader, ListPage } from './factory';
import { Cog, navFactory, ResourceCog, SectionHeading, ResourceLink, ResourceSummary, ScrollToTopOnMount, kindObj } from './utils';
import { fromNow } from './utils/datetime';
import { useTranslation } from 'react-i18next';
import { breadcrumbsForOwnerRefs } from './utils/breadcrumbs';
import { ResourcePlural } from './utils/lang/resource-plural';

const menuActions = [Cog.factory.ModifyLabels, Cog.factory.ModifyAnnotations, Cog.factory.Edit, Cog.factory.Delete, Cog.factory.EditStatus];

const ResourceQuotaClaimHeader = props => {
  const { t } = useTranslation();
  return (
    <ListHeader>
      <ColHead {...props} className="col-xs-3 col-sm-3" sortField="metadata.name">
        {t('CONTENT:NAME')}
      </ColHead>
      <ColHead {...props} className="col-xs-2 col-sm-2" sortField="metadata.namespace">
        {t('CONTENT:NAMESPACE')}
      </ColHead>
      <ColHead {...props} className="col-xs-2 col-sm-2" sortField="status.status">
        {t('CONTENT:STATUS')}
      </ColHead>
      <ColHead {...props} className="col-sm-2 hidden-xs" sortField="resourceName">
        {t('CONTENT:RESOURCENAME')}
      </ColHead>
      <ColHead {...props} className="col-sm-3 hidden-xs" sortField="metadata.creationTimestamp">
        {t('CONTENT:CREATED')}
      </ColHead>
    </ListHeader>
  );
};

const ResourceQuotaClaimRow = () =>
  // eslint-disable-next-line no-shadow
  function ResourceQuotaClaimRow({ obj }) {
    return (
      <div className="row co-resource-list__item">
        <div className="col-xs-3 col-sm-3 co-resource-link-wrapper">
          <ResourceCog actions={menuActions} kind="ResourceQuotaClaim" resource={obj} />
          <ResourceLink kind="ResourceQuotaClaim" name={obj.metadata.name} namespace={obj.metadata.namespace} title={obj.metadata.name} />
        </div>
        <div className="col-xs-2 col-sm-2 co-break-word">{obj.metadata.namespace ? <ResourceLink kind="Namespace" name={obj.metadata.namespace} title={obj.metadata.namespace} /> : 'None'}</div>
        <div className="col-xs-2 col-sm-2 hidden-xs">{obj.status && obj.status.status}</div>
        <div className="col-xs-2 col-sm-2 hidden-xs">{obj.resourceName}</div>
        <div className="col-xs-3 col-sm-3 hidden-xs">{fromNow(obj.metadata.creationTimestamp)}</div>
      </div>
    );
  };

const Details = ({ obj: resourcequotaclaim }) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <ScrollToTopOnMount />

      <div className="co-m-pane__body">
        <SectionHeading text={t('ADDITIONAL:OVERVIEWTITLE', { something: ResourcePlural('ResourceQuotaClaim', t) })} />
        <div className="row">
          <div className="col-sm-6">
            <ResourceSummary resource={resourcequotaclaim} />
          </div>
          <div className="col-sm-6">
            <dl className="co-m-pane__details">
              <dt>{t('CONTENT:RESOURCENAME')}</dt>
              <dd>{resourcequotaclaim.resourceName}</dd>
              <dt>{t('CONTENT:STATUS')}</dt>
              <dd>{resourcequotaclaim.status && resourcequotaclaim.status.status}</dd>
              {resourcequotaclaim.status && resourcequotaclaim.status.reason && <dt>{t('CONTENT:REASON')}</dt>}
              {resourcequotaclaim.status && resourcequotaclaim.status.reason && <dd>{resourcequotaclaim.status.reason}</dd>}
            </dl>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const ResourceQuotaClaimList = props => {
  const { kinds } = props;
  const Row = ResourceQuotaClaimRow(kinds[0]);
  Row.displayName = 'ResourceQuotaClaimRow';
  return <List {...props} Header={ResourceQuotaClaimHeader} Row={Row} />;
};
ResourceQuotaClaimList.displayName = ResourceQuotaClaimList;

export const ResourceQuotaClaimsPage = props => {
  const { t } = useTranslation();
  const createItems = {
    form: t('CONTENT:FORMEDITOR'),
    yaml: t('CONTENT:YAMLEDITOR'),
  };
  const createProps = {
    items: createItems,
    createLink: type => (type === 'yaml' ? `/k8s/ns/${props.namespace || 'default'}/resourcequotaclaims/new` : '/k8s/cluster/resourcequotaclaims/new/form'),
  };
  return <ListPage {...props} ListComponent={ResourceQuotaClaimList} canCreate={true} kind="ResourceQuotaClaim" createProps={createProps} {...props} createButtonText={t('ADDITIONAL:CREATEBUTTON', { something: ResourcePlural(props.kind, t) })} />;
};
ResourceQuotaClaimsPage.displayName = 'ResourceQuotaClaimsPage';

export const ResourceQuotaClaimsDetailsPage = props => {
  const { t } = useTranslation();
  return (
    <DetailsPage
      {...props}
      // breadcrumbsFor={obj =>
      //   breadcrumbsForOwnerRefs(obj).concat({
      //     name: 'Resource Quota Claim Details',
      //     path: props.match.url,
      //   })
      // }
      kind="ResourceQuotaClaim"
      menuActions={menuActions}
      pages={[navFactory.details(Details, t('CONTENT:OVERVIEW')), navFactory.editYaml()]}
    />
  );
};

ResourceQuotaClaimsDetailsPage.displayName = 'ResourceQuotaClaimsDetailsPage';
