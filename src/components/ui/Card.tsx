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
  const withSubHeader = !hasSubHeader && 'border-b-2';
  const showSubHeader = hasSubHeader && (
    <div className={'border-b-bossanova-500 border-b-2'}>{subHeader}</div>
  );

  return (
    <div
      className={cn(
        'hover:bg-bossanova-50 shadow-bossanova-800 bg-bossanova-100 outline-bossanova-500 text-bossanova-900 rounded-xl shadow-lg outline-3 transition sm:col-[1/2] sm:w-80',
        classNames,
      )}
    >
      <header
        className={cn(
          `border-b-bossanova-500 ${withSubHeader} text-center text-2xl`,
          headerClassNames,
        )}
      >
        {title}
      </header>

      {showSubHeader}

      <div className={cn('pt-4 text-center', detailsClassNames)}>
        <article className="px-2">{details}</article>
      </div>

      {smallLine || null}
    </div>
  );
};

export default Card;
