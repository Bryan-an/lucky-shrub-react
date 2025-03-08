import React from 'react';
import logo from '../assets/images/asset-2@3x.png';

const Footer: React.FC = () => {
  return (
    <footer>
      <img className="logo" src={logo} alt="Lucky Shrub Logo" />
      <small className="copyright">
        &copy; {new Date().getFullYear()} Lucky Shrub. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
