"use client"
import { Device } from "@/breakpoints"
import styled from "styled-components"

export const BackgroundCategoryHeader = styled.div`
    background-color: var(--black-header);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CategoryLabel = styled.h2`
    color: white;
    padding: 6.25rem 0;
    
   @media screen and (${Device.mobileL}) {
        padding: 2rem 0;
        font-size: 1.75rem;
   }
`