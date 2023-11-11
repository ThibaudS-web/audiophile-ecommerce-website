import { createContext, useState } from "react";
import ICartContext from "./ICartContext";
import { useRouter } from "next/navigation"

const initial: ICartContext = {
    itemsList: Array.from(new Set()),
    differentItemsInCart: 0,
    totalPrice: "0",

    setDifferentItemsInCart: () => { },
    setItemsList: () => { },
    setTotalPrice: () => { },
    checkout: () => { }
}

export const CartContext = createContext(initial)

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { push } = useRouter()

    const [itemsList, setItemsList] = useState(initial.itemsList)
    const [differentItemsInCart, setDifferentItemsInCart] = useState(0)
    const [totalPrice, setTotalPrice] = useState(initial.totalPrice)
  
    const checkout = () => {
        push("/checkout")
    }

    const value = {
        itemsList,
        differentItemsInCart,
        totalPrice,
        setItemsList,
        setTotalPrice,
        setDifferentItemsInCart,
        checkout
    }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>

}

export { CartContextProvider }