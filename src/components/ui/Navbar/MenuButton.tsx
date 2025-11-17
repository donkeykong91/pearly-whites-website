interface MenuButton {
  toggleMenu: () => void;
  isMenuClicked: boolean;
}

/**
 * Handles display of menu and x icon.
 * @param toggleMenu - Function to display 'x' or menu icon.
 * @param isMenuClicked - Parent click state based on menu icon.
 * @constructor
 */
export const MenuButton = ({ toggleMenu, isMenuClicked }: MenuButton) => {
  return (
    <button
      className={`row-[1/2] cursor-pointer justify-self-center transition-transform ${isMenuClicked ? 'rotate-180' : 'rotate-360'} 2xl:hidden`}
      onClick={toggleMenu}
    >
      {isMenuClicked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-bossanova-800 size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-bossanova-800 size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
    </button>
  );
};
