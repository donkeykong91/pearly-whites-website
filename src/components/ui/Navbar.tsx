'use client';

import PrimaryButton from './PrimaryButton';
import { useState } from 'react';

/**
 * Holds the menu items with responsiveness.
 * @constructor
 */
const Navbar = () => {
  const ITEMS = [
    'About',
    'Services',
    'Certifications',
    'Contact',
    'Clinical Skills',
    'Education',
  ];
  const HOME = 'Evey Hygiene';

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const toggleMenu = () => setIsMenuClicked((prev) => !prev);

  return (
    <nav className="group hover:shadow-bossanova-800 bg-bossanova-200 md:hover:bg-bossanova-100 outline-bossanova-600 relative flex flex-row-reverse justify-between rounded-lg px-2 pt-2 pb-2 shadow-lg outline-3 transition md:flex-row md:py-3">
      <button className="bg-bossanova-300 text-bossanova-800 group-hover:bg-bossanova-50 ml-3 w-full rounded-md px-3 py-1 font-bold text-nowrap outline-3 transition duration-300 md:w-fit md:hover:bg-purple-300">
        {HOME}
      </button>
      <ul className="hidden gap-8 2xl:flex">
        {ITEMS.map((item, index) => (
          <li key={`${index}-${item}`}>
            <PrimaryButton>{item}</PrimaryButton>
          </li>
        ))}
      </ul>
      <button
        className={`transition-transform ${isMenuClicked ? 'rotate-180' : 'rotate-360'} 2xl:hidden`}
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
      <div
        className={`border-bossanova-300 bg-bossanova-200 outline-bossanova-600 absolute top-full right-0 w-fit origin-top overflow-hidden rounded-md border-t px-2 outline-3 transition-all duration-300 ease-in-out ${isMenuClicked ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
      >
        <ul className="items-center space-y-4 py-4">
          {ITEMS.map((item, index) => (
            <li key={`${index}-${item}`}>
              <PrimaryButton>{item}</PrimaryButton>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
