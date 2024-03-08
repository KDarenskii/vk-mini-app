import { FC } from 'react';

import { Router } from './config';
import { WithReactQuery, WithUIKitConfig } from './providers';

export const App: FC = () => {
  return (
    <WithReactQuery>
      <WithUIKitConfig>
        <Router />
      </WithUIKitConfig>
    </WithReactQuery>
  );
};
