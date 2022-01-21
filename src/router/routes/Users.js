import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const PagesRoutes = [
  {
    path: '/users/administrators',
    component: lazy(() => import('../../views/users/administrators/list')),
    exact: true,
  },
  {
    path: '/users/administrators/edit/:id',
    component: lazy(() => import('../../views/users/administrators/edit')),
  },
  {
    path: '/users/vendors',
    component: lazy(() => import('../../views/users/vendors/list')),
    exact: true,
    meta: {
      navLink: '/users/vendors',
    },
  },
  {
    path: '/users/vendors/edit/:id',
    component: lazy(() => import('../../views/users/vendors/edit')),
  },
  {
    path: '/users/schools',
    component: lazy(() => import('../../views/users/schools/list')),
    exact: true,
  },
  {
    path: '/users/schools/edit/:id',
    component: lazy(() => import('../../views/users/schools/edit')),
    meta: {
      navLink: '/users/schools',
    },
  },
  {
    path: '/users/customers',
    component: lazy(() => import('../../views/users/customers/list')),
    exact: true,
  },
  {
    path: '/users/customers/edit/:id',
    component: lazy(() => import('../../views/users/customers/edit')),
    meta: {
      navLink: '/users/customers',
    },
  },
];

export default PagesRoutes;
