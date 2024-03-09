import { FC, PropsWithChildren } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from 'shared/config';

export const WithReactQuery: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
