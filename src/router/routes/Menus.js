import { lazy } from 'react';

const MenuRoutes = [
  {
    path: '/menus',
    component: lazy(() => import('../../views/SecondPage')),
    layout: 'HorizontalLayout',
    meta: {
      navLink: '/second-page',
    },
  },
];

export default MenuRoutes;
