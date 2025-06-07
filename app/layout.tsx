import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ILYAS FARKHANE',
  description: 'Ilyas Farkhane Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="p-4 md:p-6 lg:p-8  bg-gradient-to-br from-black via-gray-950 to-gray-900">{children}</body>
    </html>
  )
}
