'use client';

import './Accordion.scss';
import { ComponentPropsWithRef, forwardRef, useEffect, useRef } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { cn } from '@/components/ui/utils/cn';

// TODO: Pass in content
/**
 * Temporary static content until certifications are fetched or passed by props.
 */
const CERTS_CONTENT = [
  ['Cert 1', 'Content 1'],
  ['Cert 2', 'Content 2'],
  ['Cert 3', 'Content 3'],
];

interface AccordionProps {
  className?: string;
  autoFocusFirstItem?: boolean;
}

/**
 * Certifications accordion wrapper built on top of Radix Accordion primitives.
 */
const Accordion = ({
  className = '',
  autoFocusFirstItem = false,
}: AccordionProps) => {
  const firstTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!autoFocusFirstItem) return;

    const timeoutId = setTimeout(() => {
      firstTriggerRef.current?.focus();
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [autoFocusFirstItem]);

  return (
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
          <AccordionTrigger ref={index === 0 ? firstTriggerRef : undefined}>
            {cert}
          </AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
};

type AccordionTriggerProps = ComponentPropsWithRef<
  typeof RadixAccordion.Trigger
>;

/**
 * Shared trigger element with caret icon animation.
 */
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

/**
 * Shared collapsible content wrapper for accordion items.
 */
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
