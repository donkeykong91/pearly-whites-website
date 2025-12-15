'use client';
import Details from '@/components/ui/Details';
import { useLayoutEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const IntroPage = () => {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const pathName = usePathname();

  // Slide-fade-in animation effect
  useLayoutEffect(() => {
    if (pathName === '/') {
      setReady(false);
      setVisible(false);
      requestAnimationFrame(() => {
        setReady(true);
        setVisible(true);
      });
    }
  }, [pathName]);

  return (
    <div
      className={`self-center ${visible ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:-translate-y-10'} ${ready ? 'transition duration-700 ease-out' : 'transition-none'}`}
    >
      <Details />
    </div>
  );
};

export default IntroPage;
