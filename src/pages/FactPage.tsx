import { FC } from 'react';

import { FactPanel } from 'widgets';

import { SidebarLayout } from './layouts';

export const FactPage: FC = () => {
  return (
    <SidebarLayout>
      <FactPanel />
    </SidebarLayout>
  );
};
