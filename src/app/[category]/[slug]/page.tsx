"use client"
import getProducts from "@/services/useProducts"
import { useQuery } from "@tanstack/react-query"
import React, { useContext, useEffect, useState } from "react"
import {
    BoxItemList,
    BoxWrapper,
    FeaturesWrapper,
    GoBackBtn,
    IncludeItems,
    NewTag,
    PageContainer,
    Picture,
    ProductArticle,
    ProductImage,
    ProductInfos,
    ProductName,
    ProductPrice,
    ProductText,
    TitleOthersProducts,
    WrapperCartCTA,
    WrapperFeaturesAndBox
} from "./productPageStyle"
import { notFound, usePathname, useRouter } from "next/navigation"
import { Device } from "@/breakpoints"
import convertNumberToMoney from "@/helpers/NumberToMoney"
import ButtonQuantity from "@/components/button/button-quantity/ButtonQuantity"
import Gallery from "@/components/gallery-image-product/Gallery"
import OtherProducts from "@/components/otherProducts/OtherProducts"
import Wrapper from "@/components/containers/bottom-categories-audio-summary/Wrapper"
import Categories from "@/components/categories/Categories"
import AudiophileSummary from "@/components/audiophile-summary/AudiophileSummary"
import ButtonOutline from "@/components/button/button-outline/ButtonOutline"
import { CartContext } from "@/context/cart/CartContext"
import { Product } from "@/models/product"
import { ProductCart } from "@/context/cart/ICartContext"
import { useToast } from "@chakra-ui/react"

const Page = ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    const { back } = useRouter()
    const { getProductBySlug, getAllProducts } = getProducts()
    const { setTotalPrice, itemsList, addItem } = useContext(CartContext)
    const [itemQuantity, setItemQuantity] = useState(1)
    const toast = useToast()
    const pathname = usePathname()
    const categoryPath = pathname.split('/')[1]
  
    const { data: product, failureCount } = useQuery({
        queryKey: ['productBySlug', slug],
        queryFn: () => getProductBySlug(slug)
    })

    const { data: allProducts } = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts
    })

    const getDataOthers = product?.others?.map(
        (other) => allProducts?.find(product => product.slug === other.slug)
    )

    const getURLOfothersProducts = getDataOthers?.map(other => {
        return `/${other?.category}/${other?.slug}`
    })

    if (failureCount > 0 || product && product?.category !== categoryPath) {
        notFound()
    }

    const handleAddToCart = (product: Product, quantity: number) => {
        const newItem: ProductCart = {
            productName: product.shortName,
            imagePath: product.cartImage,
            productPrice: product.price,
            quantity: quantity
        }

        addItem(newItem, quantity)

        toast({
            description: `'${product.name}' Added to the cart! 😀`,
            status: 'success',
            duration: 3000,
            position: 'top-left',
            isClosable: true,
        })
    }

    return (
        <>
            <PageContainer>
                <GoBackBtn handleClick={back}>Go back</GoBackBtn>
                {product ?
                    <>
                        <ProductArticle>
                            <Picture>
                                <source srcSet={product.image?.tablet} media={`(min-width: 601px) and (max-width: 1024px)`} />
                                <source srcSet={product.image?.mobile} media={`${Device.mobileL}`} />
                                <ProductImage src={product.image?.desktop} alt={product.name} />
                            </Picture>
                            <ProductInfos>
                                {
                                    product.new ?
                                        <NewTag> NEW PRODUCT</NewTag>
                                        :
                                        null
                                }
                                <ProductName>{product.name}</ProductName>
                                <ProductText>
                                    {product.description}
                                </ProductText>
                                <ProductPrice>{convertNumberToMoney(product.price)}</ProductPrice>
                                <WrapperCartCTA>
                                    <ButtonQuantity
                                        quantity={itemQuantity}
                                        setQuantity={setItemQuantity}
                                    />
                                    <ButtonOutline
                                        handleClick={() => handleAddToCart(product, itemQuantity)}
                                        color='primary'>
                                        ADD TO CART
                                    </ButtonOutline>
                                </WrapperCartCTA>
                            </ProductInfos>
                        </ProductArticle>

                        <WrapperFeaturesAndBox>
                            <FeaturesWrapper>
                                <h4>FEATURES</h4>
                                <p>{product.features}</p>
                            </FeaturesWrapper>
                            <BoxWrapper>
                                <h4>IN THE BOX</h4>
                                <IncludeItems>
                                    {
                                        product.includes?.map((item) => {
                                            return <BoxItemList key={item.item}>
                                                <span>
                                                    {item.quantity}X
                                                </span>
                                                {item.item}
                                            </BoxItemList>
                                        })
                                    }
                                </IncludeItems>
                            </BoxWrapper>
                        </WrapperFeaturesAndBox>

                        <Gallery product={product} />
                        <TitleOthersProducts>
                            you may also like
                        </TitleOthersProducts>
                        <OtherProducts othersURL={getURLOfothersProducts} product={product} />
                        <Wrapper>
                            <Categories />
                            <AudiophileSummary />
                        </Wrapper>
                    </>
                    : null
                }
            </PageContainer>
        </>
    )
}

export default Page

