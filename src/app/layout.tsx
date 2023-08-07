import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Twitch Bot Banner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>{children}</body>
      {/* <body className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}>{children}</body> */}
    </html>
  )
}
