import { Product } from "@/models/product";


export default function getSortedProductByNewTagAndAlpha(products: Product[]) {
    const copyProducts = [...products]

    const sortedByNewTag = copyProducts.sort((a, b) => (a.new === b.new) ? 0 : a.new ? -1 : 1)

    return sortedByNewTag.sort((a, b) => a.name < b.name ? 1 : -1)
}
