import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import Layout from '@/components/Layout'
import QueryProvider from './QueryProvider'

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'Fictitious audiophile e-commerce website built with Next.js and Styled-Components.',
  authors: { name: "Thibaud Saumureau", url: "https://portfolio-thibauds.vercel.app/" }
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
            <QueryProvider>
              <Layout>
                {children}
              </Layout>
            </QueryProvider>
          </body>
        </StyledComponentsRegistry>
      </html>
    </>
  )
}
