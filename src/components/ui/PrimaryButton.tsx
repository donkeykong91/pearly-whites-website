import { ReactNode } from 'react';

interface PrimaryButton {
  children: ReactNode | string;
}

/**
 * The main button to give the most attention.
 * @param children Component or string displayed.
 * @constructor
 */
const PrimaryButton = ({ children }: PrimaryButton) => {
  return (
    <button className="group-hover:bg-bossanova-50 outline-bossanova-600 text-bossanova-900 md:hover:outline-bossanova-100 md:hover:text-bossanova-50 md:hover:shadow-bossanova-800 w-full rounded-lg bg-purple-300 py-1 font-bold text-nowrap shadow-lg shadow-purple-300 outline-3 transition duration-300 hover:bg-purple-400 md:px-4 md:hover:drop-shadow-2xl">
      {children}
    </button>
  );
};

export default PrimaryButton;
