import React from 'react'
import {
    GalleryWrapper,
    BothPictures,
    ImageBottomLeft,
    ImageRight,
    ImageTopLeft
} from './galleryStyle'
import { Product } from '@/models/product'
import { Device } from '@/breakpoints'

const Gallery = ({ product }: { product: Product }) => {

    const { gallery, name } = product

    return (
        <GalleryWrapper>
            <BothPictures>
                <picture>
                    <source srcSet={gallery?.first.tablet} media={`(min-width: 500px) and (max-width: 1024px)`} />
                    <source srcSet={gallery?.first.mobile} media={`(${Device.mobileL})`} />
                    <ImageTopLeft src={gallery?.first.desktop} alt={name} />
                </picture>
                <picture>
                    <source srcSet={gallery?.second.tablet} media={`(min-width: 500px) and (max-width: 1024px)`} />
                    <source srcSet={gallery?.second.mobile} media={`(${Device.mobileL})`} />
                    <ImageBottomLeft src={gallery?.second.desktop} alt={name} />
                </picture>
            </BothPictures>
            <picture>
                <source srcSet={gallery?.third.tablet} media={`(min-width: 500px) and (max-width: 1024px)`} />
                <source srcSet={gallery?.third.mobile} media={`(${Device.mobileL})`} />
                <ImageRight src={gallery?.third.desktop} alt={name} />
            </picture>
        </GalleryWrapper>
    )
}

export default Gallery