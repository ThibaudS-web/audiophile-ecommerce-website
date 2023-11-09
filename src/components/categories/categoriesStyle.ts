"use client"
import { Device } from "@/breakpoints"
import Image from "next/image"
import styled from "styled-components"



export const CategoriesWrapper = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.8rem;
    margin: auto;

    @media screen and (${Device.tablet}) {
        gap: 0.6rem;    
    }

    @media screen and (${Device.mobileL}) {
        gap: 4.5rem;
        flex-direction: column;
    }
`

export const ItemList = styled.li`
    list-style: none;
    border-radius: 0.5rem;
    width: inherit;
    height: 200px;
    font-size: 1.125rem;
    font-weight: bold;
    background-color: var(--grey);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 2rem;
    gap: 1rem;
    position: relative;

    @media screen and (${Device.tablet}) {
        height: 165px;
    }
`

export const NextImage = styled(Image)`
    position: absolute;
    width: 100%;
    max-width: 200px;
    max-height: 180px;
    height: auto;
    top: -60px;  

    @media screen and (${Device.tablet}) {
        max-width: 150px;
        top: -55px;
    }
`

export const Arrow = styled.span`
    width: 7px;
    height: 7px;
    border-right: 2px solid var(--brown);
    border-top: 2px solid var(--brown);
    transform: rotate(45deg);
`