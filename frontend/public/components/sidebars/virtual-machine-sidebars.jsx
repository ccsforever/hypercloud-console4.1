import * as _ from 'lodash-es';
import * as React from 'react';

import { VirtualMachineModel } from '../../models';
import { referenceForModel } from '../../module/k8s';
import { SampleYaml } from './resource-sidebar';
import { useTranslation } from 'react-i18next';

export const VirtualMachineSidebar = ({ kindObj, loadSampleYaml, downloadSampleYaml, isCreateMode }) => {
  const { t } = useTranslation();
  const samples = [
    {
      header: t('STRING:VM-SIDEBAR_0'),
      details: t('STRING:VM-SIDEBAR_1'),
      templateName: 'virtualmachine-sample',
      kind: referenceForModel(VirtualMachineModel),
    },
    {
      header: t('STRING:VM-SIDEBAR_2'),
      details: t('STRING:VM-SIDEBAR_3'),
      templateName: 'virtualmachine-sample2',
      kind: referenceForModel(VirtualMachineModel),
    },
    // {
    //   header: t('STRING:VM-SIDEBAR_4'),
    //   details: t('STRING:VM-SIDEBAR_5'),
    //   templateName: 'virtualmachine-sample3',
    //   kind: referenceForModel(VirtualMachineModel),
    // },
  ];
  const filteredSamples = isCreateMode ? samples : _.filter(samples, { kind: referenceForModel(kindObj) });
  console.log(filteredSamples);
  return (
    <ol className="co-resource-sidebar-list">
      {_.map(filteredSamples, sample => {
        return <SampleYaml key={sample.templateName} sample={sample} loadSampleYaml={loadSampleYaml} downloadSampleYaml={downloadSampleYaml} />;
      })}
    </ol>
  );
};
