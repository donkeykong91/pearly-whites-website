/**
 * Displays a simple copyright and owner name.
 * @constructor
 */
const FooterBar = () => {
  const ALL_RIGHTS_RESERVED = '© 2025 Evelyn Contreras. All rights reserved.';

  return (
    <footer className="bg-bossanova-200 outline-bossanova-600 flex w-full max-w-7xl justify-center outline-3 sm:rounded-md md:px-2 md:py-3">
      {ALL_RIGHTS_RESERVED}
    </footer>
  );
};

export default FooterBar;
