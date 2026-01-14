import Card from '@/components/ui/Card';

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

const BusinessCardTitle = () => {
  const header = 'Evey, RDH';

  return (
    <>
      <h2 className="text-bossanova-800 font-semibold">{header}</h2>
    </>
  );
};

const BusinessCardSubHeader = () => {
  const subHeader = 'Dental Hygienist';
  return <p className="text-bossanova-800 tracking-wide">{subHeader}</p>;
};

const SmallLine = () => {
  return <div className="bg-bossanova-300 mt-6 h-1 w-12 rounded-full"></div>;
};

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
      ></Card>
    </div>
  );
};

export default BusinessCard;
