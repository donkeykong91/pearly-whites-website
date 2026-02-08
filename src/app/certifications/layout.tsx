import { ReactNode } from 'react';

interface CertificationLayout {
  children: ReactNode;
}

/**
 * Layout shell for the certifications route.
 */
const CertificationLayout = ({ children }: CertificationLayout) => {
  return (
    <section className="flex flex-1 flex-col">
      <div className="mx-auto grid w-full max-w-7xl flex-1 sm:grid-cols-4">
        {children}
      </div>
    </section>
  );
};

export default CertificationLayout;
