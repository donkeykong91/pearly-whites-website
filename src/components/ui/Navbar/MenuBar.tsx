import { useMenuItems } from '@/components/ui/Navbar/useMenuItems';
import { ITEMS } from '@/components/ui/Navbar/constants';

interface MenuBarProps {
  revealedCount?: number;
  startIndex?: number;
}

/**
 * Displays the various buttons to navigate to different pages.
 * @constructor
 */
export const MenuBar = ({
  revealedCount = Number.MAX_SAFE_INTEGER,
  startIndex = 0,
}: MenuBarProps) => {
  const menuItems = useMenuItems({ items: ITEMS, revealedCount, startIndex });

  return <ul className="hidden items-center gap-3 2xl:flex">{menuItems}</ul>;
};
