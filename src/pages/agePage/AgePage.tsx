import { FC } from 'react';

import { AgePanel } from 'widgets/agePanel';

import { SidebarLayout } from '../layouts/SidebarLayout';

export const AgePage: FC = () => {
  return (
    <SidebarLayout>
      <AgePanel />
    </SidebarLayout>
  );
};
