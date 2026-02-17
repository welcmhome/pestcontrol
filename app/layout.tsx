import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'In & Out Florida Pest Control | South Florida Pest Experts',
  description: 'Professional pest control services in Boca Raton, Fort Lauderdale, Coral Springs and surrounding South Florida areas.',
  keywords: 'pest control, Boca Raton, Fort Lauderdale, Coral Springs, South Florida, pest removal, termite control, rodent control',
  icons: {
    icon: '/assets/LOGO%20PEST%20CONTROL.png',
    apple: '/assets/LOGO%20PEST%20CONTROL.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="overflow-x-hidden bg-white">{children}</body>
    </html>
  )
}
