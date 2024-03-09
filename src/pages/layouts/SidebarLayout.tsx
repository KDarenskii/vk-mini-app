import { FC, PropsWithChildren } from 'react';

import { NavSidebar } from 'widgets/navSideBar';

import {
  PanelHeader,
  SplitCol,
  SplitLayout,
  useAdaptivityConditionalRender,
  usePlatform,
} from '@vkontakte/vkui';

export const SidebarLayout: FC<PropsWithChildren> = ({ children }) => {
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
      </SplitCol>
    </SplitLayout>
  );
};
