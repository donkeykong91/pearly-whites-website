import Card from '@/components/ui/Card';

/**
 * Details regarding the dental hygienist.
 * @constructor
 */
const AboutPage = () => {
  const DETAILS = `I’m a dental hygienist with 10 years of experience helping patients feel comfortable, confident, and genuinely cared for. I take pride in providing thorough, gentle cleanings while educating families on simple habits that protect their long-term oral health. Over the years, I’ve built strong relationships with patients of all ages by creating a calm, friendly environment where they can relax. I stay up to date with the latest hygiene techniques and technology to make every visit efficient and stress-free. My goal is always the same: deliver exceptional care that keeps every smile healthy and bright.`;
  const TITLE = '👋The Hygienist is in!!👩‍⚕️';

  return (
    <div className="col-[1/5] flex w-full justify-center self-center px-1 sm:px-0">
      <Card title={TITLE} details={DETAILS} classNames="w-full max-w-md" />
    </div>
  );
};

export default AboutPage;
