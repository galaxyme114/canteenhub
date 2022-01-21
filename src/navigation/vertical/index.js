import {
  Mail, Home, Users, LifeBuoy, Box, Coffee,
} from 'react-feather';

export default [
  // {
  //   header: 'Apps & Pages',
  // },
  {
    id: 'home',
    title: 'Dashboard',
    icon: <Home size={20} />,
    navLink: '/dashboard',
  },

  {
    id: 'users',
    title: 'Users',
    icon: <Users size={20} />,
    // badge: 'light-warning',
    // badgeText: '2',
    children: [
      // {
      //   id: 'allusers',
      //   title: 'All Users',
      //   navLink: '/user/list',
      // },
      {
        id: 'administrators',
        title: 'Administrators',
        navLink: '/users/administrators',
      },
      {
        id: 'vendors',
        title: 'Vendors',
        navLink: '/users/vendors',
      },
      // {
      //   id: 'groups',
      //   title: 'Groups',
      //   navLink: '/users/groups',
      // },
      {
        id: 'schools',
        title: 'Schools',
        navLink: '/users/schools',
      },
      {
        id: 'customers',
        title: 'Customers',
        navLink: '/users/customers',
      },
    ],
  },

  {
    id: 'menus',
    title: 'Food Menus',
    icon: <Coffee size={20} />,
    // badge: 'light-warning',
    // badgeText: '2',
    children: [
      {
        id: 'email',
        title: 'Email',
        navLink: '/apps/email',
      },
    ],
  },
  // {
  //   id: 'email',
  //   title: 'Email',
  //   icon: <Mail size={20} />,
  //   navLink: '/apps/email',
  // },
  // {
  //   id: 'analyticsDash',
  //   title: 'Analytics',
  //   icon: <Home size={20} />,
  //   navLink: '/dashboard/analytics',
  //   badge: 'light-primary',
  //   badgeText: '2',
  // },
  // {
  //   id: 'raiseSupport',
  //   title: 'Raise Support',
  //   icon: <LifeBuoy size={20} />,
  //   externalLink: true,
  //   newTab: true,
  //   navLink: 'https://pixinvent.ticksy.com/',
  // },
  // {
  //   id: 'users',
  //   title: 'Users',
  //   // icon: <Mail size={20} />,
  //   navLink: '/users',
  // },
  // {
  //   id: 'secondPage',
  //   title: 'Second Page',
  //   // icon: <Mail size={20} />,
  //   navLink: '/second-page',
  // },
];
