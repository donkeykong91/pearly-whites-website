'use client';

import Navbar from './Navbar/Navbar';
import { cn } from '@/components/ui/utils/cn';

interface HeaderProps {
  className?: string;
  isSpreadStarted?: boolean;
  showContent?: boolean;
  revealedCount?: number;
}

/**
 * Holds the navbar.
 */
const Header = ({
  className = '',
  isSpreadStarted = true,
  showContent = true,
  revealedCount = Number.MAX_SAFE_INTEGER,
}: HeaderProps) => {
  return (
    <header className={cn('sticky top-0 z-40 pt-3 sm:pt-4', className)}>
      <div
        className={cn(
          'w-full rounded-2xl border shadow-lg transition-colors duration-[1800ms] ease-out',
          isSpreadStarted
            ? 'border-surface-border bg-surface shadow-bossanova-700/15 backdrop-blur-md'
            : 'border-bossanova-300 bg-bossanova-200 shadow-bossanova-400/30',
          showContent ? '' : 'backdrop-blur-none',
        )}
      >
        {showContent ? (
          <Navbar revealedCount={revealedCount} />
        ) : (
          <div className="h-[56px]" />
        )}
      </div>
    </header>
  );
};

export default Header;
