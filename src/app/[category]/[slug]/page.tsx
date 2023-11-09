"use client"
import getProducts from "@/services/useProducts"
import { useQuery } from "@tanstack/react-query"
import React from "react"
import { GoBackBtn, NewTag, PageContainer, Picture, ProductArticle, ProductImage, ProductInfos, ProductName, ProductPrice, ProductText } from "./productPageStyle"
import { useRouter } from "next/navigation"
import ButtonFactory from "@/components/button/ButtonFactory"
import { Device } from "@/breakpoints"
import { Product } from "@/models/product"
import convertNumberToMoney from "@/helpers/NumberToMoney"

const page = ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    // const pathname = usePathname()
    const { back } = useRouter()
    const { getProductBySlug } = getProducts()

    const { data: product } = useQuery({
        queryKey: ['productBySlug', slug],
        queryFn: () => getProductBySlug(slug)
    })


    return (
        <>
            <PageContainer>
                <GoBackBtn handleClick={back}>Go back</GoBackBtn>
                {product ? <ProductArticle>
                    <Picture>
                        <source srcSet={product.image?.tablet} media={`(min-width: 501px) and (max-width: 1024px)`} />
                        <source srcSet={product.image?.mobile} media={`${Device.mobileL}`} />
                        <ProductImage src={product.image?.desktop} alt={product.name} />
                    </Picture>
                    <ProductInfos>
                        {product.new ? <NewTag> NEW PRODUCT</NewTag> : null}
                        <ProductName>{product.name}</ProductName>
                        <ProductText>
                            {product.description}
                        </ProductText>
                        <ProductPrice>{convertNumberToMoney(product.price)}</ProductPrice>
                        <ButtonFactory handleClick={() => { }} isOutline color='primary'>
                            ADD TO CART
                        </ButtonFactory>
                    </ProductInfos>
                </ProductArticle> : null}
            </PageContainer>
        </>
    )
}

export default page