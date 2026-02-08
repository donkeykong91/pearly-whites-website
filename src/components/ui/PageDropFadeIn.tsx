'use client';

import { ReactNode, useLayoutEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageDropFadeInProps {
  children: ReactNode;
  className?: string;
  disableOnPaths?: string[];
  isEnabled?: boolean;
}

/**
 * Reusable drop + fade-in wrapper that replays on route changes.
 */
const PageDropFadeIn = ({
  children,
  className = '',
  disableOnPaths = [],
  isEnabled = true,
}: PageDropFadeInProps) => {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [animate, setAnimate] = useState(false);
  const pathname = usePathname();
  const shouldSkipAnimation = disableOnPaths.includes(pathname);

  const isRunnable = visible && animate;

  useLayoutEffect(() => {
    if (!isEnabled) {
      setAnimate(false);
      setReady(false);
      setVisible(false);
      return;
    }

    if (shouldSkipAnimation) return;

    setAnimate(false);
    setReady(false);
    setVisible(false);

    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 120);

    requestAnimationFrame(() => {
      setReady(true);
      setVisible(true);
    });

    return () => clearTimeout(timeout);
  }, [pathname, shouldSkipAnimation, isEnabled]);

  if (shouldSkipAnimation) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`${className} ${isRunnable ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'} ${ready ? 'transition-all duration-700 ease-out' : 'transition-none'}`}
    >
      {children}
    </div>
  );
};

export default PageDropFadeIn;
