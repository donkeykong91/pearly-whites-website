import Accordion from '@/components/ui/Accordion/Accordion';

/**
 * Details regarding certifications.
 * @constructor
 */
const CertificationsPage = () => {
  // Move accordion to middle
  return (
    <Accordion
      className="col-[2/3] self-center sm:translate-x-1/2"
      autoFocusFirstItem
    />
  );
};

export default CertificationsPage;
