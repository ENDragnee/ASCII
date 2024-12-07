import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aascii Technologies',
  description: 'Building Smart, Simple, and Affordable Tech Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-[#383c4a] p-4">
          <div className="container mx-auto">
            <img src="/logo.svg" alt="Aascii Technologies Logo" className="h-8" />
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}

