import React from 'react';
import NavItem from './NavItem';

const Navbar: React.FC = () => {
  const navItems = [
    { to: '/', label: 'Home', exact: true },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
    { to: '/about', label: 'About' },
  ];

  return (
    <nav className="mt-12">
      <ul className="flex list-none justify-center gap-4">
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to} label={item.label} exact={item.exact} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
