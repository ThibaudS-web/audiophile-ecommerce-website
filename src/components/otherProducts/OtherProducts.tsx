"use client"
import { Product } from '@/models/product'
import React from 'react'
import { OtherProduct, OtherProductsWrapper, PictureOtherProduct, Img } from './otherProductsStyle'
import ButtonOutline from '../button/button-outline/ButtonOutline'
import { useRouter } from 'next/navigation'
import { Device } from '@/breakpoints'

const OtherProducts = ({ product }: { product: Product }) => {
    const { others, slug, category } = product

    const { push } = useRouter()


    return (
        <OtherProductsWrapper>
            {others?.map((product) => {
                // const goToTheProductPage = () => {
                //     push(`/${category}/${product.slug}`)
                // }
                return <OtherProduct key={product.name}>
                    <PictureOtherProduct>
                        <source srcSet={product.image?.tablet} media={`(min-width: 700px) and (max-width: 1024px)`} />
                        <source srcSet={product.image?.mobile} media={`(max-width: 700px)`} />
                        <Img src={product.image?.desktop} alt={product.name} />
                    </PictureOtherProduct>
                    <h5>{product.name}</h5>
                    <ButtonOutline handleClick={() => {}} color='primary'>SEE PRODUCT</ButtonOutline>
                </OtherProduct>
            })}
        </OtherProductsWrapper>
    )
}

export default OtherProducts