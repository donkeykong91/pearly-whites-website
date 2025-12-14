'use client';
import FooterBar from './FooterBar';
import { useEffect, useState } from 'react';

/**
 * Holds the details of the FooterBar.
 * @constructor
 */
const Footer = () => {
  const [visible, setVisible] = useState(false);

  // Fade-in animation effect
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex w-full transform justify-center transition-all duration-700 ease-out sm:px-3 sm:pb-3 ${visible ? 'opacity-80' : 'opacity-0'}`}
    >
      <FooterBar />
    </div>
  );
};

export default Footer;
