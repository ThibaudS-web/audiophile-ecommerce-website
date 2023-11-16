import { createContext, useEffect, useState } from "react"
import ICartContext, { ProductCart } from "./ICartContext"
import { useRouter } from "next/navigation"
import addToUniqueList from "@/helpers/addToUniqueList"
import useLocalStorage from "@/hooks/useLocalStorage"

const initial: ICartContext = {
    itemsList: [],
    differentItemsInCart: 0,
    totalPrice: 0,
    isModalOpen: false,

    removeCart: () => { },
    removeItem: () => { },
    addItem: () => { },
    getTotalProductsNumberInCart: () => 0,
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
    const { setLocalItem, getLocalItem } = useLocalStorage()

    const itemsInLocal: ProductCart[] = getLocalItem('cart') ?? initial.itemsList

    const [itemsList, setItemsList] = useState(itemsInLocal)
    const [differentItemsInCart, setDifferentItemsInCart] = useState(0)
    const [totalPrice, setTotalPrice] = useState(initial.totalPrice)
    const [isModalOpen, setIsModalOpen] = useState(initial.isModalOpen)

    const checkout = () => {
        handleModalDisplay()
        push("/checkout")
    }

    const handleModalDisplay = () => {
        setIsModalOpen(prevValue => !prevValue)
    }

    const getTotalProductsNumberInCart = () => {
        return itemsList.reduce((acc, item) => acc + item.quantity, 0)
    }

    const removeCart = () => {
        setItemsList(initial.itemsList)
        setTotalPrice(initial.totalPrice)
        setLocalItem('cart', initial.itemsList)
    }

    const calculateTotalPrice = () => {
        setTotalPrice(itemsInLocal.reduce(
            (accumulator, currentValue) => accumulator + currentValue.productPrice * currentValue.quantity,
            0,
        ))
    }

    const removeItem = (item: ProductCart) => {
        setItemsList((itemsList) => {
            const filteredItemsList = itemsList.filter(itemList => itemList !== item)
            setLocalItem('cart', filteredItemsList)
            return filteredItemsList
        })
    }

    const addItem = (item: ProductCart, quantity: number, isCartContext?: boolean) => {
        setItemsList((itemsList) => {
            const updatedList = addToUniqueList(itemsList, { ...item, quantity: quantity }, isCartContext)
            setLocalItem('cart', updatedList)
            return updatedList
        })
    }

    useEffect(() => {
        calculateTotalPrice()
    }, [itemsList])

    const value = {
        itemsList,
        differentItemsInCart,
        totalPrice,
        isModalOpen,
        getTotalProductsNumberInCart,
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