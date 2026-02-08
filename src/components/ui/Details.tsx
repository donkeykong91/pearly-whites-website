import Card from './Card';

interface DetailsProps {
  className?: string;
}

/**
 * Holds the details of the main page.
 * @constructor
 */
const Details = ({ className = '' }: DetailsProps) => {
  const TITLE = 'Dental Hygiene';
  const DETAILS = `Dental hygiene is the science — and daily practice — of keeping your mouth healthy so your smile lasts a lifetime. It goes far beyond “clean teeth,” focusing on preventing gum disease, protecting overall health, and catching problems long before they become painful or expensive. It’s a partnership between you and your hygienist to keep your teeth, gums, and confidence in peak shape. Think of it as preventive care that gives you a brighter smile and a healthier you.`;

  return <Card title={TITLE} details={DETAILS} classNames={className} />;
};

export default Details;
