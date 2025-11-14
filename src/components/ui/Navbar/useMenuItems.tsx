import PrimaryButton from '@/components/ui/PrimaryButton';
import { useMemo } from 'react';

interface UseMenuItems {
  items: string[];
}

/**
 * Gives menu items as list item components.
 * @constructor
 */
export const useMenuItems = ({ items }: UseMenuItems) =>
  useMemo(
    () =>
      items.map((item, index) => (
        <li key={`${index}-${item}`}>
          <PrimaryButton>{item}</PrimaryButton>
        </li>
      )),
    [items],
  );
