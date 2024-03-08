import { createBrowserRouter } from 'react-router-dom';

import { AgePage, FactPage } from 'pages';

import { routes } from 'shared';

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
