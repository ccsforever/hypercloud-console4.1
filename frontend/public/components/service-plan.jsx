import * as _ from 'lodash-es';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ColHead, DetailsPage, List, ListHeader, ListPage } from './factory';
import {
  Cog,
  navFactory,
  ResourceCog,
  SectionHeading,
  ResourceLink,
  ResourceSummary,
  ScrollToTopOnMount,
  kindObj
} from './utils';
import { fromNow } from './utils/datetime';
import { breadcrumbsForOwnerRefs } from './utils/breadcrumbs';
import { ResourcePlural } from './utils/lang/resource-plural';
// const menuActions = [
//   Cog.factory.ModifyLabels,
//   Cog.factory.ModifyAnnotations,
//   Cog.factory.Edit,
//   Cog.factory.Delete
// ];

const ServicePlanHeader = props => {
  const { t } = useTranslation();
  return (
    <ListHeader>
      <ColHead {...props} className="col-xs-2 col-sm-2" sortField="metadata.name">
        {t('CONTENT:NAME')}
      </ColHead>
      <ColHead
        {...props}
        className="col-xs-2 col-sm-2"
        sortField="metadata.namespace"
      >
        {t('CONTENT:NAMESPACE')}
      </ColHead>
      <ColHead
        {...props}
        className="col-sm-2 hidden-xs"
        sortField="spec.bindable"
      >
        {t('CONTENT:BINDABLE')}
      </ColHead>
      <ColHead
        {...props}
        className="col-sm-2 hidden-xs"
        sortField="spec.externalName"
      >
        {t('CONTENT:EXTERNALNAME')}
      </ColHead>
      <ColHead
        {...props}
        className="col-sm-1 hidden-xs"
        sortField="spec.serviceBrokerName"
      >
        {t('RESOURCE:SERVICEBROKER')}
      </ColHead>
      <ColHead
        {...props}
        className="col-sm-1 hidden-xs"
        sortField="spec.serviceClassRef.name"
      >
        {t('RESOURCE:SERVICECLASS')}
      </ColHead>
      <ColHead
        {...props}
        className="col-sm-2 hidden-xs"
        sortField="metadata.creationTimestamp"
      >
        {t('CONTENT:CREATED')}
      </ColHead>
    </ListHeader>
  )
};

const ServicePlanRow = () =>
  // eslint-disable-next-line no-shadow
  function ServicePlanRow({ obj }) {
    return (
      <div className="row co-resource-list__item">
        <div className="col-xs-2 col-sm-2 co-resource-link-wrapper">
          {/* <ResourceCog
            actions={menuActions}
            kind="ServicePlan"
            resource={obj}
          /> */}
          <ResourceLink
            kind="ServicePlan"
            name={obj.metadata.name}
            namespace={obj.metadata.namespace}
            title={obj.metadata.name}
          />
        </div>
        <div className="col-xs-2 col-sm-2 co-break-word">
          {obj.metadata.namespace}
        </div>
        <div className="col-xs-2 col-sm-2 co-break-word">
          {obj.spec.bindable ? 'True' : 'False'}
        </div>
        <div className="col-xs-2 col-sm-2 co-break-word">
          {obj.spec.externalName}
        </div>
        <div className="col-xs-1 col-sm-1 co-break-word">
          {obj.spec.serviceBrokerName}
        </div>
        <div className="col-xs-1 col-sm-1 co-break-word">
          {obj.spec.serviceClassRef.name}
        </div>
        <div className="col-xs-2 col-sm-2 hidden-xs">
          {fromNow(obj.metadata.creationTimestamp)}
        </div>
      </div>
    );
  };

// const DetailsForKind = kind =>
//   function DetailsForKind_({ obj }) {
//     return (
//       <React.Fragment>
//         <div className="co-m-pane__body">
//           <SectionHeading text={`${kindForReference(kind)} Overview`} />
//           <ResourceSummary
//             resource={obj}
//             podSelector="spec.podSelector"
//             showNodeSelector={false}
//           />
//         </div>
//       </React.Fragment>
//     );
//   };

const Details = ({ obj: serviceplan }) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <ScrollToTopOnMount />

      <div className="co-m-pane__body">
        <SectionHeading text={t('ADDITIONAL:OVERVIEWTITLE', { something: ResourcePlural('SERVICEPLAN', t) })} />
        <div className="row">
          <div className="col-sm-6">
            <ResourceSummary resource={serviceplan} />
          </div>
          <div className="col-sm-6">
            <dl className="co-m-pane__details">
              <dt>{t('CONTENT:BINDABLE')}</dt>
              <dd>{serviceplan.spec.bindable ? 'True' : 'False'}</dd>
              <dt>{t('CONTENT:EXTERNALNAME')}</dt>
              <dd>{serviceplan.spec.externalName}</dd>
              <dt> {t('RESOURCE:SERVICEBROKER')}</dt>
              <dd>{serviceplan.spec.serviceBrokerName}</dd>
              <dt>{t('RESOURCE:SERVICECLASS')}</dt>
              <dd>{serviceplan.spec.serviceClassRef.name}</dd>
              {/* {activeDeadlineSeconds && (
                <React.Fragment>
                  <dt>Active Deadline</dt>
                  <dd>{formatDuration(activeDeadlineSeconds * 1000)}</dd>
                </React.Fragment>
              )} */}
            </dl>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export const ServicePlanList = props => {
  const { kinds } = props;
  const Row = ServicePlanRow(kinds[0]);
  Row.displayName = 'ServicePlanRow';
  return <List {...props} Header={ServicePlanHeader} Row={Row} />;
};
ServicePlanList.displayName = ServicePlanList;

export const ServicePlansPage = props => (
  <ListPage
    {...props}
    ListComponent={ServicePlanList}
    canCreate={false}
    kind="ServicePlan"
  />
);
ServicePlansPage.displayName = 'ServicePlansPage';

export const ServicePlansDetailsPage = props => (
  <DetailsPage
    {...props}
    // breadcrumbsFor={obj =>
    //   breadcrumbsForOwnerRefs(obj).concat({
    //     name: 'ServicePlan Details',
    //     path: props.match.url
    //   })
    // }
    kind="ServicePlan"
    //  menuActions={menuActions}
    pages={[
      navFactory.details(Details)
    ]}
  />
);

ServicePlansDetailsPage.displayName = 'ServicePlansDetailsPage';
