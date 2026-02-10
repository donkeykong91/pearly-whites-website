import { ReactNode } from 'react';

interface IntroLayout {
  children: ReactNode;
}

/**
 * Layout shell for the intro page route group.
 */
const IntroLayout = ({ children }: IntroLayout) => {
  return (
    <section className="flex flex-1 flex-col">
      <div className="mx-auto grid w-full max-w-7xl flex-1 px-1 sm:grid-cols-4 sm:px-0">
        {children}
      </div>
    </section>
  );
};

export default IntroLayout;
