/* eslint-disable no-unused-vars */

import { Map as ImmutableMap } from 'immutable';

import { ReportReference, ReportGenerationQueryReference } from './chargeback';
import { referenceForModel, GroupVersionKind } from '../module/k8s';
import {
  KubeadmControlPlaneModel,
  KubeadmConfigTemplateModel,
  KubeFedClusterModel,
  KubeFedConfigModel,
  FederatedTypeConfigModel,
  ReplicaSchedulingPreferenceModel,
  DNSEndpointModel,
  DomainModel,
  IngressDNSRecordModel,
  ServiceDNSRecordModel,
  MachineModel,
  MachineSetModel,
  Metal3ClusterModel,
  Metal3MachineModel,
  Metal3MachineTemplateModel,
  AWSClusterModel,
  AWSMachineModel,
  AWSMachineTemplateModel,
  MachineDeploymentModel,
  ConditionModel,
  UsergroupModel,
  LimitRangeModel,
  DataVolumeModel,
  VirtualMachineInstanceModel,
  VirtualMachineModel,
  ClusterServiceBrokerModel,
  ClusterServiceClassModel,
  ClusterServicePlanModel,
  PodSecurityPolicyModel,
  ServiceBindingModel,
  NamespaceClaimModel,
  ResourceQuotaClaimModel,
  RoleBindingClaimModel,
  UserModel,
  ServiceBrokerModel,
  ServiceClassModel,
  ServicePlanModel,
  TaskModel,
  ClusterTaskModel,
  TaskRunModel,
  PipelineResourceModel,
  PipelineModel,
  PipelineRunModel,
  RegistryModel,
  TemplateModel,
  TemplateInstanceModel,
  ClusterModel,
  ConfigMapModel,
  DaemonSetModel,
  DeploymentModel,
  DeploymentConfigModel,
  BuildConfigModel,
  BuildModel,
  ImageStreamModel,
  JobModel,
  CronJobModel,
  ProjectModel,
  NamespaceModel,
  NetworkPolicyModel,
  NodeModel,
  PodModel,
  ReplicaSetModel,
  ReplicationControllerModel,
  SecretModel,
  ServiceAccountModel,
  ServiceModel,
  IngressModel,
  RouteModel,
  RoleModel,
  RoleBindingModel,
  PrometheusModel,
  ServiceMonitorModel,
  AlertmanagerModel,
  StatefulSetModel,
  ResourceQuotaModel,
  HorizontalPodAutoscalerModel,
  PersistentVolumeModel,
  PersistentVolumeClaimModel,
  StorageClassModel,
  CustomResourceDefinitionModel,
  ClusterServiceVersionModel,
  SubscriptionModel,
  InstallPlanModel,
  ImageStreamTagModel,
  ClusterRoleModel,
  ContainerModel,
  CatalogSourceModel,
  ServiceInstanceModel,
  ImageModel,
  UserSecurityPolicyModel,
  VirtualServiceModel,
  DestinationRuleModel,
  EnvoyFilterModel,
  GatewayModel,
  SidecarModel,
  ServiceEntryModel,
  RequestAuthenticationModel,
  PeerAuthenticationModel,
  AuthorizationPolicyModel,
  NotebookModel,
  ExperimentModel,
  InferenceServiceModel,
  WorkflowTemplateModel,
  WorkflowModel,
  CatalogServiceClaimModel,
} from '../models';

export const resourceDetailPages = ImmutableMap<GroupVersionKind | string, () => Promise<React.ComponentType<any>>>()
  .set(referenceForModel(KubeadmControlPlaneModel), () => import('./kubeadm-control-plane' /* webpackChunkName: "task" */).then(m => m.KubeadmControlPlanesDetailsPage))
  .set(referenceForModel(KubeadmConfigTemplateModel), () => import('./kubeadm-config-template' /* webpackChunkName: "task" */).then(m => m.KubeadmConfigTemplatesDetailsPage))
  .set(referenceForModel(ReplicaSchedulingPreferenceModel), () => import('./replica-scheduling-preference' /* webpackChunkName: "task" */).then(m => m.ReplicaSchedulingPreferencesDetailsPage))
  .set(referenceForModel(KubeFedClusterModel), () => import('./federation-cluster' /* webpackChunkName: "task" */).then(m => m.KubeFedClustersDetailsPage))
  .set(referenceForModel(KubeFedConfigModel), () => import('./federation-config' /* webpackChunkName: "task" */).then(m => m.KubeFedConfigsDetailsPage))
  .set(referenceForModel(FederatedTypeConfigModel), () => import('./federated-type-config' /* webpackChunkName: "task" */).then(m => m.FederatedTypeConfigsDetailsPage))
  .set(referenceForModel(DNSEndpointModel), () => import('./dns-endpoint' /* webpackChunkName: "task" */).then(m => m.DNSEndpointsDetailsPage))
  .set(referenceForModel(DomainModel), () => import('./domain' /* webpackChunkName: "task" */).then(m => m.DomainsDetailsPage))
  .set(referenceForModel(IngressDNSRecordModel), () => import('./ingress-dns-record' /* webpackChunkName: "task" */).then(m => m.IngressDNSRecordsDetailsPage))
  .set(referenceForModel(ServiceDNSRecordModel), () => import('./service-dns-record' /* webpackChunkName: "task" */).then(m => m.ServiceDNSRecordsDetailsPage))
  .set(referenceForModel(MachineDeploymentModel), () => import('./machine-deployment' /* webpackChunkName: "task" */).then(m => m.MachineDeploymentsDetailsPage))
  .set(referenceForModel(MachineModel), () => import('./machine' /* webpackChunkName: "task" */).then(m => m.MachinesDetailsPage))
  .set(referenceForModel(MachineSetModel), () => import('./machine-set' /* webpackChunkName: "task" */).then(m => m.MachineSetsDetailsPage))
  .set(referenceForModel(Metal3ClusterModel), () => import('./baremetal-cluster' /* webpackChunkName: "task" */).then(m => m.Metal3ClustersDetailsPage))
  .set(referenceForModel(Metal3MachineModel), () => import('./baremetal-machine' /* webpackChunkName: "task" */).then(m => m.Metal3MachinesDetailsPage))
  .set(referenceForModel(Metal3MachineTemplateModel), () => import('./baremetal-machine-template' /* webpackChunkName: "task" */).then(m => m.Metal3MachineTemplatesDetailsPage))
  .set(referenceForModel(AWSClusterModel), () => import('./aws-cluster' /* webpackChunkName: "task" */).then(m => m.AWSClustersDetailsPage))
  .set(referenceForModel(AWSMachineModel), () => import('./aws-machine' /* webpackChunkName: "task" */).then(m => m.AWSMachinesDetailsPage))
  .set(referenceForModel(AWSMachineTemplateModel), () => import('./aws-machine-template' /* webpackChunkName: "task" */).then(m => m.AWSMachineTemplatesDetailsPage))
  .set(referenceForModel(ImageModel), () => import('./image' /* webpackChunkName: "task" */).then(m => m.ImagesDetailsPage))
  .set(referenceForModel(UsergroupModel), () => import('./usergroup' /* webpackChunkName: "task" */).then(m => m.UsergroupsDetailsPage))
  .set(referenceForModel(LimitRangeModel), () => import('./limit-range' /* webpackChunkName: "task" */).then(m => m.LimitRangesDetailsPage))
  .set(referenceForModel(DataVolumeModel), () => import('./data-volume' /* webpackChunkName: "task" */).then(m => m.DataVolumesDetailsPage))
  .set(referenceForModel(VirtualMachineModel), () => import('./virtual-machine' /* webpackChunkName: "task" */).then(m => m.VirtualMachinesDetailsPage))
  .set(referenceForModel(VirtualMachineInstanceModel), () => import('./virtual-machine-instance' /* webpackChunkName: "task" */).then(m => m.VirtualMachineInstancesDetailsPage))
  .set(referenceForModel(ClusterServiceBrokerModel), () => import('./cluster-service-broker' /* webpackChunkName: "task" */).then(m => m.ClusterServiceBrokersDetailsPage))
  .set(referenceForModel(NamespaceClaimModel), () => import('./namespace-claim' /* webpackChunkName: "task" */).then(m => m.NamespaceClaimsDetailsPage))
  .set(referenceForModel(ResourceQuotaClaimModel), () => import('./resource-quota-claim' /* webpackChunkName: "task" */).then(m => m.ResourceQuotaClaimsDetailsPage))
  .set(referenceForModel(RoleBindingClaimModel), () => import('./role-binding-claim' /* webpackChunkName: "task" */).then(m => m.RoleBindingClaimsDetailsPage))
  .set(referenceForModel(UserModel), () => import('./user' /* webpackChunkName: "task" */).then(m => m.UsersDetailsPage))
  .set(referenceForModel(ClusterServiceClassModel), () => import('./cluster-service-class' /* webpackChunkName: "task" */).then(m => m.ClusterServiceClassesDetailsPage))
  .set(referenceForModel(ClusterServicePlanModel), () => import('./cluster-service-plan' /* webpackChunkName: "task" */).then(m => m.ClusterServicePlansDetailsPage))
  .set(referenceForModel(ServiceClassModel), () => import('./service-class' /* webpackChunkName: "task" */).then(m => m.ServiceClassesDetailsPage))
  .set(referenceForModel(ServicePlanModel), () => import('./service-plan' /* webpackChunkName: "task" */).then(m => m.ServicePlansDetailsPage))
  .set(referenceForModel(ServiceBrokerModel), () => import('./service-broker' /* webpackChunkName: "task" */).then(m => m.ServiceBrokersDetailsPage))
  .set(referenceForModel(PodSecurityPolicyModel), () => import('./pod-security-policy' /* webpackChunkName: "task" */).then(m => m.PodSecurityPoliciesDetailsPage))
  .set(referenceForModel(ServiceBindingModel), () => import('./service-binding' /* webpackChunkName: "task" */).then(m => m.ServiceBindingsDetailsPage))
  .set(referenceForModel(ServiceInstanceModel), () => import('./service-instance' /* webpackChunkName: "task" */).then(m => m.ServiceInstancesDetailsPage))
  .set(referenceForModel(TaskModel), () => import('./task' /* webpackChunkName: "task" */).then(m => m.TaskDetailsPage))
  .set(referenceForModel(ClusterTaskModel), () => import('./task' /* webpackChunkName: "role" */).then(m => m.ClusterTasksDetailsPage))
  .set(referenceForModel(TaskRunModel), () => import('./task-run' /* webpackChunkName: "task-run" */).then(m => m.TaskRunDetailsPage))
  .set(referenceForModel(PipelineResourceModel), () => import('./pipeline-resource' /* webpackChunkName: "pipeline-resource" */).then(m => m.PipelineResourceDetailsPage))
  .set(referenceForModel(PipelineModel), () => import('./pipeline' /* webpackChunkName: "pipeline" */).then(m => m.PipelineDetailsPage))
  .set(referenceForModel(PipelineRunModel), () => import('./pipeline-run' /* webpackChunkName: "pipeline-run" */).then(m => m.PipelineRunDetailsPage))
  .set(referenceForModel(RegistryModel), () => import('./registry' /* webpackChunkName: "template" */).then(m => m.RegistryDetailsPage))
  .set(referenceForModel(TemplateInstanceModel), () => import('./template-instance' /* webpackChunkName: "template" */).then(m => m.TemplateInstancesDetailsPage))
  .set(referenceForModel(TemplateModel), () => import('./template' /* webpackChunkName: "template" */).then(m => m.TemplatesDetailsPage))
  .set(referenceForModel(ClusterModel), () => import('./cluster' /* webpackChunkName: "clusters" */).then(m => m.ClustersDetailsPage))
  .set(referenceForModel(ConfigMapModel), () => import('./configmap' /* webpackChunkName: "configmap" */).then(m => m.ConfigMapsDetailsPage))
  .set(referenceForModel(ContainerModel), () => import('./container' /* webpackChunkName: "container" */).then(m => m.ContainersDetailsPage))
  .set(referenceForModel(DaemonSetModel), () => import('./daemonset' /* webpackChunkName: "daemonset" */).then(m => m.DaemonSetsDetailsPage))
  .set(referenceForModel(DeploymentConfigModel), () => import('./deployment-config' /* webpackChunkName: "deployment-config" */).then(m => m.DeploymentConfigsDetailsPage))
  .set(referenceForModel(DeploymentModel), () => import('./deployment' /* webpackChunkName: "deployment" */).then(m => m.DeploymentsDetailsPage))
  .set(referenceForModel(BuildConfigModel), () => import('./build-config' /* webpackChunkName: "build-config" */).then(m => m.BuildConfigsDetailsPage))
  .set(referenceForModel(BuildModel), () => import('./build' /* webpackChunkName: "build" */).then(m => m.BuildsDetailsPage))
  .set(referenceForModel(ImageStreamModel), () => import('./image-stream' /* webpackChunkName: "image-stream" */).then(m => m.ImageStreamsDetailsPage))
  .set(referenceForModel(ImageStreamTagModel), () => import('./image-stream-tag' /* webpackChunkName: "image-stream-tag" */).then(m => m.ImageStreamTagsDetailsPage))
  .set(referenceForModel(JobModel), () => import('./job' /* webpackChunkName: "job" */).then(m => m.JobsDetailsPage))
  .set(referenceForModel(CronJobModel), () => import('./cron-job' /* webpackChunkName: "cron-job" */).then(m => m.CronJobsDetailsPage))
  .set(referenceForModel(ProjectModel), () => import('./namespace' /* webpackChunkName: "namespace" */).then(m => m.ProjectsDetailsPage))
  .set(referenceForModel(NamespaceModel), () => import('./namespace' /* webpackChunkName: "namespace" */).then(m => m.NamespacesDetailsPage))
  .set(referenceForModel(NetworkPolicyModel), () => import('./network-policy' /* webpackChunkName: "network-policy" */).then(m => m.NetworkPoliciesDetailsPage))
  .set(referenceForModel(NodeModel), () => import('./node' /* webpackChunkName: "node" */).then(m => m.NodesDetailsPage))
  .set(referenceForModel(PodModel), () => import('./pod' /* webpackChunkName: "pod" */).then(m => m.PodsDetailsPage))
  .set(referenceForModel(ReplicaSetModel), () => import('./replicaset' /* webpackChunkName: "replicaset" */).then(m => m.ReplicaSetsDetailsPage))
  .set(referenceForModel(ReplicationControllerModel), () => import('./replication-controller' /* webpackChunkName: "replication-controller" */).then(m => m.ReplicationControllersDetailsPage))
  .set(referenceForModel(SecretModel), () => import('./secret' /* webpackChunkName: "secret" */).then(m => m.SecretsDetailsPage))
  .set(referenceForModel(ServiceAccountModel), () => import('./service-account' /* webpackChunkName: "service-account" */).then(m => m.ServiceAccountsDetailsPage))
  .set(referenceForModel(ServiceModel), () => import('./service' /* webpackChunkName: "service" */).then(m => m.ServicesDetailsPage))
  .set(referenceForModel(IngressModel), () => import('./ingress' /* webpackChunkName: "ingress" */).then(m => m.IngressesDetailsPage))
  .set(referenceForModel(RouteModel), () => import('./routes' /* webpackChunkName: "routes" */).then(m => m.RoutesDetailsPage))
  .set(referenceForModel(ClusterRoleModel), () => import('./RBAC/role' /* webpackChunkName: "role" */).then(m => m.ClusterRolesDetailsPage))
  .set(referenceForModel(RoleModel), () => import('./RBAC/role' /* webpackChunkName: "role" */).then(m => m.RolesDetailsPage))
  .set(referenceForModel(AlertmanagerModel), () => import('./alert-manager' /* webpackChunkName: "alert-manager" */).then(m => m.AlertManagersDetailsPage))
  .set(referenceForModel(StatefulSetModel), () => import('./stateful-set' /* webpackChunkName: "stateful-set" */).then(m => m.StatefulSetsDetailsPage))
  .set(referenceForModel(ResourceQuotaModel), () => import('./resource-quota' /* webpackChunkName: "resource-quota" */).then(m => m.ResourceQuotasDetailsPage))
  .set(referenceForModel(HorizontalPodAutoscalerModel), () => import('./hpa' /* webpackChunkName: "hpa" */).then(m => m.HorizontalPodAutoscalersDetailsPage))
  .set(referenceForModel(PersistentVolumeModel), () => import('./persistent-volume' /* webpackChunkName: "persistent-volume" */).then(m => m.PersistentVolumesDetailsPage))
  .set(referenceForModel(PersistentVolumeClaimModel), () => import('./persistent-volume-claim' /* webpackChunkName: "persistent-volume-claim" */).then(m => m.PersistentVolumeClaimsDetailsPage))
  .set(ReportReference, () => import('./chargeback' /* webpackChunkName: "chargeback" */).then(m => m.ReportsDetailsPage))
  .set(ReportGenerationQueryReference, () => import('./chargeback' /* webpackChunkName: "chargeback" */).then(m => m.ReportGenerationQueriesDetailsPage))
  .set(referenceForModel(StorageClassModel), () => import('./storage-class' /* webpackChunkName: "storage-class" */).then(m => m.StorageClassDetailsPage))
  .set(referenceForModel(ClusterServiceVersionModel), () => import('./cloud-services/clusterserviceversion' /* webpackChunkName: "clusterserviceversion" */).then(m => m.ClusterServiceVersionsDetailsPage))
  .set(referenceForModel(CatalogSourceModel), () => import('./cloud-services/catalog-source' /* webpackChunkName: "catalog-source" */).then(m => m.CatalogSourceDetailsPage))
  .set(referenceForModel(SubscriptionModel), () => import('./cloud-services/subscription' /* webpackChunkName: "subscription" */).then(m => m.SubscriptionDetailsPage))
  .set(referenceForModel(InstallPlanModel), () => import('./cloud-services/install-plan' /* webpackChunkName: "install-plan" */).then(m => m.InstallPlanDetailsPage))
  .set(referenceForModel(UserSecurityPolicyModel), () => import('./user-security-policy' /* webpackChunkName: "task" */).then(m => m.UserSecurityPoliciesDetailsPage))
  .set(referenceForModel(ConditionModel), () => import('./condition' /* webpackChunkName: "task" */).then(m => m.ConditionsDetailsPage))
  .set(referenceForModel(VirtualServiceModel), () => import('./virtual-service' /* webpackChunkName: "task" */).then(m => m.VirtualServiceDetailsPage))
  .set(referenceForModel(DestinationRuleModel), () => import('./destination-rule' /* webpackChunkName: "task" */).then(m => m.DestinationRuleDetailsPage))
  .set(referenceForModel(EnvoyFilterModel), () => import('./envoy-filter' /* webpackChunkName: "task" */).then(m => m.EnvoyFilterDetailsPage))
  .set(referenceForModel(GatewayModel), () => import('./gateway' /* webpackChunkName: "task" */).then(m => m.GatewayDetailsPage))
  .set(referenceForModel(SidecarModel), () => import('./sidecar' /* webpackChunkName: "task" */).then(m => m.SideCarDetailsPage))
  .set(referenceForModel(ServiceEntryModel), () => import('./service-entry' /* webpackChunkName: "task" */).then(m => m.ServiceEntryDetailsPage))
  .set(referenceForModel(RequestAuthenticationModel), () => import('./request-authentication' /* webpackChunkName: "task" */).then(m => m.RequestAuthenticationDetailsPage))
  .set(referenceForModel(PeerAuthenticationModel), () => import('./peer-authentication' /* webpackChunkName: "task" */).then(m => m.PeerAuthenticationDetailsPage))
  .set(referenceForModel(AuthorizationPolicyModel), () => import('./authorization-policy' /* webpackChunkName: "task" */).then(m => m.AuthorizationPolicyDetailsPage))
  .set(referenceForModel(NotebookModel), () => import('./notebook' /* webpackChunkName: "task" */).then(m => m.NotebookDetailsPage))
  .set(referenceForModel(ExperimentModel), () => import('./experiment' /* webpackChunkName: "task" */).then(m => m.ExperimentDetailsPage))
  .set(referenceForModel(InferenceServiceModel), () => import('./inference-service' /* webpackChunkName: "task" */).then(m => m.InferenceServiceDetailsPage))
  .set(referenceForModel(WorkflowTemplateModel), () => import('./workflow-template' /* webpackChunkName: "task" */).then(m => m.WorkflowTemplateDetailsPage))
  .set(referenceForModel(WorkflowModel), () => import('./workflow' /* webpackChunkName: "task" */).then(m => m.WorkflowDetailsPage))
  .set(referenceForModel(CatalogServiceClaimModel), () => import('./catalog-service-claim' /* webpackChunkName: "task" */).then(m => m.CatalogServiceClaimsDetailsPage));

export const resourceListPages = ImmutableMap<GroupVersionKind | string, () => Promise<React.ComponentType<any>>>()
  .set(referenceForModel(CatalogServiceClaimModel), () => import('./catalog-service-claim' /* webpackChunkName: "task" */).then(m => m.CatalogServiceClaimPage))
  .set(referenceForModel(NotebookModel), () => import('./notebook' /* webpackChunkName: "task" */).then(m => m.NotebookPage))
  .set(referenceForModel(ExperimentModel), () => import('./experiment' /* webpackChunkName: "task" */).then(m => m.ExperimentPage))
  .set(referenceForModel(InferenceServiceModel), () => import('./inference-service' /* webpackChunkName: "task" */).then(m => m.InferenceServicePage))
  .set(referenceForModel(WorkflowTemplateModel), () => import('./workflow-template' /* webpackChunkName: "task" */).then(m => m.WorkflowTemplatePage))
  .set(referenceForModel(WorkflowModel), () => import('./workflow' /* webpackChunkName: "task" */).then(m => m.WorkflowPage))
  .set(referenceForModel(KubeadmControlPlaneModel), () => import('./kubeadm-control-plane' /* webpackChunkName: "task" */).then(m => m.KubeadmControlPlanesPage))
  .set(referenceForModel(KubeadmConfigTemplateModel), () => import('./kubeadm-config-template' /* webpackChunkName: "task" */).then(m => m.KubeadmConfigTemplatesPage))
  .set(referenceForModel(ReplicaSchedulingPreferenceModel), () => import('./replica-scheduling-preference' /* webpackChunkName: "task" */).then(m => m.ReplicaSchedulingPreferencesPage))
  .set(referenceForModel(KubeFedClusterModel), () => import('./federation-cluster' /* webpackChunkName: "task" */).then(m => m.KubeFedClustersPage))
  .set(referenceForModel(KubeFedConfigModel), () => import('./federation-config' /* webpackChunkName: "task" */).then(m => m.KubeFedConfigsPage))
  .set(referenceForModel(FederatedTypeConfigModel), () => import('./federated-type-config' /* webpackChunkName: "task" */).then(m => m.FederatedTypeConfigsPage))
  .set(referenceForModel(DNSEndpointModel), () => import('./dns-endpoint' /* webpackChunkName: "task" */).then(m => m.DNSEndpointsPage))
  .set(referenceForModel(DomainModel), () => import('./domain' /* webpackChunkName: "task" */).then(m => m.DomainsPage))
  .set(referenceForModel(IngressDNSRecordModel), () => import('./ingress-dns-record' /* webpackChunkName: "task" */).then(m => m.IngressDNSRecordsPage))
  .set(referenceForModel(ServiceDNSRecordModel), () => import('./service-dns-record' /* webpackChunkName: "task" */).then(m => m.ServiceDNSRecordsPage))
  .set(referenceForModel(MachineDeploymentModel), () => import('./machine-deployment' /* webpackChunkName: "task" */).then(m => m.MachineDeploymentsPage))
  .set(referenceForModel(MachineModel), () => import('./machine' /* webpackChunkName: "task" */).then(m => m.MachinesPage))
  .set(referenceForModel(MachineSetModel), () => import('./machine-set' /* webpackChunkName: "task" */).then(m => m.MachineSetsPage))
  .set(referenceForModel(Metal3ClusterModel), () => import('./baremetal-cluster' /* webpackChunkName: "task" */).then(m => m.Metal3ClustersPage))
  .set(referenceForModel(Metal3MachineModel), () => import('./baremetal-machine' /* webpackChunkName: "task" */).then(m => m.Metal3MachinesPage))
  .set(referenceForModel(Metal3MachineTemplateModel), () => import('./baremetal-machine-template' /* webpackChunkName: "task" */).then(m => m.Metal3MachineTemplatesPage))
  .set(referenceForModel(AWSClusterModel), () => import('./aws-cluster' /* webpackChunkName: "task" */).then(m => m.AWSClustersPage))
  .set(referenceForModel(AWSMachineModel), () => import('./aws-machine' /* webpackChunkName: "task" */).then(m => m.AWSMachinesPage))
  .set(referenceForModel(AWSMachineTemplateModel), () => import('./aws-machine-template' /* webpackChunkName: "task" */).then(m => m.AWSMachineTemplatesPage))
  .set(referenceForModel(VirtualServiceModel), () => import('./virtual-service' /* webpackChunkName: "task" */).then(m => m.VirtualServicePage))
  .set(referenceForModel(DestinationRuleModel), () => import('./destination-rule' /* webpackChunkName: "task" */).then(m => m.DestinationRulePage))
  .set(referenceForModel(EnvoyFilterModel), () => import('./envoy-filter' /* webpackChunkName: "task" */).then(m => m.EnvoyFilterPage))
  .set(referenceForModel(GatewayModel), () => import('./gateway' /* webpackChunkName: "task" */).then(m => m.GatewayPage))
  .set(referenceForModel(SidecarModel), () => import('./sidecar' /* webpackChunkName: "task" */).then(m => m.SideCarPage))
  .set(referenceForModel(ServiceEntryModel), () => import('./service-entry' /* webpackChunkName: "task" */).then(m => m.ServiceEntryPage))
  .set(referenceForModel(RequestAuthenticationModel), () => import('./request-authentication' /* webpackChunkName: "task" */).then(m => m.RequestAuthenticationPage))
  .set(referenceForModel(PeerAuthenticationModel), () => import('./peer-authentication' /* webpackChunkName: "task" */).then(m => m.PeerAuthenticationPage))
  .set(referenceForModel(AuthorizationPolicyModel), () => import('./authorization-policy' /* webpackChunkName: "task" */).then(m => m.AuthorizationPolicyPage))
  .set(referenceForModel(ConditionModel), () => import('./condition' /* webpackChunkName: "task" */).then(m => m.ConditionsPage))
  .set(referenceForModel(UserSecurityPolicyModel), () => import('./user-security-policy' /* webpackChunkName: "task" */).then(m => m.UserSecurityPoliciesPage))
  .set(referenceForModel(ImageModel), () => import('./image' /* webpackChunkName: "task" */).then(m => m.ImagesPage))
  .set(referenceForModel(UsergroupModel), () => import('./usergroup' /* webpackChunkName: "task" */).then(m => m.UsergroupsPage))
  .set(referenceForModel(LimitRangeModel), () => import('./limit-range' /* webpackChunkName: "task" */).then(m => m.LimitRangesPage))
  .set(referenceForModel(DataVolumeModel), () => import('./data-volume' /* webpackChunkName: "task" */).then(m => m.DataVolumesPage))
  .set(referenceForModel(VirtualMachineModel), () => import('./virtual-machine' /* webpackChunkName: "task" */).then(m => m.VirtualMachinesPage))
  .set(referenceForModel(VirtualMachineInstanceModel), () => import('./virtual-machine-instance' /* webpackChunkName: "task" */).then(m => m.VirtualMachineInstancesPage))
  .set(referenceForModel(ClusterServiceBrokerModel), () => import('./cluster-service-broker' /* webpackChunkName: "task" */).then(m => m.ClusterServiceBrokersPage))
  .set(referenceForModel(PodSecurityPolicyModel), () => import('./pod-security-policy' /* webpackChunkName: "task" */).then(m => m.PodSecurityPoliciesPage))
  .set(referenceForModel(NamespaceClaimModel), () => import('./namespace-claim' /* webpackChunkName: "task" */).then(m => m.NamespaceClaimsPage))
  .set(referenceForModel(ResourceQuotaClaimModel), () => import('./resource-quota-claim' /* webpackChunkName: "task" */).then(m => m.ResourceQuotaClaimsPage))
  .set(referenceForModel(RoleBindingClaimModel), () => import('./role-binding-claim' /* webpackChunkName: "task" */).then(m => m.RoleBindingClaimsPage))
  .set(referenceForModel(UserModel), () => import('./user' /* webpackChunkName: "task" */).then(m => m.UsersPage))
  .set(referenceForModel(ClusterServiceClassModel), () => import('./cluster-service-class' /* webpackChunkName: "task" */).then(m => m.ClusterServiceClassesPage))
  .set(referenceForModel(ClusterServicePlanModel), () => import('./cluster-service-plan' /* webpackChunkName: "task" */).then(m => m.ClusterServicePlansPage))
  .set(referenceForModel(ServiceClassModel), () => import('./service-class' /* webpackChunkName: "task" */).then(m => m.ServiceClassesPage))
  .set(referenceForModel(ServicePlanModel), () => import('./service-plan' /* webpackChunkName: "task" */).then(m => m.ServicePlansPage))
  .set(referenceForModel(ServiceBrokerModel), () => import('./service-broker' /* webpackChunkName: "task" */).then(m => m.ServiceBrokersPage))
  .set(referenceForModel(ServiceBindingModel), () => import('./service-binding' /* webpackChunkName: "task" */).then(m => m.ServiceBindingsPage))
  .set(referenceForModel(ServiceInstanceModel), () => import('./service-instance' /* webpackChunkName: "task" */).then(m => m.ServiceInstancesPage))
  .set(referenceForModel(TaskModel), () => import('./task' /* webpackChunkName: "task" */).then(m => m.TasksPage))
  .set(referenceForModel(TaskRunModel), () => import('./task-run' /* webpackChunkName: "task-run" */).then(m => m.TaskRunsPage))
  .set(referenceForModel(PipelineResourceModel), () => import('./pipeline-resource' /* webpackChunkName: "pipeline-resource" */).then(m => m.PipelineResourcesPage))
  .set(referenceForModel(PipelineModel), () => import('./pipeline' /* webpackChunkName: "pipeline" */).then(m => m.PipelinesPage))
  .set(referenceForModel(PipelineRunModel), () => import('./pipeline-run' /* webpackChunkName: "pipeline-run" */).then(m => m.PipelineRunsPage))
  .set(referenceForModel(RegistryModel), () => import('./registry' /* webpackChunkName: "template" */).then(m => m.RegistryPage))
  .set(referenceForModel(TemplateInstanceModel), () => import('./template-instance' /* webpackChunkName: "template" */).then(m => m.TemplateInstancesPage))
  .set(referenceForModel(TemplateModel), () => import('./template' /* webpackChunkName: "template" */).then(m => m.TemplatesPage))
  .set(referenceForModel(ClusterModel), () => import('./cluster' /* webpackChunkName: "clusters" */).then(m => m.ClustersPage))
  .set(referenceForModel(ConfigMapModel), () => import('./configmap' /* webpackChunkName: "configmap" */).then(m => m.ConfigMapsPage))
  .set(referenceForModel(DaemonSetModel), () => import('./daemonset' /* webpackChunkName: "daemonset" */).then(m => m.DaemonSetsPage))
  .set(referenceForModel(DeploymentConfigModel), () => import('./deployment-config' /* webpackChunkName: "deployment-config" */).then(m => m.DeploymentConfigsPage))
  .set(referenceForModel(DeploymentModel), () => import('./deployment' /* webpackChunkName: "deployment" */).then(m => m.DeploymentsPage))
  .set(referenceForModel(BuildConfigModel), () => import('./build-config' /* webpackChunkName: "build-config" */).then(m => m.BuildConfigsPage))
  .set(referenceForModel(BuildModel), () => import('./build' /* webpackChunkName: "build" */).then(m => m.BuildsPage))
  .set(referenceForModel(ImageStreamModel), () => import('./image-stream' /* webpackChunkName: "image-stream" */).then(m => m.ImageStreamsPage))
  .set(referenceForModel(JobModel), () => import('./job' /* webpackChunkName: "job" */).then(m => m.JobsPage))
  .set(referenceForModel(CronJobModel), () => import('./cron-job' /* webpackChunkName: "cron-job" */).then(m => m.CronJobsPage))
  .set(referenceForModel(ProjectModel), () => import('./namespace' /* webpackChunkName: "namespace" */).then(m => m.ProjectsPage))
  .set(referenceForModel(NamespaceModel), () => import('./namespace' /* webpackChunkName: "namespace" */).then(m => m.NamespacesPage))
  .set(referenceForModel(NetworkPolicyModel), () => import('./network-policy' /* webpackChunkName: "network-policy" */).then(m => m.NetworkPoliciesPage))
  .set(referenceForModel(NodeModel), () => import('./node' /* webpackChunkName: "node" */).then(m => m.NodesPage))
  .set(referenceForModel(PodModel), () => import('./pod' /* webpackChunkName: "pod" */).then(m => m.PodsPage))
  .set(referenceForModel(ReplicaSetModel), () => import('./replicaset' /* webpackChunkName: "replicaset" */).then(m => m.ReplicaSetsPage))
  .set(referenceForModel(ReplicationControllerModel), () => import('./replication-controller' /* webpackChunkName: "replication-controller" */).then(m => m.ReplicationControllersPage))
  .set(referenceForModel(SecretModel), () => import('./secret' /* webpackChunkName: "secret" */).then(m => m.SecretsPage))
  .set(referenceForModel(ServiceAccountModel), () => import('./service-account' /* webpackChunkName: "service-account" */).then(m => m.ServiceAccountsPage))
  .set(referenceForModel(ServiceModel), () => import('./service' /* webpackChunkName: "service" */).then(m => m.ServicesPage))
  .set(referenceForModel(IngressModel), () => import('./ingress' /* webpackChunkName: "ingress" */).then(m => m.IngressesPage))
  .set(referenceForModel(RouteModel), () => import('./routes' /* webpackChunkName: "routes" */).then(m => m.RoutesPage))
  .set(referenceForModel(RoleModel), () => import('./RBAC/role' /* webpackChunkName: "role" */).then(m => m.RolesPage))
  .set(referenceForModel(RoleBindingModel), () => import('./RBAC/bindings' /* webpackChunkName: "bindings" */).then(m => m.RoleBindingsPage))
  .set(referenceForModel(PrometheusModel), () => import('./prometheus' /* webpackChunkName: "prometheus" */).then(m => m.PrometheusInstancesPage))
  .set(referenceForModel(ServiceMonitorModel), () => import('./service-monitor' /* webpackChunkName: "service-monitor" */).then(m => m.ServiceMonitorsPage))
  .set(referenceForModel(AlertmanagerModel), () => import('./alert-manager' /* webpackChunkName: "alert-manager" */).then(m => m.AlertManagersPage))
  .set(referenceForModel(StatefulSetModel), () => import('./stateful-set' /* webpackChunkName: "stateful-set" */).then(m => m.StatefulSetsPage))
  .set(referenceForModel(ResourceQuotaModel), () => import('./resource-quota' /* webpackChunkName: "resource-quota" */).then(m => m.ResourceQuotasPage))
  .set(referenceForModel(HorizontalPodAutoscalerModel), () => import('./hpa' /* webpackChunkName: "hpa" */).then(m => m.HorizontalPodAutoscalersPage))
  .set(referenceForModel(PersistentVolumeModel), () => import('./persistent-volume' /* webpackChunkName: "persistent-volume" */).then(m => m.PersistentVolumesPage))
  .set(referenceForModel(PersistentVolumeClaimModel), () => import('./persistent-volume-claim' /* webpackChunkName: "persistent-volume-claim" */).then(m => m.PersistentVolumeClaimsPage))
  .set(ReportReference, () => import('./chargeback' /* webpackChunkName: "chargeback" */).then(m => m.ReportsPage))
  .set(ReportGenerationQueryReference, () => import('./chargeback' /* webpackChunkName: "chargeback" */).then(m => m.ReportGenerationQueriesPage))
  .set(referenceForModel(StorageClassModel), () => import('./storage-class' /* webpackChunkName: "storage-class" */).then(m => m.StorageClassPage))
  .set(referenceForModel(CustomResourceDefinitionModel), () => import('./custom-resource-definition' /* webpackChunkName: "custom-resource-definition" */).then(m => m.CustomResourceDefinitionsPage))
  .set(referenceForModel(ClusterServiceVersionModel), () => import('./cloud-services/clusterserviceversion' /* webpackChunkName: "clusterserviceversion" */).then(m => m.ClusterServiceVersionsPage))
  .set(referenceForModel(CatalogSourceModel), () => import('./cloud-services/catalog-source' /* webpackChunkName: "catalog-source" */).then(m => m.CatalogSourcesPage))
  .set(referenceForModel(SubscriptionModel), () => import('./cloud-services/subscription' /* webpackChunkName: "subscription" */).then(m => m.SubscriptionsPage))
  .set(referenceForModel(InstallPlanModel), () => import('./cloud-services/install-plan' /* webpackChunkName: "install-plan" */).then(m => m.InstallPlansPage));
