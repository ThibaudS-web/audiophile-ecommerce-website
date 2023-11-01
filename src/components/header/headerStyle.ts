'use client'
import styled from "styled-components";
import Link from 'next/link'

export const HeaderWrapper = styled.header`
    width: 100%;
    background-color: var(--black-header);
`

export const Container = styled.div`
    width: 100%;
    max-width: 1100px;
    border-bottom: 2px solid #363636;
    background-color: var(--black-header);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`

export const Nav = styled.nav`
    display: flex;
    padding: 2rem 0;
    gap: 2.25rem;
`

export const StyledLink = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s;

    &:hover, &.active {
        color: var(--brown);
    }
`

