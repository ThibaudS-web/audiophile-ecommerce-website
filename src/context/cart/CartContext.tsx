import { createContext, useState } from "react";
import ICartContext, { ProductCart } from "./ICartContext";
import { useRouter } from "next/navigation"
import addToUniqueList from "@/helpers/addToUniqueList";

const initial: ICartContext = {
    itemsList: [],
    differentItemsInCart: 0,
    totalPrice: 0,
    isModalOpen: false,

    removeCart: () => { },
    removeItem: () => { },
    addItem: () => { },
    setIsModalOpen: () => { },
    setDifferentItemsInCart: () => { },
    setItemsList: () => { },
    setTotalPrice: () => { },
    handleModalDisplay: () => { },
    checkout: () => { }
}

export const CartContext = createContext(initial)

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { push } = useRouter()

    const [itemsList, setItemsList] = useState(initial.itemsList)
    const [differentItemsInCart, setDifferentItemsInCart] = useState(0)
    const [totalPrice, setTotalPrice] = useState(initial.totalPrice)
    const [isModalOpen, setIsModalOpen] = useState(initial.isModalOpen)

    const checkout = () => {
        push("/checkout")
    }

    const handleModalDisplay = () => {
        setIsModalOpen(prevValue => !prevValue)
    }

    const removeCart = () => {
        setItemsList([])
        setTotalPrice(initial.totalPrice)
    }

    const removeItem = (item: ProductCart) => {
        setItemsList((itemsList) => {
            return itemsList.filter(itemList => itemList !== item)
        })
    }

    const addItem = (item: ProductCart, quantity: number, isCartContext?: boolean) => {
        setItemsList((itemsList) => {
            return addToUniqueList(itemsList, { ...item, quantity: quantity }, isCartContext)
        })
    }

    const value = {
        itemsList,
        differentItemsInCart,
        totalPrice,
        isModalOpen,
        removeCart,
        removeItem,
        addItem,
        handleModalDisplay,
        setIsModalOpen,
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