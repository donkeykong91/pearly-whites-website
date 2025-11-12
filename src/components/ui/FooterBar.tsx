/**
 * Displays a simple copyright and owner name.
 * @constructor
 */
const FooterBar = () => {
  const ALL_RIGHTS_RESERVED = '© 2025 Evelyn Contreras. All rights reserved.';

  return (
    <div className="bg-bossanova-200 outline-bossanova-600 flex justify-center rounded-md outline-3 md:px-2 md:py-3">
      {ALL_RIGHTS_RESERVED}
    </div>
  );
};

export default FooterBar;
