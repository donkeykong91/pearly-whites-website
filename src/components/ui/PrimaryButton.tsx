'use client';

import { cn } from '@/components/ui/utils/cn';
import { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface PrimaryButtonProps {
  children: ReactNode | string;
  href?: string;
}

/**
 * The main button to give the most attention.
 * @param children Component or string displayed.
 * @param href Optional custom route path for the button.
 * @constructor
 */
const PrimaryButton = ({ children, href = '' }: PrimaryButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const routePath =
    href || `/${String(children).replace(/\s+/g, '').toLowerCase()}`;
  const isActive = pathname === routePath;

  return (
    <button
      onClick={() => {
        router.push(routePath);
      }}
      className={cn(
        'w-full cursor-pointer rounded-xl px-3 py-1.5 font-semibold tracking-wide text-nowrap transition-all duration-300 ease-out md:px-4',
        isActive
          ? 'bg-bossanova-700 text-bossanova-50 shadow-bossanova-500/45 shadow-lg'
          : 'bg-bossanova-300/85 text-bossanova-900 shadow-bossanova-300/40 hover:bg-bossanova-200 hover:shadow-bossanova-300/40 shadow-md hover:-translate-y-0.5 hover:shadow-lg',
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
