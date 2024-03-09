import { createBrowserRouter } from 'react-router-dom';

import { AgePage } from 'pages/agePage';
import { FactPage } from 'pages/factPage';

import { routes } from 'shared/constants';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: routes.age.path,
        element: <AgePage />,
      },
      {
        path: routes.fact.path,
        element: <FactPage />,
      },
    ],
  },
  {
    path: '*',
    element: <h1>404 NOT FOUND</h1>,
  },
]);
