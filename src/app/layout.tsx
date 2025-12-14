import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

interface RootLayout {
  children: ReactNode;
}

/**
 * The main layout for the website.
 * @param children Takes all pages.
 * @constructor
 */
const RootLayout = ({ children }: RootLayout) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 flex-col px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
