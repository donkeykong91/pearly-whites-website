import { useMenuItems } from '@/components/ui/Navbar/useMenuItems';
import { ITEMS } from '@/components/ui/Navbar/constants';

/**
 * Displays the various buttons to navigate to different pages.
 * @constructor
 */
export const MenuBar = () => {
  const menuItems = useMenuItems({ items: ITEMS });

  return <ul className="hidden gap-8 2xl:flex">{menuItems}</ul>;
};
