import * as _ from 'lodash-es';
import * as React from 'react';
import { ImagesPage } from './image';
import { ColHead, DetailsPage, List, ListHeader, ListPage } from './factory';
import { Cog, navFactory, ResourceCog, SectionHeading, ResourceLink, ScrollToTopOnMount, ResourceSummary } from './utils';
import { fromNow } from './utils/datetime';
import { kindForReference } from '../module/k8s';
import { breadcrumbsForOwnerRefs } from './utils/breadcrumbs';
import { useTranslation } from 'react-i18next';
import { ResourcePlural } from './utils/lang/resource-plural';

const menuActions = [Cog.factory.ModifyLabels, Cog.factory.ModifyAnnotations, Cog.factory.Edit, Cog.factory.Delete];

const RegistryHeader = props => {
  const { t } = useTranslation();
  return (
    <ListHeader>
      <ColHead {...props} className="col-xs-2 col-sm-2" sortField="metadata.name">
        {t('CONTENT:NAME')}
      </ColHead>
      <ColHead {...props} className="col-xs-2 col-sm-2" sortField="metadata.namespace">
        {t('CONTENT:NAMESPACE')}
      </ColHead>
      <ColHead {...props} className="col-sm-4 hidden-xs" sortField="spec.image">
        {t('CONTENT:IMAGE')}
      </ColHead>
      <ColHead {...props} className="col-xs-2 col-sm-2" sortField="status.phase">
        {t('CONTENT:STATUS')}
      </ColHead>
      <ColHead {...props} className="col-sm-2 hidden-xs" sortField="metadata.creationTimestamp">
        {t('CONTENT:CREATED')}
      </ColHead>
    </ListHeader>
  );
};

const RegistryRow = () =>
  // eslint-disable-next-line no-shadow
  function RegistryRow({ obj }) {
    return (
      <div className="row co-resource-list__item">
        <div className="col-xs-2 col-sm-2 co-resource-link-wrapper">
          <ResourceCog actions={menuActions} kind="Registry" resource={obj} />
          <ResourceLink kind="Registry" name={obj.metadata.name} namespace={obj.metadata.namespace} title={obj.metadata.name} />
        </div>
        <div className="col-xs-2 col-sm-2 co-break-word">{obj.metadata.namespace ? <ResourceLink kind="Namespace" name={obj.metadata.namespace} title={obj.metadata.namespace} /> : 'None'}</div>
        <div className="col-xs-4 col-sm-4 hidden-xs">{obj.spec.image}</div>
        <div className="col-xs-2 col-sm-2 hidden-xs">{obj.status && obj.status.phase}</div>
        <div className="col-xs-2 col-sm-2 hidden-xs">{fromNow(obj.metadata.creationTimestamp)}</div>
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

const Details = ({ obj: registry }) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <ScrollToTopOnMount />
      <div className="co-m-pane__body">
        <SectionHeading text={t('ADDITIONAL:OVERVIEWTITLE', { something: ResourcePlural('Registry', t) })} />
        <div className="row">
          <div className="col-sm-6">
            <ResourceSummary resource={registry} />
          </div>
          <div className="col-sm-6">
            <dl className="co-m-pane__details">
              <dt>{t('CONTENT:STATUS')}</dt>
              <dd>{registry.status && registry.status.phase}</dd>
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
  );
};

export const RegistryList = props => {
  const { kinds } = props;
  const Row = RegistryRow(kinds[0]);
  Row.displayName = 'RegistryRow';
  return <List {...props} Header={RegistryHeader} Row={Row} />;
};
RegistryList.displayName = RegistryList;

export const RegistryPage = props => {
  const { t } = useTranslation();
  return <ListPage {...props} ListComponent={RegistryList} canCreate={true} kind="Registry" createButtonText={t('ADDITIONAL:CREATEBUTTON', { something: ResourcePlural(props.kind, t) })} />;
};
RegistryPage.displayName = 'RegistryPage';

// export const TemplatesDetailsPage = props => {
//   const pages = [
//     navFactory.details(DetailsForKind(props.kind)),
//     navFactory.editYaml()
//   ];
//   return <DetailsPage {...props} menuActions={menuActions} pages={pages} />;
// };
const { details, editYaml, images } = navFactory;
export const RegistryDetailsPage = props => {
  const ns = location.pathname.split('/')[3]; 
  const { t } = useTranslation();
  const pages = [details(Details, t('CONTENT:OVERVIEW')), editYaml(), images(t('CONTENT:IMAGES'), ({ obj }) => <ImagesPage showTitle={false} namespace={ns}selector={{ matchLabels: { registry: `${obj.metadata.name}` } }} />)];
  return <DetailsPage {...props} kind="Registry" menuActions={menuActions} pages={pages} />;
};

RegistryDetailsPage.displayName = 'RegistryDetailsPage';
