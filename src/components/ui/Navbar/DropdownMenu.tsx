import PrimaryButton from '@/components/ui/PrimaryButton';
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
          className={`col-[1/3] overflow-hidden px-2 md:hidden ${isMenuClicked ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
        >
          <ul className="items-center space-y-4 py-4">{menuItems}</ul>
        </div>
      )}
      <div
        className={`border-bossanova-300 bg-bossanova-200 outline-bossanova-600 top-full right-0 hidden w-fit origin-top overflow-hidden rounded-md border-t px-2 outline-3 transition-all duration-300 ease-in-out md:absolute md:block ${isMenuClicked ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
      >
        <ul className="items-center space-y-4 py-4">{menuItems}</ul>
      </div>
    </>
  );
};
