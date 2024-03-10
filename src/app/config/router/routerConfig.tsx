import { Navigate, createHashRouter } from 'react-router-dom';

import { AgePage } from 'pages/agePage';
import { FactPage } from 'pages/factPage';

import { routes } from 'shared/constants';

export const router = createHashRouter([
  {
    path: routes.root.path,
    element: <Navigate to={routes.fact.path} />,
  },
  {
    path: routes.fact.path,
    element: <FactPage />,
  },
  {
    path: routes.age.path,
    element: <AgePage />,
  },
  {
    path: '*',
    element: <h1>404 NOT FOUND</h1>,
  },
]);
