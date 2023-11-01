"use client"
import styled from "styled-components"

export const SVG = styled.svg`
    cursor: pointer;
`
export const Path = styled.path`
    transition: fill 0.3s;
`
export const CartSVGWrapper = styled.div`
    &:hover {
        svg > path {  
            fill: var(--brown);
        }
    }
`
