import { useRouter } from 'next/navigation';
/**
 * Displays the menu button to go back to homepage.
 * @constructor
 */
export const HomeButton = () => {
  const HOME = 'Evey Hygiene';

  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push('/');
      }}
      className="bg-bossanova-300 text-bossanova-800 group-hover:bg-bossanova-50 col-[2/3] w-full cursor-pointer rounded-md px-3 py-1 font-bold text-nowrap outline-3 transition duration-300 md:w-fit md:hover:bg-purple-300"
    >
      {HOME}
    </button>
  );
};
