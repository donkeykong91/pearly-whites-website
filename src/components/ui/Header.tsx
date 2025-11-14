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
    <div
      className={`transform transition-all duration-700 ease-out sm:col-[1/4] md:col-[1/13] ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <Navbar />
    </div>
  );
};

export default Header;
