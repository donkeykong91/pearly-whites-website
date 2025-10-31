import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'Pearly Whites',
  description: 'BRUSH YO GODDAM TEEF!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="h-dvh">
        <div className="grid h-screen grid-cols-1 px-2 py-2 sm:grid-cols-3 md:grid-cols-12 md:px-50 md:py-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
