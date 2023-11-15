"use client"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import { CartContextProvider } from '@/context/cart/CartContext'
import dynamic from 'next/dynamic'

const DynamicModalWithNoSSR = dynamic(
    () => import('@/components/modals/cart/ModalCart'),
    { ssr: false }
)

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <CartContextProvider>
                <DynamicModalWithNoSSR />
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </CartContextProvider>
        </>
    )
}