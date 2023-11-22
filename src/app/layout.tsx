import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ToasterProvider } from '@/providers/toaster-provider'
import { ModalProvider } from '@/providers/modal-provider'
import { CrispProvider } from '@/providers/crisp-provider'

import './globals.css'

const inte = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dropware',
  description: 'Drop ideas',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <CrispProvider />
        <body className={inte.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
