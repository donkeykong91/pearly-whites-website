import { ITEMS } from '@/components/ui/Navbar/constants';
import { useMenuItems } from '@/components/ui/Navbar/useMenuItems';

interface DropdownMenu {
  isMenuClicked: boolean;
}

/**
 * Displays dropdown menu based on isMenuClicked. The hamburger menu
 * is displayed for mobile on the left side and for >= md it is on the
 * right side of the navbar.
 * @param isMenuClicked - Parent state of click based on menu.
 * @constructor
 */
export const DropdownMenu = ({ isMenuClicked }: DropdownMenu) => {
  const menuItems = useMenuItems({ items: ITEMS });

  return (
    <>
      {isMenuClicked && (
        <div
          className={`border-surface-border bg-surface col-[1/3] mt-1 w-full origin-top overflow-hidden rounded-xl border px-2 shadow-lg backdrop-blur-sm transition-all duration-300 md:hidden ${isMenuClicked ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
        >
          <ul className="items-center space-y-3 py-3">{menuItems}</ul>
        </div>
      )}
      <div
        className={`border-surface-border bg-surface top-full right-0 hidden w-fit origin-top overflow-hidden rounded-xl border px-2 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out xl:absolute xl:block ${isMenuClicked ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
      >
        <ul className="items-center space-y-3 py-3">{menuItems}</ul>
      </div>
    </>
  );
};
