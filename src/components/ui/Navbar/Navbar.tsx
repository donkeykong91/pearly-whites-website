'use client';

import { useState } from 'react';
import { MenuButton } from '@/components/ui/Navbar/MenuButton';
import { DropdownMenu } from '@/components/ui/Navbar/DropdownMenu';
import { MenuBar } from '@/components/ui/Navbar/MenuBar';
import { HomeButton } from '@/components/ui/Navbar/HomeButton';

/**
 * Holds the menu items with responsiveness.
 * @constructor
 */
const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const toggleMenu = () => setIsMenuClicked((prev) => !prev);

  return (
    <nav className="group hover:shadow-bossanova-800 bg-bossanova-200 md:hover:bg-bossanova-100 outlin-bossanova-600 outline-bossanova-600 relative grid grid-cols-[1fr_10fr] justify-between gap-2 rounded-lg px-2 pt-2 pb-2 shadow-lg outline-3 transition md:flex md:py-3">
      <HomeButton />
      <MenuBar />
      <MenuButton toggleMenu={toggleMenu} isMenuClicked={isMenuClicked} />
      <DropdownMenu isMenuClicked={isMenuClicked} />
    </nav>
  );
};

export default Navbar;
