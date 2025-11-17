import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface PrimaryButton {
  children: ReactNode | string;
}

/**
 * The main button to give the most attention.
 * @param children Component or string displayed.
 * @constructor
 */
const PrimaryButton = ({ children }: PrimaryButton) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(`/${(children as string).replace(' ', '').toLowerCase()}`);
      }}
      className="action:scale-95 group-hover:bg-bossanova-50 outline-bossanova-600 text-bossanova-900 md:hover:outline-bossanova-100 md:hover:text-bossanova-50 md:hover:shadow-bossanova-800 w-full cursor-pointer rounded-lg bg-purple-300 py-1 font-bold text-nowrap shadow-lg shadow-purple-300 outline-3 transition-all duration-300 ease-out hover:bg-purple-400 active:opacity-80 md:px-4 md:hover:drop-shadow-2xl"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
