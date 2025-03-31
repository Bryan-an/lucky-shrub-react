import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ChatbotComponent from '../../features/chatbot/ui/ChatbotComponent';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-dark">
      <div className="mx-auto flex min-h-screen max-w-[900px] flex-col px-4 py-4 pb-8 md:px-8 md:py-8 md:pb-12">
        <Header />
        <Navbar />
        <main className="mt-12 flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ChatbotComponent />
    </div>
  );
};

export default Layout;
