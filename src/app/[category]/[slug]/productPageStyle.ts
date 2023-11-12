"use client"
import { Device } from "@/breakpoints"
import ButtonMinimal from "@/components/button/button-minimal/ButtonMinimal"
import styled from "styled-components"

export const PageContainer = styled.div`
    width: 85%;
    margin: auto;
    max-width: var(--bloc-desktop);
    
    @media screen and (${Device.tablet}) {
        width: 90%;
        max-width: var(--bloc-tablet);
    }
`
export const GoBackBtn = styled(ButtonMinimal)`
    font-size: 0.9375rem;
    margin: 5rem 0 3.75rem 0;

    @media screen and (${Device.tablet}) {
        margin: 2.5rem 0 1.5rem 0;
    }
    @media screen and (${Device.mobileL}) {
        margin-top: 1.568rem;
    }
`
export const ProductArticle = styled.article`
    display: flex;
    justify-content: space-between;
  
    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 2rem;
    }  

`
export const Picture = styled.picture`
    width: 100%;
    min-width: 150px;
    align-self: center;
`
export const ProductImage = styled.img`
    height: auto;
    max-width: 100%;
    width: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
    display: block;
`
export const ProductInfos = styled.div`
    width: 82%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 7.8125rem;

    @media screen and (${Device.laptop}) {
        margin-left: 4.375rem;
        width: 100%;
        align-items: flex-start;

        & > * {
            text-align: left;
        }
    }
    @media screen and (max-width: 600px) {
        margin-left: 0;
    }

`
export const NewTag = styled.span`
    font-size: 0.875rem;
    color: var(--brown);
    letter-spacing: 0.625rem;
    line-height: 1.2rem;
    margin-bottom: 1rem;
`
export const ProductText = styled.p`
    color: rgba( 0, 0, 0, 0.5);
    margin-bottom: 2.5rem;
`
export const ProductName = styled.h2`
    margin-bottom: 2.5rem;
    width: 80%;
`
export const ProductPrice = styled.span`
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
`
export const WrapperCartCTA = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
    
`
export const WrapperFeaturesAndBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 10rem;

    @media screen and (${Device.tablet}) {
        flex-direction: column;
        gap: 7.5rem;
    }
`

export const FeaturesWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (${Device.tablet}) {
        width: 100%;
    }

    @media screen and (${Device.mobileL}) {
        gap: 1.5rem;
    }

    & > p {
        color: rgba( 0, 0, 0, 0.5);
        white-space: pre-line;
    }
`
export const BoxWrapper = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (${Device.tablet}) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        max-width: 85%;
        min-width: 410px;
    }

    @media screen and (${Device.mobileL}) {
        flex-direction: column;
        gap: 1.5rem;
        min-width: unset;
    }
`
export const IncludeItems = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;   
`
export const BoxItemList = styled.li`
    list-style: none;
    color: rgba( 0, 0, 0, 0.5);

    & > span {
        color: var(--brown);
        font-weight: bold;
        margin-right: 1.5rem;
    }
`

export const TitleOthersProducts = styled.h3`
    margin-top: 10rem;
    text-align: center;
`


