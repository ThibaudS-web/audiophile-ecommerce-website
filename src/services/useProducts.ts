import { Product } from "@/models/product"

export default function useProducts() {
    const path = "/products.json"

    const getAllProducts = async (): Promise<Product[]> => {
        const result = await fetch(path)

        if (!result.ok) {
            throw new Error("Error with fetching products!")
        }

        return await result.json()
    }

    const getCategories = async (): Promise<string[]> => {
        const result = await getAllProducts()
        const setCategories = new Set(result.map((product) => product.category))

        return Array.from(setCategories)
    }

    const getProductsByCategory = async (category: string): Promise<Product[]> => {
        const result = await getAllProducts()
        return result.filter((product) => product.category === category)
    }

    const getProductBySlug = async (slug: string): Promise<Product> => {
        const result = await getAllProducts()

        const productBySlug = result.find((product) => product.slug === slug)

        if (productBySlug === undefined) {
            throw new Error(`Product with slug '${slug}' not found!`)
        }

        return productBySlug
    }

    return { getAllProducts, getProductsByCategory, getProductBySlug, getCategories }
}




