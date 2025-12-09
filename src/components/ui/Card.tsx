import { cn } from '@/components/ui/utils/cn';

interface Card {
  title: string;
  details: string;
  classNames?: string;
}

/**
 * Displays the Header and Body of the Card.
 * @param title The title of the Card.
 * @param details The detail of the Card.
 * @param classNames The optional styles passed-in from parent component.
 * @constructor
 */
const Card = ({ title, details, classNames = '' }: Card) => {
  return (
    <div
      className={cn(
        'hover:bg-bossanova-50 shadow-bossanova-800 bg-bossanova-100 outline-bossanova-500 text-bossanova-900 rounded-xl shadow-lg outline-3 transition sm:col-[1/2] sm:w-80',
        classNames,
      )}
    >
      <header className="border-b-bossanova-500 border-b-2 text-center text-2xl">
        {title}
      </header>
      <div className="pt-4 md:text-center">
        <article className="px-2">{details}</article>
      </div>
    </div>
  );
};

export default Card;
