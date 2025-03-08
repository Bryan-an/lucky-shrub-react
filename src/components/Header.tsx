import React from 'react';
import logo from '../assets/images/asset-2@3x.png';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-center">
      <img className="mt-5 w-32 object-contain" src={logo} alt="Lucky Shrub Logo" />
    </header>
  );
};

export default Header;
