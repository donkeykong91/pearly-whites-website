import './globals.css';
import {ReactNode} from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export const metadata = {
  title: 'Pearly Whites',
  description: 'BRUSH YO GODDAM TEEF!',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-dvh'>
          <div className="grid sm:grid-cols-1 md:grid-cols-12 h-screen md:px-4 md:py-4">
              <Header />
              {children}
              <Footer />
          </div>
      </body>
    </html>
  )
}
