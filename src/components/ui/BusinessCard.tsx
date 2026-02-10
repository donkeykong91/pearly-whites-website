import Card from '@/components/ui/Card';

/**
 * Clickable contact detail rendered in the business card body.
 */
const BusinessCardDetails = () => {
  const details = '✉ evey.occ@gmail.com';

  return (
    <a
      className="text-bossanova-600 hover:text-bossanova-800 inline-block text-sm break-all sm:text-base"
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
      <h2 className="text-bossanova-800 text-lg font-semibold sm:text-xl">
        {header}
      </h2>
    </>
  );
};

/**
 * Secondary heading rendered directly below the card title.
 */
const BusinessCardSubHeader = () => {
  const subHeader = 'Dental Hygienist';
  return (
    <p className="text-bossanova-800 text-sm tracking-wide">{subHeader}</p>
  );
};

/**
 * Decorative line shown at the bottom of the business card.
 */
const SmallLine = () => {
  return <div className="bg-bossanova-300 mt-5 h-1 w-12 rounded-full"></div>;
};

/**
 * Contact card composition for the `/contact` page.
 */
const BusinessCard = () => {
  return (
    <div className="col-[1/5] flex w-full justify-center self-center px-1 sm:px-0">
      <Card
        title={<BusinessCardTitle />}
        details={<BusinessCardDetails />}
        subHeader={<BusinessCardSubHeader />}
        smallLine={<SmallLine />}
        classNames="w-full max-w-md"
        headerClassNames="text-left"
        detailsClassNames="text-left"
      />
    </div>
  );
};

export default BusinessCard;
