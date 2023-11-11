"use client"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import { CartContextProvider } from '@/context/cart/CartContext'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CartContextProvider>
                <Header />
                <main>{children}</main>
                <Footer />
            </CartContextProvider>
        </>
    )
}