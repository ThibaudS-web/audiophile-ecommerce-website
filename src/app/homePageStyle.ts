"use client"
import { Device } from "@/breakpoints"
import styled from "styled-components"
import Image from "next/image"
import HeadphoneDesktop from "/public/assets/home/desktop/image-hero.jpg"
import HeadphoneTablet from "/public/assets/home/tablet/image-header.jpg"
import HeadphoneMobile from "/public/assets/home/mobile/image-header.jpg"
import Circle from "/public/assets/home/desktop/pattern-circles.svg"
import SpeakerDesktop from "/public/assets/home/desktop/image-speaker-zx9.png"
import SpeakerLaptop from "/public/assets/home/tablet/image-speaker-zx9.png"
import SpeakerSecondaryDesktop from "/public/assets/home/desktop/image-speaker-zx7.jpg"
import SpeakerSecondaryTablet from "/public/assets/home/tablet/image-speaker-zx7.jpg"
import SpeakerSecondaryMobile from "/public/assets/home/mobile/image-speaker-zx7.jpg"
import EarphoneDesktop from "/public/assets/home/desktop/image-earphones-yx1.jpg"

export const NewProductWrapper = styled.section`
    width: 100%;
    background-color: var(--black-header);
    margin-bottom: 13.75rem;

    @media screen and (${Device.tablet}) {
         margin-bottom: 9.375rem;
    }

    @media screen and (${Device.mobileL}) {
         margin-bottom: 6.25rem;
    }
`

export const NewProductSectionWrapper = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    overflow: hidden;
`
export const OverviewProductsSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 8.75rem  auto 12.5rem auto;
    gap: 3rem;

    @media screen and (${Device.tablet}) {
        margin: 7.5rem  auto 10.625rem auto;
    }

    @media screen and (${Device.mobileL}) {
        margin: 5.625rem  auto 7.5rem auto;
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

export const Overline = styled.span`
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
        background: 50% center / 100% no-repeat url(${HeadphoneDesktop.src});
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

export const PrimaryProduct = styled.article`
    width: 100%;
    height: 560px;
    background-color: var(--brown);
    border-radius: 0.5rem;
    position: relative;
    display: flex;
    align-items: center;

    @media screen and (${Device.laptop}) {
        flex-direction: column;
        height: 720px;
    }

    @media screen and (${Device.mobileL}) {
        flex-direction: column;
        height: 600px;
    }

    &::after {
        content:'';
        position: absolute;
        background: -10rem -2rem no-repeat url(${Circle.src});
        width: 100%;
        height: 100%;

        @media screen and (${Device.laptop}) {
            width: 100%;
            background: no-repeat url(${Circle.src});
            background-position-x: 50%;
            background-position-y: 137%; 
        }

        @media screen and (${Device.tablet}) {
            background-size: 55rem;
            background-position-y: 168%; 
        }

        @media screen and (${Device.mobileL}) {
            background-size: 32rem;
            background-position-y: -120%;
        }
    }
`

export const PrimaryImageContainer = styled.div`
    width: 100%;
    height: 100%; 
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    z-index: 10;
    background: 75% 110% no-repeat url(${SpeakerDesktop.src});
    background-size: 24rem; 

    @media screen and (${Device.laptop}) {
        background: center / 30% no-repeat url(${SpeakerLaptop.src});
    }

    @media screen and (${Device.mobileL}) {
        background: center 3.5rem / 9rem no-repeat url(${SpeakerLaptop.src});
    }
`


export const DescriptionPrimaryProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
    z-index: 3;
    width: 85%;
    height: 100%;
    justify-content: center;
    padding: 0 6rem;

    & > p {
        color: rgba(255, 255, 255, 0.75);
    }

    @media screen and (${Device.laptop}) {
        width: 60%;
        padding: 2rem;
        text-align: center;
        align-items: center;
        justify-content: flex-start;
    }

    @media screen and (${Device.mobileL}) {
        width: 100%;
        padding: 2rem 0.5rem;

        & > h1 {
            width: min-content;
            line-height: 2.5rem;
            font-size: 2.25rem;
        }
    }
    
`

export const SpeakerProduct = styled.article`
    width: 100%;
    border-radius: 0.5rem;
    background: center / cover no-repeat url(${SpeakerSecondaryDesktop.src});
    display: flex;

    @media screen and (${Device.tablet}) {
        background: center / cover no-repeat url(${SpeakerSecondaryTablet.src});
    }

    @media screen and (${Device.mobileL}) {
        background: center / cover no-repeat url(${SpeakerSecondaryMobile.src});
    }
`

export const DescriptionSpeakerProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 6rem;

    @media screen and (${Device.tablet}) {
        padding: 6rem 3.75rem;
    }

    @media screen and (${Device.mobileL}) {
        padding: 6rem 1.5rem;
    }
`

export const EarphoneProductWrapper = styled.article`
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: space-between;
    gap: 1.875rem;
    
    @media screen and (${Device.laptop}) {
       gap: 0.625rem;
    }
    
    @media screen and (${Device.tabletMin}) {
        flex-direction: column;
        height: auto;
        gap: 1.5rem;  
    }
`

export const EarphoneImage = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background: center / cover no-repeat url(${EarphoneDesktop.src});

    @media screen and (${Device.tabletMin}) {
        height: 200px;
    }

    @media screen and (${Device.mobileL}) {
        padding:0 1.5rem;
    }
`

export const DescriptionEarphoneProduct = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    background-color: var(--grey);
    border-radius: 0.5rem;

    & > * {
        margin-left: 6rem;

        @media screen and (${Device.laptop}) {
            margin-left: 2.5rem;
        }
    }

    @media screen and (${Device.tabletMin}) {
        height: 200px;
    }
`

