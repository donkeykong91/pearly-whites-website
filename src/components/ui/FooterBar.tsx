'use client';

import { useEffect, useState } from 'react';

/**
 * Displays a simple copyright and owner name.
 */
const FooterBar = () => {
  const [currentYear, setCurrentYear] = useState<string>('');

  useEffect(() => {
    setCurrentYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="text-bossanova-900 flex w-full items-center justify-center px-3 py-3 text-center text-sm font-medium tracking-wide">
      {'\u00A9'} {currentYear || '----'} Evelyn Contreras. All rights reserved.
    </footer>
  );
};

export default FooterBar;
