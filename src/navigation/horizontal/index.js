import { Mail, Home } from 'react-feather';

export default [
  {
    id: 'home',
    title: 'Dashboard',
    // icon: <Home size={20} />,
    navLink: '/',
  },
  {
    id: 'orders',
    title: 'Orders',
    // icon: <Mail size={20} />,
    navLink: '/orders',
  },

  {
    id: 'events',
    title: 'Events',
    // icon: <Mail size={20} />,
    navLink: '/events',
  },
  {
    id: 'menus',
    title: 'Menus',
    // icon: <Mail size={20} />,
    navLink: '/second-page',
  },
  {
    id: 'more',
    title: 'More',
    // icon: <Mail size={20} />,
    navLink: '/more',
    children: [
      {
        id: 'stores',
        title: 'Stores',
        // icon: <Mail size={20} />,
        navLink: '/vendor/stores',
      },
      {
        id: 'storesUsers',
        title: 'Store Users',
        // icon: <Mail size={20} />,
        navLink: '/vendor/store-users',
      },
    ],
  },
];
