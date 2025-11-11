import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'C-SERP - Ghana Security Services Recruitment Portal',
  description: 'Apply to Ghana Police, Fire Service, Immigration, Prisons, NADMO, and Narcotics Control Commission online. Fast, secure, and simple application process.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}