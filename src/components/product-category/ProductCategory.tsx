import {
    NewTag,
    Picture,
    ProductArticle,
    ProductImage,
    ProductInfos,
    ProductName,
    ProductText
} from './productCategoryStyle'
import { Device } from '@/breakpoints'
import { Product } from '@/models/product'
import ButtonFactory from '../button/ButtonFactory'
import {
    usePathname,
    useRouter
} from 'next/navigation'

const ProductCategory = ({ product, $isReverseLayout }: { product: Product, $isReverseLayout: boolean }) => {
    const { name, description, categoryImage, slug } = product
    const pathname = usePathname()
    const { push } = useRouter()

    const goToTheProductPage = (dataSlug: string) => {
        push(`${pathname}/${dataSlug}`)
    }

    return (
        <ProductArticle $isReverseLayout={$isReverseLayout}>
            <Picture>
                <source srcSet={categoryImage?.tablet} media={`(min-width: 501px) and (max-width: 1024px)`} />
                <source srcSet={categoryImage?.mobile} media={`${Device.mobileL}`} />
                <ProductImage src={categoryImage?.desktop} alt={name} />
            </Picture>
            <ProductInfos $isReverseLayout={$isReverseLayout}>
                {product.new ? <NewTag> NEW PRODUCT</NewTag> : null}
                <ProductName>{product.name}</ProductName>
                <ProductText>
                    {description}
                </ProductText>
                <ButtonFactory handleClick={() => goToTheProductPage(slug)} isOutline color='primary'>
                    SEE PRODUCT
                </ButtonFactory>
            </ProductInfos>
        </ProductArticle>
    )
}

export default ProductCategory