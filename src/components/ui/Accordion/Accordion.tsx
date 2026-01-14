import './Accordion.scss';
import { forwardRef, ComponentPropsWithRef } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { cn } from '@/components/ui/utils/cn';

// TODO: Pass in content
const CERTS_CONTENT = [
  ['Cert 1', 'Content 1'],
  ['Cert 2', 'Content 2'],
  ['Cert 3', 'Content 3'],
];

interface Accordion {
  className?: string;
}
const Accordion = ({ className = '' }: Accordion) => (
  <RadixAccordion.Root
    className={cn('AccordionRoot AccordionStyleReset', className)}
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {CERTS_CONTENT.map(([cert, content], index) => (
      <RadixAccordion.Item
        key={`${cert}-${index}`}
        className="AccordionItem"
        value={`cert-${index}`}
      >
        <AccordionTrigger>{cert}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </RadixAccordion.Item>
    ))}
  </RadixAccordion.Root>
);

type AccordionTriggerProps = ComponentPropsWithRef<
  typeof RadixAccordion.Trigger
>;
const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className: classNames = '', ...props }, forwardedRef) => (
    <RadixAccordion.Header className="AccordionHeader">
      <RadixAccordion.Trigger
        className={cn('AccordionTrigger', classNames)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  ),
);
AccordionTrigger.displayName = 'AccordionTrigger';

type AccordionContentType = ComponentPropsWithRef<
  typeof RadixAccordion.Content
>;
const AccordionContent = forwardRef<HTMLDivElement, AccordionContentType>(
  ({ children, className: classNames = '', ...props }, forwardedRef) => (
    <RadixAccordion.Content
      className={cn('AccordionContent', classNames)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </RadixAccordion.Content>
  ),
);
AccordionContent.displayName = 'AccordionContent';

export default Accordion;
