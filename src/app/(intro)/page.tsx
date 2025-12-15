'use client';
import Details from '@/components/ui/Details';
import { useLayoutEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const IntroPage = () => {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [animate, setAnimate] = useState(false);
  const pathName = usePathname();

  // Slide-fade-in animation effect
  useLayoutEffect(() => {
    if (pathName !== '/') return;

    setAnimate(false);
    setReady(false);
    setVisible(false);

    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 500);

    requestAnimationFrame(() => {
      setReady(true);
      setVisible(true);
    });

    return () => clearTimeout(timeout);
  }, [pathName]);

  return (
    <div
      className={`self-center ${visible && animate ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:-translate-y-10'} ${ready ? 'transition duration-700 ease-out' : 'transition-none'}`}
    >
      <Details />
    </div>
  );
};

export default IntroPage;
