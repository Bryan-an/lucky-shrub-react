import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="mt-12">
      <ul className="flex list-none justify-center gap-4">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'text-lg font-bold text-primary underline no-underline transition-colors duration-300'
                : 'text-lg font-bold text-black no-underline transition-colors duration-300 hover:text-primary'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? 'text-lg font-bold text-primary underline no-underline transition-colors duration-300'
                : 'text-lg font-bold text-black no-underline transition-colors duration-300 hover:text-primary'
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-lg font-bold text-primary underline no-underline transition-colors duration-300'
                : 'text-lg font-bold text-black no-underline transition-colors duration-300 hover:text-primary'
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-lg font-bold text-primary underline no-underline transition-colors duration-300'
                : 'text-lg font-bold text-black no-underline transition-colors duration-300 hover:text-primary'
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
