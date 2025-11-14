/**
 * Displays the menu button to go back to homepage.
 * @constructor
 */
export const HomeButton = () => {
  const HOME = 'Evey Hygiene';

  return (
    <button className="bg-bossanova-300 text-bossanova-800 group-hover:bg-bossanova-50 col-[2/3] w-full rounded-md px-3 py-1 font-bold text-nowrap outline-3 transition duration-300 md:w-fit md:hover:bg-purple-300">
      {HOME}
    </button>
  );
};
