import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import Layout from '@/components/Layout'
import Head from 'next/head'

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Audiophile - ecommerce',
  description: 'Fictitious audiophile e-commerce website built with Next.js and Styled-Components.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <StyledComponentsRegistry>
          <body className={manrope.className}>
            <Layout>
              {children}
            </Layout>
          </body>
        </StyledComponentsRegistry>
      </html>
    </>

  )
}
