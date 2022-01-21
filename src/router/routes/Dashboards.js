import { lazy } from 'react';

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/Home')),
    layout: 'BlankLayout',
    meta: {
      navLink: '/',
    },
  },
  {
    path: '/admin/dashboard',
    component: lazy(() => import('../../views/pages/dashboards/admin')),
    // meta: {
    //   navLink: '/',
    // },
  },
  {
    path: '/vendor/dashboard',
    component: lazy(() => import('../../views/pages/dashboards/vendor')),
    layout: 'HorizontalLayout',
    meta: {
      navLink: '/',
    },
  },
  {
    path: '/group/dashboard',
    component: lazy(() => import('../../views/pages/dashboards/group')),
    layout: 'HorizontalLayout',
    meta: {
      navLink: '/',
    },
  },
  {
    path: '/customer/dashboard',
    component: lazy(() => import('../../views/pages/dashboards/customer')),
    layout: 'HorizontalLayout',
    meta: {
      navLink: '/',
    },
  },
];

export default DashboardRoutes;
