import { FC, PropsWithChildren } from 'react';

import { useTheme } from 'shared/hooks';

import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export const WithUIKitConfig: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();

  return (
    <ConfigProvider appearance={theme}>
      <AdaptivityProvider>
        <AppRoot>{children}</AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
