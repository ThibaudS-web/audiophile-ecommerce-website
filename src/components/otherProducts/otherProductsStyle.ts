"use client"
import { Device } from "@/breakpoints"
import styled from "styled-components"

export const OtherProductsWrapper = styled.section`
    display: flex;
    gap: 1.875rem;
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 10rem;

    @media screen and (${Device.tablet}) {
        margin-top: 3.5rem;
        margin-bottom: 7.5rem;
    }

    @media screen and (max-width: 700px) {
        flex-direction: column;
        margin-top: 2.5rem;
        gap: 3.5rem;
    }
`

export const OtherProduct = styled.article`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`

export const PictureOtherProduct = styled.picture`
    width: 100%;
    max-width: 350px;
    
    @media screen and (max-width: 700px) {
        max-width: unset;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`