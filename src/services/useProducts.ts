'use client'
import { Product } from "@/models/product"

export default function useProducts() {
    const path = "/products.json"

    const getAllProducts = async (): Promise<Product[]> => {
        const result = await fetch(path)
        if (!result.ok) {
            throw new Error("Error with fetching products!")
        }
        const data: Product[] = await result.json()

        return data
    }

    const getProductsByCategory = async (category: string): Promise<Product[]> => {
        const result = await fetch(path)
        try {
            const data: Product[] = await result.json()
            const productsInCategory = data.filter(product => product.category === category)

            return productsInCategory
        } catch {
            throw new Error("Error with fetching products!")
        }
    }

    const getProductBySlug = async (slug: string): Promise<Product> => {
        const result = await fetch(path)
        try {
            const data: Product[] = await result.json();
            const productBySlug = data.find(product => product.slug === slug);

            if (!productBySlug) {
                throw new Error(`Product with slug '${slug}' not found!`)
            }

            return productBySlug
        } catch (error) {
            throw new Error("Error with fetching products!")
        }
    }


    return { getAllProducts, getProductsByCategory, getProductBySlug }
}

