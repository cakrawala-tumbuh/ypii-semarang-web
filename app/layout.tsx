import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'SMA Kebon Dalem - Cerdas, Otentik, Iman, Solider',
  description: 'SMA Kebon Dalem - Explore Yourself, Know Your Potential, Unlock The Next Level. Pendaftaran PPDB 2025/2026 sudah dibuka.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
