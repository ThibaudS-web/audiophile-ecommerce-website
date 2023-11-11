type ProductCart = {
    imagePath: string
    productName: string
    productPrice: string
    quantity: number
}

interface CartContext {
    itemsList: ProductCart[]
    differentItemsInCart: number
    totalPrice: string

    setDifferentItemsInCart: React.Dispatch<React.SetStateAction<number>>
    setItemsList: React.Dispatch<React.SetStateAction<ProductCart[]>>
    setTotalPrice: React.Dispatch<React.SetStateAction<string>>
    checkout: () => void
}

export default CartContext