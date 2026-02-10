import { cn } from '@/components/ui/utils/cn';
import { usePathname, useRouter } from 'next/navigation';
/**
 * Displays the menu button to go back to homepage.
 * @constructor
 */
export const HomeButton = () => {
  const HOME = 'Evey Hygiene';

  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className="flex">
      <button
        onClick={() => {
          router.push('/');
        }}
        className={cn(
          'col-[2/3] w-full cursor-pointer rounded-xl px-3 py-2 text-sm font-bold whitespace-nowrap transition duration-300 md:w-fit',
          isHome
            ? 'bg-bossanova-700 text-bossanova-50 shadow-bossanova-500/50 shadow-md'
            : 'bg-bossanova-300 text-bossanova-800 hover:bg-bossanova-200',
        )}
        aria-current={isHome ? 'page' : undefined}
      >
        {HOME}
      </button>
    </div>
  );
};
