import { FC, PropsWithChildren } from 'react';

import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export const WithUIKitConfig: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>{children}</AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
