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
        const result = await getAllProducts()
        const data: Product[] = result

        const productsInCategory = data.filter(product => product.category === category)

        return productsInCategory
    }


    const getProductBySlug = async (slug: string): Promise<Product> => {
        const result = await getAllProducts()
        const data: Product[] = result
        
        const productBySlug = data.find(product => product.slug === slug)

        if (!productBySlug) {
            throw new Error(`Product with slug '${slug}' not found!`)
        }

        return productBySlug
    }

    return { getAllProducts, getProductsByCategory, getProductBySlug }
}




