
import TopAppBar from '@/shared/ui/topAppBar/TopAppBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { BlockchainProvider } from '@/store/context/BlockchainContext';
import { UsersProvider } from '@/store/context/UsersContext';
import { useState } from 'react';
import SupplyChain from './supplyChain/components/SupplyChain';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MedoBlock',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inter.className} bg-primary-dark max-w-7xl m-auto pt-10`}>
        <BlockchainProvider>
          <UsersProvider>
            <TopAppBar/>
            {children}
          </UsersProvider>
        </BlockchainProvider>
      </body>
    </html>
  )
}
