// ** Routes Imports
import { getHomeRouteForLoggedInUser, getUserData } from '@utils';
import AuthRoutes from './Auth';
import PagesRoutes from './Pages';
import DashboardRoutes from './Dashboards';
import UserRoutes from './Users';
import MenuRoutes from './Menus';
import VendorsRoutes from './Vendors';

// ** Document title
const TemplateTitle = '%s - Canteen Hub';

// ** Default Route
const loggedUser = getUserData();
const DefaultRoute = loggedUser ? getHomeRouteForLoggedInUser(loggedUser.role) : getHomeRouteForLoggedInUser();

// ** Merge Routes
const Routes = [
  ...AuthRoutes,
  ...DashboardRoutes,
  ...MenuRoutes,
  ...UserRoutes,
  ...VendorsRoutes,
  // ...PagesRoutes,
  // ...UiElementRoutes,
  // ...ExtensionsRoutes,
  // ...PageLayoutsRoutes,
  // ...FormRoutes,
  // ...TablesRoutes,
  // ...ChartMapsRoutes,
];

export { DefaultRoute, TemplateTitle, Routes };
