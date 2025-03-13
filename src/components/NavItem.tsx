import React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavItemProps {
  to: string;
  label: string;
  exact?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, exact }) => (
  <li>
    <NavLink
      to={to}
      end={exact}
      className={({ isActive }) =>
        isActive
          ? 'text-lg font-bold text-primary underline transition-colors duration-300'
          : 'text-lg font-bold text-black transition-colors duration-300 hover:text-primary'
      }
    >
      {label}
    </NavLink>
  </li>
);

export default NavItem;
