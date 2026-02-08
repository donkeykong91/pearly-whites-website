'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';
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
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(true);
  const [animate, setAnimate] = useState(true);
  const pathname = usePathname();
  const normalizedPathname = useMemo(() => {
    if (!pathname) return pathname;
    if (pathname === '/') return '/';
    return pathname.replace(/\/+$/, '');
  }, [pathname]);

  const normalizedDisabledPaths = useMemo(
    () =>
      disableOnPaths.map((path) => {
        if (path === '/') return '/';
        return path.replace(/\/+$/, '');
      }),
    [disableOnPaths],
  );

  const shouldSkipAnimation =
    !isEnabled ||
    normalizedPathname === null ||
    normalizedPathname === undefined ||
    normalizedDisabledPaths.includes(normalizedPathname);

  const isRunnable = visible && animate;

  useEffect(() => {
    if (shouldSkipAnimation) {
      setAnimate(true);
      setReady(true);
      setVisible(true);
      return;
    }

    setAnimate(false);
    setReady(false);
    setVisible(false);

    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 120);

    const rafId = requestAnimationFrame(() => {
      setReady(true);
      setVisible(true);
    });

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [normalizedPathname, shouldSkipAnimation]);

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
