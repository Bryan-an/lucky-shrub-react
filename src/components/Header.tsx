import React from 'react';
import logo from '../assets/images/asset-2@3x.png';

const Header: React.FC = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="Lucky Shrub Logo" />
    </header>
  );
};

export default Header;
