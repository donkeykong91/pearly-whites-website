import FooterBar from './FooterBar';
import { cn } from '@/components/ui/utils/cn';

interface FooterProps {
  className?: string;
  isSpreadStarted?: boolean;
  showContent?: boolean;
}

/**
 * Holds the details of the FooterBar.
 */
const Footer = ({
  className = '',
  isSpreadStarted = true,
  showContent = true,
}: FooterProps) => {
  return (
    <div className={cn('flex w-full justify-center pb-4 sm:pb-5', className)}>
      <div
        className={cn(
          'w-full rounded-xl border shadow-lg transition-colors duration-[1800ms] ease-out',
          isSpreadStarted
            ? 'border-surface-border bg-surface shadow-bossanova-700/15'
            : 'border-bossanova-300 bg-bossanova-200 shadow-bossanova-400/30',
        )}
      >
        <div
          className={cn(
            'transition-opacity duration-700 ease-out',
            showContent ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <FooterBar />
        </div>
      </div>
    </div>
  );
};

export default Footer;
