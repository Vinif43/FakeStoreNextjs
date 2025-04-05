import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Roboto, Roboto_Mono } from 'next/font/google'
import './globals.css'
import ReactQueryProvider from '@/components/providers/ReactQueryProvider'
import ToasterProvider from '@/components/providers/ToasterProvider'
import Header from '@/components/Header/Header'
import { CartProvider } from '@/context/CartContext'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Produtos',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased bg-primary`}
      >
        <ReactQueryProvider>
          <CartProvider>
            <Header />
            {children}
            <ToasterProvider />
          </CartProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
