"use client"
import { Product } from '@/models/product'
import React from 'react'
import { OtherProduct, OtherProductsWrapper, PictureOtherProduct, Img } from './otherProductsStyle'
import ButtonOutline from '../button/button-outline/ButtonOutline'
import { useRouter } from 'next/navigation'

const OtherProducts = ({ product, othersURL }: { product: Product, othersURL: string[] | undefined }) => {
    const { others } = product

    const { push } = useRouter()

    const goToTheProductPage = (slug: string) => {
        const url = othersURL?.find(product => product.includes(`${slug}`))
        if (url) {
            push(url)
        } else {
            throw new Error("URL not found!")
        }
    }

    return (
        <OtherProductsWrapper>
            {others?.map((product) => {
                return <OtherProduct key={product.name}>
                    <PictureOtherProduct>
                        <source srcSet={product.image?.tablet} media={`(min-width: 700px) and (max-width: 1024px)`} />
                        <source srcSet={product.image?.mobile} media={`(max-width: 700px)`} />
                        <Img src={product.image?.desktop} alt={product.name} />
                    </PictureOtherProduct>
                    <h5>{product.name}</h5>
                    <ButtonOutline handleClick={() => goToTheProductPage(product.slug)} color='primary'>SEE PRODUCT</ButtonOutline>
                </OtherProduct>
            })}
        </OtherProductsWrapper >
    )
}

export default OtherProducts