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
    <nav className="group hover:shadow-bossanova-800 bg-bossanova-200 md:hover:bg-bossanova-100 outlin-bossanova-600 outline-bossanova-600 relative grid grid-cols-[1fr_10fr] justify-between rounded-lg px-2 pt-2 pb-2 shadow-lg outline-3 transition sm:flex sm:flex-row-reverse md:flex-row md:py-3">
      <button className="bg-bossanova-300 text-bossanova-800 group-hover:bg-bossanova-50 col-[2/3] w-full rounded-md px-3 py-1 font-bold text-nowrap outline-3 transition duration-300 sm:ml-2 md:w-fit md:hover:bg-purple-300">
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
        className={`row-[1/2] justify-self-center transition-transform ${isMenuClicked ? 'rotate-180' : 'rotate-360'} 2xl:hidden`}
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
      {isMenuClicked && (
        <div
          className={`col-[1/3] overflow-hidden px-2 md:hidden ${isMenuClicked ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
        >
          <ul className="items-center space-y-4 py-4">
            {ITEMS.map((item, index) => (
              <li key={`${index}-${item}`}>
                <PrimaryButton>{item}</PrimaryButton>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className={`border-bossanova-300 bg-bossanova-200 outline-bossanova-600 top-full right-0 hidden w-fit origin-top overflow-hidden rounded-md border-t px-2 outline-3 transition-all duration-300 ease-in-out md:absolute md:block ${isMenuClicked ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
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
