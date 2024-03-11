import { FC } from 'react';

import { Router } from './config';
import { WithReactQuery } from './providers/WithReactQuery';
import { WithTheme } from './providers/WithTheme';
import { WithUIKitConfig } from './providers/WithUIKitConfig';

export const App: FC = () => {
  return (
    <WithReactQuery>
      <WithTheme>
        <WithUIKitConfig>
          <Router />
        </WithUIKitConfig>
      </WithTheme>
    </WithReactQuery>
  );
};
