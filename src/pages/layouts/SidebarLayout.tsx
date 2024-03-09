import { FC, ReactElement } from 'react';

import { NavBottomBar } from 'widgets/navBottomBar';
import { NavSidebar } from 'widgets/navSideBar';

import {
  PanelHeader,
  SplitCol,
  SplitLayout,
  useAdaptivityConditionalRender,
  usePlatform,
} from '@vkontakte/vkui';

interface SidebarLayoutProps {
  children: ReactElement;
}

export const SidebarLayout: FC<SidebarLayoutProps> = ({ children }) => {
  const platform = usePlatform();
  const { viewWidth } = useAdaptivityConditionalRender();

  return (
    <SplitLayout
      style={{ justifyContent: 'center' }}
      header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}
    >
      {viewWidth.tabletPlus && (
        <SplitCol
          className={viewWidth.tabletPlus.className}
          fixed
          width={300}
          maxWidth={300}
        >
          <NavSidebar />
        </SplitCol>
      )}
      <SplitCol width="100%" maxWidth="600px" stretchedOnMobile autoSpaced>
        {children}
        <NavBottomBar />
      </SplitCol>
    </SplitLayout>
  );
};
