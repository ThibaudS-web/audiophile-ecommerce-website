'use client'
import styled from "styled-components";
import Link from 'next/link'
import { Device } from '@/breakpoints'

export const HeaderWrapper = styled.header`
    width: 100%;
    background-color: var(--black-header);
`

export const Container = styled.div`
    width: 85%;
    height: 90px;
    max-width: var(--bloc-desktop);
    border-bottom: 2px solid #363636;
    background-color: var(--black-header);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    @media screen and (${Device.tablet}) {
        max-width: var(--bloc-tablet)
    }
`

export const Nav = styled.nav`
    display: flex;
    gap: 2.25rem;

    @media screen and (${Device.tablet}) {
        display: none;
    }
`

export const StyledLink = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s;
    display: flex;
    align-items: center;

    &:hover, &.active {
        color: var(--brown);
    }
`

export const MenuAndLogoWrapper = styled.div`
    display: flex;
    gap: 2.5rem;
    align-items: center;

    @media screen and (${Device.mobileL}) {
        display: contents;
    }
`

