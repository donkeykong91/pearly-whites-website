'use client';

import { useState } from 'react';
import { MenuButton } from '@/components/ui/Navbar/MenuButton';
import { DropdownMenu } from '@/components/ui/Navbar/DropdownMenu';
import { MenuBar } from '@/components/ui/Navbar/MenuBar';
import { HomeButton } from '@/components/ui/Navbar/HomeButton';
import { cn } from '@/components/ui/utils/cn';

interface NavbarProps {
  revealedCount?: number;
}

/**
 * Holds the menu items with responsiveness.
 * @constructor
 */
const Navbar = ({ revealedCount = Number.MAX_SAFE_INTEGER }: NavbarProps) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const toggleMenu = () => setIsMenuClicked((prev) => !prev);
  const baseClass =
    'transition-all duration-500 ease-out will-change-transform';
  const getRevealClass = (index: number) =>
    cn(
      baseClass,
      revealedCount >= index
        ? 'translate-y-0 opacity-100'
        : '-translate-y-8 opacity-0',
    );

  return (
    <nav className="group relative grid w-full grid-cols-[1fr_auto] items-center gap-2 px-2 py-2.5 transition sm:px-3 sm:py-3 md:flex md:justify-between">
      <div className={getRevealClass(1)}>
        <HomeButton />
      </div>

      <div className={getRevealClass(2)}>
        <MenuButton toggleMenu={toggleMenu} isMenuClicked={isMenuClicked} />
      </div>

      <div className={getRevealClass(3)}>
        <MenuBar revealedCount={revealedCount} startIndex={3} />
      </div>

      <DropdownMenu isMenuClicked={isMenuClicked} />
    </nav>
  );
};

export default Navbar;
