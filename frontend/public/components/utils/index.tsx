export * from './line-buffer';
export * from './promise-component';
export * from './cog';
export * from './selector';
export * from './selector-input';
export * from './label-list';
export * from './log-window';
export * from './resource-icon';
export * from './resource-link';
export * from './resource-log';
export * from './volume-icon';
export * from './timestamp';
export * from './vertnav';
export * from './details-page';
export * from './inject';
export * from './disabled';
export * from './file-input';
export * from './firehose';
export * from './dropdown';
export * from './status-box';
export * from './nav-title';
export * from './overflow';
export * from './units';
export * from './select-text';
export * from './toggle-play';
export * from './button-bar';
export * from './number-spinner';
export * from './cloud-provider';
export * from './documentation';
export * from './router';
export * from './operator-states';
export * from './container-linux-update-operator';
export * from './link';
export * from './async';
export * from './download-button';
export * from './error-boundary';
export * from './deployment-pod-counts';
export * from './entitlements';
export * from './build-strategy';
export * from './copy-to-clipboard';
export * from './build-hooks';
export * from './webhooks';
export * from './section-heading';
export * from './scroll-to-top-on-mount';

/*
  Add the enum for NameValueEditorPair here and not in its namesake file because the editor should always be
  loaded asynchronously in order not to bloat the vendor file. The enum reference into the editor
  will cause it not to load asynchronously.
 */
/* eslint-disable no-undef */
export const enum NameValueEditorPair {
  Name = 0,
  Value,
  Index,
}

export const enum StatusEditorPair {
  Status = '',
  Reason = ''
}

export const enum AdvancedPortEditorPair {
  Name,
  Port,
  Protocol,
  TargetPort,
  Index,
}

export const enum BasicPortEditorPair {
  Name,
  Port,
  Protocol,
  Index,
}

export const enum VolumeEditorPair {
  Name,
  MountPath,
  PVC,
  ReadOnly,
  Index,
}

export const enum ValueEditorPair {
  Value,
  Index,
}

export const enum KeyValueEditorPair {
  Key,
  Value,
  Index,
}

export const enum RoleEditorPair {
  Group,
  Resource,
  Role,
  Index,
}

export const enum IngressEditorPair {
  PathName,
  ServiceName,
  ServicePort,
  Index,
}

export const enum IngressHostEditorPair {
  HostName,
  Path,
  Index,
}