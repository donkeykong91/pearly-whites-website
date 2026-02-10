import { cn } from '@/components/ui/utils/cn';
import { ReactElement } from 'react';

interface Card {
  title: string | ReactElement;
  details: string | ReactElement;
  classNames?: string;
  headerClassNames?: string;
  detailsClassNames?: string;
  subHeader?: string | ReactElement;
  smallLine?: ReactElement | null;
}

/**
 * Displays the Header and Body of the Card.
 * @param title The title of the Card.
 * @param details The detail of the Card.
 * @param classNames The optional styles passed-in from parent component.
 * @param headerClassNames The optional styles passed-in from parent component for header.
 * @param detailsClassNames The optional styles passed-in from parent component for details.
 * @param subHeader Smaller header under the header.
 * @param smallLine Small stylistic line at the bottom of the card.
 * @constructor
 */
const Card = ({
  title,
  details,
  classNames = '',
  headerClassNames = '',
  detailsClassNames = '',
  subHeader = '',
  smallLine = null,
}: Card) => {
  const hasSubHeader = !!subHeader;
  const withSubHeader =
    !hasSubHeader &&
    'after:bg-bossanova-500 border-b-2 after:block after:h-1 after:w-0 after:transition-all hover:after:w-16';
  // TODO: Maybe turn this into component
  const showSubHeader = hasSubHeader && (
    <div
      className={
        'border-b-bossanova-500 after:bg-bossanova-500 border-b-2 text-sm uppercase after:block after:h-1 after:w-0 after:transition-all group-hover:after:w-full'
      }
    >
      {subHeader}
    </div>
  );

  return (
    <div
      className={cn(
        'group hover:bg-bossanova-50 shadow-bossanova-800 outline-bossanova-500 text-bossanova-900 w-full max-w-[22rem] rounded-2xl px-4 py-3 shadow-lg outline-3 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:shadow-2xl sm:max-w-sm',
        classNames,
      )}
    >
      <header
        className={cn(
          `border-b-bossanova-500 ${withSubHeader} text-center text-xl leading-tight font-semibold sm:text-2xl`,
          headerClassNames,
        )}
      >
        {title}
      </header>

      {showSubHeader}

      <div className={cn('pt-3 text-center sm:pt-4', detailsClassNames)}>
        <article className="px-1 text-sm leading-relaxed sm:px-2 sm:text-base">
          {details}
        </article>
      </div>

      {smallLine || null}
    </div>
  );
};

export default Card;
