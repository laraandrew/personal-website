import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-daba75 to-feaf59 text-white py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-3xl font-bold cursor-pointer md:hidden" onClick={toggleMenu}>☰</div>
        <div className={`menu flex gap-6 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
          <Link href="#welcome-section">Home</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
