import * as RadixAccordion from '@radix-ui/react-accordion';

const Accordion = () => {
  // TODO: Pass in content
  const CERTS_CONTENT = [
    ['Cert 1', 'Content 1'],
    ['Cert 2', 'Content 2'],
    ['Cert 3', 'Content 3'],
  ];

  return (
    <RadixAccordion.Root
      type="multiple"
      className="col-[2/4] h-fit self-center"
    >
      {CERTS_CONTENT.map(([cert, content], index) => (
        <RadixAccordion.Item
          key={`key-${cert}-${index}`}
          className="rounded border border-x-3 border-t-0 border-b-3 first:border-t-3"
          value={`${cert}-${index}`}
        >
          <RadixAccordion.Header className="w-full">
            <RadixAccordion.Trigger className="flex w-full justify-center">
              {cert}
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content className="self-center justify-self-center">
            {content}
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
};

export default Accordion;
