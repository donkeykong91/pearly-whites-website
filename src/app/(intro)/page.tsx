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
    <main
      className={`transform-all flex justify-start self-center transition duration-700 ease-out sm:col-[1/4] sm:row-[2/3] md:col-[2/8] ${visible ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:-translate-y-10'}`}
    >
      <Details />
    </main>
  );
};

export default IntroPage;
