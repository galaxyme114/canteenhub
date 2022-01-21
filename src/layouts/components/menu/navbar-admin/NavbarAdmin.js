// ** Dropdowns Imports
import { Fragment, useEffect } from 'react';

// ** Third Party Components
import {
  Menu,
} from 'react-feather';
import { NavItem, NavLink } from 'reactstrap';
import AdminUserDropdown from './AdminUserDropdown';

// ** Third Party Components

const NavbarUser = (props) => {
  // ** Props
  const {
    menuCollapsed, setMenuVisibility, setGroupOpen, menuHover,
  } = props;

  // ** Reset open group
  useEffect(() => {
    if (!menuHover && menuCollapsed) setGroupOpen([]);
  }, [menuHover, menuCollapsed]);

  return (
    <>
      <ul className="navbar-nav d-xl-none d-flex align-items-center">
        <NavItem className="mobile-menu mr-auto">
          <NavLink className="nav-menu-main menu-toggle hidden-xs is-active" onClick={() => setMenuVisibility(true)}>
            <Menu className="ficon" />
          </NavLink>
        </NavItem>
      </ul>
      <ul className="nav navbar-nav justify-content-end align-items-center w-100 ">
        <AdminUserDropdown />
      </ul>
    </>
  );
};
export default NavbarUser;
