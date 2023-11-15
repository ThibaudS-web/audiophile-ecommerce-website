'use client'
import styled from "styled-components";
import Link from 'next/link'
import { Device } from '@/breakpoints'

export const HeaderWrapper = styled.header`
    width: 100%;
    background-color: var(--black-header);
    position: sticky;
    z-index: 5;
`

export const Container = styled.div`
    width: 85%;
    height: 5.625rem;
    max-width: var(--bloc-desktop);
    border-bottom: 2px solid #363636;
    background-color: var(--black-header);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    @media screen and (${Device.tablet}) {
        width: 90%;
        max-width: var(--bloc-tablet)
    }
`

export const LogoLink = styled(Link)`
    display: inherit;
`

export const MenuAndLogoWrapper = styled.div`
    display: flex;
    gap: 2.5rem;
    align-items: center;

    @media screen and (${Device.mobileL}) {
        display: contents;
    }
`
export const TotalItemsInCart = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--brown);
    color: white;
    position: absolute;
    top: -12px;
    left: 15px;
    z-index:1;
    font-size: 0.7rem;
    cursor: pointer;
`