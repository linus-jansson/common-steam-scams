import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css'

export const metadata: Metadata = {
  title: 'Common Steam Scams',
  description: 'Get savvy about Common Steam scams! Learn to spot them, protect yourself, and level up your safety in the gaming world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
