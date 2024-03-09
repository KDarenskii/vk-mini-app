import { FC } from 'react';

import { FactPanel } from 'widgets/factPanel';

import { SidebarLayout } from '../layouts/SidebarLayout';

export const FactPage: FC = () => {
  return (
    <SidebarLayout>
      <FactPanel />
    </SidebarLayout>
  );
};
