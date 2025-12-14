'use client';

import Navbar from './Navbar/Navbar';
import { useEffect, useState } from 'react';

/**
 * Holds the navbar.
 * @constructor
 */
const Header = () => {
  const [visible, setVisible] = useState(false);

  // Fade-in animation effect
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header
      className={`flex w-full transform justify-center transition-all duration-700 ease-out sm:px-3 sm:pt-3 ${visible ? 'opacity-80 hover:opacity-100' : 'opacity-0'}`}
    >
      <Navbar />
    </header>
  );
};

export default Header;
