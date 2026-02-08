import { ReactNode } from 'react';

interface ContactLayout {
  children: ReactNode;
}

/**
 * Layout shell for the contact route.
 */
const ContactLayout = ({ children }: ContactLayout) => {
  return (
    <section className="flex flex-1 flex-col">
      <div className="mx-auto grid w-full max-w-7xl flex-1 sm:grid-cols-4">
        {children}
      </div>
    </section>
  );
};

export default ContactLayout;
