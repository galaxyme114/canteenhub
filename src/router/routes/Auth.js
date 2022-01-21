import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const PagesRoutes = [
  {
    path: '/login',
    component: lazy(() => import('../../views/pages/auth/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/register',
    component: lazy(() => import('../../views/pages/auth/RegisterLanding')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/register-partner',
    component: lazy(() => import('../../views/pages/auth/RegisterVendor')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/register-group',
    component: lazy(() => import('../../views/pages/auth/RegisterGroup')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/register-customer',
    component: lazy(() => import('../../views/pages/auth/RegisterCustomer')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/forgot-password',
    component: lazy(() => import('../../views/pages/auth/ForgotPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/reset-password/:code',
    component: lazy(() => import('../../views/pages/auth/ResetPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true,
    },
  },
  {
    path: '/verify-email/:code',
    component: lazy(() => import('../../views/pages/auth/VerifyEmail')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true,
    },
  },
  {
    path: '/misc/not-authorized',
    component: lazy(() => import('../../views/pages/misc/NotAuthorized')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true,
    },
  },
  // {
  //   path: '/misc/maintenance',
  //   component: lazy(() => import('../../views/pages/misc/Maintenance')),
  //   layout: 'BlankLayout',
  //   meta: {
  //     publicRoute: true,
  //   },
  // },
  {
    path: '/misc/error',
    component: lazy(() => import('../../views/pages/misc/Error')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true,
    },
  },
];

export default PagesRoutes;
