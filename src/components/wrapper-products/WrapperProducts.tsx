import { Wrapper } from './wrapperProductStyle'
import { Product } from '@/models/product'
import ProductCategory from '../product-category/ProductCategory'
import getSortedProductByNewTagAndAlpha from '@/helpers/sortByNewTag'

const Products = ({ products }: { products: Product[] | undefined }) => {
    const SortedProducts = getSortedProductByNewTagAndAlpha(products)

    return (
        <Wrapper>
            {SortedProducts ? SortedProducts.map((product, index) => {
                const calculateReverseLayout = index % 2 === 1

                return <ProductCategory
                    key={product.id}
                    $isReverseLayout={calculateReverseLayout}
                    product={product}
                />
            }) : null}
        </Wrapper>
    )
}

export default Products