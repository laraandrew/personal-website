"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-orange-500 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Andrew</div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Home</Link>
          <Link href="#projects" className="text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Projects</Link>
          <Link href="#about" className="text-white hover:bg-yellow-600 px-3 py-2 rounded-md">About</Link>
          <Link href="#contact" className="text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Contact</Link>
          <Link href="/tech" className="text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Tech</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            ☰
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-yellow-500 text-center space-y-2 py-2">
          <Link href="/" className="block text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Home</Link>
          <Link href="#projects" className="block text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Projects</Link>
          <Link href="#about" className="block text-white hover:bg-yellow-600 px-3 py-2 rounded-md">About</Link>
          <Link href="#contact" className="block text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Contact</Link>
          <Link href="/tech" className="block text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Tech</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
