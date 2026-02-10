import './globals.scss';
import { ReactNode } from 'react';
import type { Viewport } from 'next';
import SiteShell from '../components/ui/SiteShell';

interface RootLayout {
  children: ReactNode;
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

/**
 * The main layout for the website.
 * @param children Takes all pages.
 * @constructor
 */
const RootLayout = ({ children }: RootLayout) => {
  return (
    <html lang="en">
      <body className="text-bossanova-900 relative min-h-screen antialiased">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="bg-bossanova-200/40 absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />
          <div className="bg-bossanova-300/25 absolute top-1/3 -left-24 h-72 w-72 rounded-full blur-3xl" />
          <div className="bg-bossanova-400/20 absolute right-0 bottom-0 h-80 w-80 translate-x-1/3 rounded-full blur-3xl" />
        </div>

        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
};

export default RootLayout;
