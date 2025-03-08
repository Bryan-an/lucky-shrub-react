import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="font-open-sans">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
