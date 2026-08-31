import { Inter } from 'next/font/google'

import './globals.css'

import { QueryProvider } from '@/app/providers'

import Header from '@/widgets/header/ui/Header'

import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Brain Arena',
  description: 'Online platform with brain-training mini-games and competitive challenges.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <QueryProvider>
          <Header />
          <main className="relative overflow-hidden pt-32 pb-12 lg:px-16">{children}</main>
        </QueryProvider>
      </body>
    </html>
  )
}
