"use client"
import getProducts from "@/services/useProducts"
import { useQuery } from "@tanstack/react-query"
import React, { useState } from "react"
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
import ButtonFactory from "@/components/button/ButtonFactory"
import { Device } from "@/breakpoints"
import convertNumberToMoney from "@/helpers/NumberToMoney"
import ButtonCart from "@/components/button/button-cart/ButtonCart"
import Gallery from "@/components/gallery-image-product/Gallery"
import OtherProducts from "@/components/otherProducts/OtherProducts"
import Wrapper from "@/components/containers/bottom-categories-audio-summary/Wrapper"
import Categories from "@/components/categories/Categories"
import AudiophileSummary from "@/components/audiophile-summary/AudiophileSummary"
import Head from "next/head"

const Page = ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    const { back } = useRouter()
    const [isDisabled, setIsDisabled] = useState(true)
    const { getProductBySlug, getAllProducts } = getProducts()

    const pathname = usePathname()
    const categoryPath = pathname.split('/')[1]

    const { data: product, failureCount } = useQuery({
        queryKey: ['productBySlug', slug],
        queryFn: () => getProductBySlug(slug)
    })

    const { data: AllProducts } = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts
    })

    const getDataOthers = product?.others?.map(other => AllProducts?.find(product => product.slug === other.slug))

    const getURLOfothersProducts = getDataOthers?.map(other => {
        return `/${other?.category}/${other?.slug}`
    })

    if (failureCount > 0 || product && product?.category !== categoryPath) {
        notFound()
    }

    return (
        <>
            <Head>
                <title>Audiophile - {product?.name}</title>
            </Head>
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
                                    <ButtonCart handleIsDisabledStateButton={setIsDisabled} />
                                    <ButtonFactory
                                        disabled={isDisabled}
                                        handleClick={() => { }}
                                        isOutline color='primary'>
                                        ADD TO CART
                                    </ButtonFactory>
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