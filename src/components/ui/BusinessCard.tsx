import Card from '@/components/ui/Card';

/**
 * Clickable contact detail rendered in the business card body.
 */
const BusinessCardDetails = () => {
  const details = '✉ evey.occ@gmail.com';

  return (
    <a
      className="text-bossanova-600 hover:text-bossanova-800"
      href="mailto:evey.occ@gmail.com"
    >
      {details}
    </a>
  );
};

/**
 * Primary heading rendered in the business card.
 */
const BusinessCardTitle = () => {
  const header = 'Evey, RDH';

  return (
    <>
      <h2 className="text-bossanova-800 font-semibold">{header}</h2>
    </>
  );
};

/**
 * Secondary heading rendered directly below the card title.
 */
const BusinessCardSubHeader = () => {
  const subHeader = 'Dental Hygienist';
  return <p className="text-bossanova-800 tracking-wide">{subHeader}</p>;
};

/**
 * Decorative line shown at the bottom of the business card.
 */
const SmallLine = () => {
  return <div className="bg-bossanova-300 mt-6 h-1 w-12 rounded-full"></div>;
};

/**
 * Contact card composition for the `/contact` page.
 */
const BusinessCard = () => {
  return (
    <div className="self-center">
      <Card
        title={<BusinessCardTitle />}
        details={<BusinessCardDetails />}
        subHeader={<BusinessCardSubHeader />}
        smallLine={<SmallLine />}
        classNames="p-2 sm:translate-x-3/2"
        headerClassNames="text-left"
        detailsClassNames="text-left"
      />
    </div>
  );
};

export default BusinessCard;
