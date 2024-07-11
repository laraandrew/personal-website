import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

interface LayoutProps {
  children: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

const Layout: React.FC<LayoutProps> = ({ children, gradientFrom, gradientTo }) => {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
