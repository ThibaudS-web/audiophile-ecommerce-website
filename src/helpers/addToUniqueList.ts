import { ProductCart } from "@/context/cart/ICartContext"

/**
 * Adds a unique item to the ProductCart array, updating quantity if the item already exists.
 * 
 * @param array - Array of ProductCart objects
 * @param newItem - New ProductCart item to add or update
 * @param isCartContext - Optional flag related to the shopping cart context
 * @returns New array with updated or uniquely added items
 */

export default function addToUniqueList(array: ProductCart[], newItem: ProductCart, isCartContext?: boolean): ProductCart[] {
    const existingItem = array.find(item => item.productName === newItem.productName)

    if (existingItem) {
        const newItemQuantity = isCartContext ? newItem.quantity : existingItem.quantity + newItem.quantity
        const updatedItem = { ...existingItem, quantity: newItemQuantity }
        return array.map(item => (item.productName === existingItem.productName ? updatedItem : item))
    }

    const uniqueItems = new Set([...array, newItem])
    return Array.from(uniqueItems)
}