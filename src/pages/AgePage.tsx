import { FC } from 'react';

import { AgePanel } from 'widgets';

import { SidebarLayout } from './layouts';

export const AgePage: FC = () => {
  return (
    <SidebarLayout>
      <AgePanel />
    </SidebarLayout>
  );
};
