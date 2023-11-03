"use client"
import { Device } from "@/breakpoints"
import styled from "styled-components"
import Image from "next/image"
import HeadphoneDesktop from "/public/assets/home/desktop/image-hero.jpg"
import HeadphoneTablet from "/public/assets/home/tablet/image-header.jpg"
import HeadphoneMobile from "/public/assets/home/mobile/image-header.jpg"

export const NewProductWrapper = styled.div`
    width: 100%;
    background-color: var(--black-header);
    margin-bottom: 2rem;
`

export const SectionWrapper = styled.div`
    display: flex;
    width: 85%;
    margin: 0 auto 10rem auto;
    max-width: var(--bloc-desktop);
    align-items: center;
    overflow: hidden;
   
    @media screen and (${Device.tablet}) {
        width: 90%;
        max-width: var(--bloc-tablet);
    }
`

export const NextImage = styled(Image)`
    width: 115%;
    height: auto;
    transform: scale(1.1) translate(-60px, -47px);
`
export const DescriptionNewProduct = styled.div`
    color: white;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    width: min-content;

    @media screen and (${Device.tablet}) {
        align-items: center;
    }

    @media screen and (${Device.mobileL}) {
            width: 100%;
    }
`

export const Overline = styled.p`
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.625rem;
    line-height: 1.2rem;
`

export const TitleNewProduct = styled.h1`
    @media screen and (${Device.mobileL}) {
        font-size: 1.75rem;
        line-height: 2rem;
        width: min-content;
    }
`
export const ProductOverview = styled.p`
    width: 90%;
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.75);

    @media screen and (${Device.tablet}) {
        text-align: center;
    }
`

export const Banniere = styled.div`
    width: 100%;
    height: 630px;
    display: flex; 
    align-items: center;
    position: relative;
    background-color: var(--black-header);
    z-index: 0;

    @media screen and (${Device.tablet}) {
        justify-content: center;
    }

    @media screen and (${Device.tablet}) {
        height: calc(22vw + 330px);
    }

    &::after {
        content:'';
        background: 50% center / 130% no-repeat url(${HeadphoneDesktop.src});
        width: 100%;
        height: 105%;
        position: absolute;
        top: -4rem;
        z-index: -1;

        @media screen and (${Device.tablet}) {
            background: center / cover no-repeat url(${HeadphoneTablet.src});
        }

        @media screen and (${Device.mobileL}) {
            background: center / contain no-repeat url(${HeadphoneMobile.src});
        }
    }
    
`