"use client"
import styled from "styled-components"

export const SVG = styled.svg`
    width: 24px;
    height: 24px;
    fill: red;
    cursor: pointer;

    &:hover {
        & > path {
            fill: var(--brown)
        }
    }   
`

export const Path = styled.path`
    fill: white;
`