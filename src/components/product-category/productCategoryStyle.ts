"use client"
import { Device } from "@/breakpoints"
import styled from "styled-components"

export const ProductArticle = styled.article<{ $isReverseLayout?: boolean }>`
    display: flex;
    flex-direction: ${(props) => props.$isReverseLayout ? "row-reverse" : "row"};
    justify-content: space-between;
    gap: 7.8125rem;

    @media screen and (${Device.laptop}) {
        flex-direction: column;
        gap: 3.125rem;
        justify-content: center;
    }
`
export const Picture = styled.picture`
    width: 100%;
`
export const ProductImage = styled.img`
    height: auto;
    max-width: 100%;
    width: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
    display: block;
`
export const ProductInfos = styled.div<{ $isReverseLayout?: boolean }>`
    width: 82%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (${Device.laptop}) {
        width: 100%;
        align-items: center;

        & > * {
            text-align: center;
        }
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