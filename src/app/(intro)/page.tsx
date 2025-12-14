'use client';
import Details from '@/components/ui/Details';
import { useEffect, useState } from 'react';

const IntroPage = () => {
  const [visible, setVisible] = useState(false);

  // Slide-fade-in animation effect
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`transform-all self-center transition duration-700 ease-out ${visible ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:-translate-y-10'}`}
    >
      <Details />
    </div>
  );
};

export default IntroPage;
