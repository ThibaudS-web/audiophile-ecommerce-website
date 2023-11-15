export interface ProductCart {
    imagePath: string
    productName: string
    productPrice: number
    quantity: number
}

interface CartContext {
    itemsList: ProductCart[]
    differentItemsInCart: number
    totalPrice: number
    isModalOpen: boolean
    removeCart: () => void
    removeItem: (item: ProductCart) => void
    addItem: (item: ProductCart, quantity: number, isCartContext?: boolean) => void
    getTotalProductsNumberInCart: () => number
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    setDifferentItemsInCart: React.Dispatch<React.SetStateAction<number>>
    setItemsList: React.Dispatch<React.SetStateAction<ProductCart[]>>
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>
    handleModalDisplay: () => void
    checkout: () => void
}

export default CartContext