import React from 'react';
import logo from '@/shared/assets/images/asset-2@3x.png';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 flex items-center justify-between border-t border-border pt-6">
      <img className="w-20 object-contain" src={logo} alt="Lucky Shrub Logo" />
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Lucky Shrub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
