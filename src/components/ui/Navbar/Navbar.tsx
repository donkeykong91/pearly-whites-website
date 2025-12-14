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
    <nav className="group hover:shadow-bossanova-800 bg-bossanova-200 md:hover:bg-bossanova-100 outline-bossanova-600 relative grid w-full max-w-7xl grid-cols-[1fr_10fr] gap-2 px-2 py-2 shadow-lg outline-3 transition sm:justify-between sm:rounded-lg md:flex">
      <HomeButton />
      <MenuBar />
      <MenuButton toggleMenu={toggleMenu} isMenuClicked={isMenuClicked} />
      <DropdownMenu isMenuClicked={isMenuClicked} />
    </nav>
  );
};

export default Navbar;
