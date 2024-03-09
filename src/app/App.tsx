import { FC } from 'react';

import { Router } from './config';
import { WithReactQuery } from './providers/WithReactQuery';
import { WithUIKitConfig } from './providers/WithUIKitConfig';

export const App: FC = () => {
  return (
    <WithReactQuery>
      <WithUIKitConfig>
        <Router />
      </WithUIKitConfig>
    </WithReactQuery>
  );
};
