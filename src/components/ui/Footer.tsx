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
      className={`transform self-end transition-all duration-700 ease-out sm:col-[1/4] md:col-[1/13] ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <FooterBar />
    </div>
  );
};

export default Footer;
