import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const VendorsRoutes = [
  {
    path: '/vendor/stores',
    component: lazy(() => import('../../views/vendors/stores/list')),
    exact: true,
    layout: 'HorizontalLayout',
  },
  {
    path: '/vendor/store/add',
    component: lazy(() => import('../../views/vendors/stores/add')),
    layout: 'HorizontalLayout',
  },
  {
    path: '/vendor/store/edit/:id',
    component: lazy(() => import('../../views/vendors/stores/edit')),
    layout: 'HorizontalLayout',
  },

  {
    path: '/vendor/store-users',
    component: lazy(() => import('../../views/users/storeUsers/list')),
    layout: 'HorizontalLayout',
    exact: true,
  },
  {
    path: '/vendor/store-users/edit/:id',
    component: lazy(() => import('../../views/users/storeUsers/edit')),
    layout: 'HorizontalLayout',

  },

  // {
  //   path: '/users/vendors/edit/:id',
  //   component: lazy(() => import('../../views/users/vendors/edit')),
  // },
  // {
  //   path: '/users/schools',
  //   component: lazy(() => import('../../views/users/schools/list')),
  //   exact: true,
  // },
  // {
  //   path: '/users/schools/edit/:id',
  //   component: lazy(() => import('../../views/users/schools/edit')),
  //   meta: {
  //     navLink: '/users/schools',
  //   },
  // },
  // {
  //   path: '/users/customers',
  //   component: lazy(() => import('../../views/users/customers/list')),
  //   exact: true,
  // },
  // {
  //   path: '/users/customers/edit/:id',
  //   component: lazy(() => import('../../views/users/customers/edit')),
  //   meta: {
  //     navLink: '/users/customers',
  //   },
  // },
];

export default VendorsRoutes;
