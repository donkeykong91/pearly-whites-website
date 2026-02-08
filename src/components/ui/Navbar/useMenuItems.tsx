import PrimaryButton from '@/components/ui/PrimaryButton';
import { useMemo } from 'react';
import { cn } from '@/components/ui/utils/cn';

interface UseMenuItems {
  items: string[];
  revealedCount?: number;
  startIndex?: number;
}

/**
 * Gives menu items as list item components.
 * @constructor
 */
export const useMenuItems = ({
  items,
  revealedCount = Number.MAX_SAFE_INTEGER,
  startIndex = 0,
}: UseMenuItems) =>
  useMemo(
    () =>
      items.map((item, index) => (
        <li
          key={item}
          className={cn(
            'transition-all duration-500 ease-out will-change-transform',
            revealedCount >= startIndex + index
              ? 'translate-y-0 opacity-100'
              : '-translate-y-8 opacity-0',
          )}
        >
          <PrimaryButton>{item}</PrimaryButton>
        </li>
      )),
    [items, revealedCount, startIndex],
  );
