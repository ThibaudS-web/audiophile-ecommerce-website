"use client"
import { Device } from "@/breakpoints"
import Link from "next/link"
import styled, { css } from "styled-components"

export const NavigationWrapper = styled.nav<{ type: "header" | "footer" }>`
    display: flex;
    gap: 2.25rem;

    ${(props) => props.type === "header" ?
        css`
            @media screen and (${Device.tablet}) {
                display: none;
            }
        `
        :
        css`
            @media screen and (${Device.mobileL}) {
                flex-direction: column;
                align-items: center;
            }
        `
    }
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

