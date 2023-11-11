"use client"
import { Device } from "@/breakpoints"
import styled, { css } from "styled-components"

const globalImageStyle = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
`
export const GalleryWrapper = styled.section`
    display: flex;
    gap: 1.125rem;
    margin-top: 7.5rem;
    width: 100%;
    justify-content: space-between;

    @media screen and (${Device.mobileL}) {
        flex-direction: column;
    }
`
export const BothPictures = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    justify-content: space-between;
`
export const ImageTopLeft = styled.img`
    ${globalImageStyle}
`
export const ImageBottomLeft = styled.img`
    ${globalImageStyle}

`
export const ImageRight = styled.img`
    ${globalImageStyle}
`
