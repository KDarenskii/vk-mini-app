import { FC } from 'react';

import { RouterProvider } from 'react-router-dom';

import { router } from './routerConfig';

export const Router: FC = () => {
  return <RouterProvider router={router} />;
};
