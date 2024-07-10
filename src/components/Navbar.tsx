"use client"; // Add this at the top

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
        <div className="text-white text-xl font-bold">Andrew Laras Portfolio</div>
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <a className="text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Home</a>
          </Link>
          <Link href="#projects">
            <a className="text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Projects</a>
          </Link>
          <Link href="#about">
            <a className="text-white hover:bg-yellow-600 px-3 py-2 rounded-md">About</a>
          </Link>
          <Link href="#contact">
            <a className="text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Contact</a>
          </Link>
          <Link href="/tech">
            <a className="text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Tech</a>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            ☰
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-yellow-500 text-center space-y-2 py-2">
          <Link href="/">
            <a className="block text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Home</a>
          </Link>
          <Link href="#projects">
            <a className="block text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Projects</a>
          </Link>
          <Link href="#about">
            <a className="block text-white hover:bg-yellow-600 px-3 py-2 rounded-md">About</a>
          </Link>
          <Link href="#contact">
            <a className="block text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Contact</a>
          </Link>
          <Link href="/tech">
            <a className="block text-white hover:bg-yellow-600 px-3 py-2 rounded-md">Tech</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
