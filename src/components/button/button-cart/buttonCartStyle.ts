"use client"
import { Device } from "@/breakpoints"
import styled, { css } from "styled-components"

const globalStyle = css`
    width: 100%;
    background-color: var(--grey);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-weight: bold;
`
const globalButtonStyle = css`
    font-size: 1rem;
     &:hover {
        background-color: rgba(0, 0, 0, 0.10);
        color: var(--brown);
    }
`
export const ButtonWrapper = styled.div`
    display: flex;
    height: 3rem;

        width: 30%;
        min-width: 50px;
        max-width: 120px;
    
`
export const AddProductQuantity = styled.button`
    ${globalStyle}
    ${globalButtonStyle}
    cursor: pointer;
    color: rgba(0, 0, 0, 0.25);
`
export const ButtonDisplayCurrentQuantity = styled.div`
    ${globalStyle}
`
export const RemoveProductQuantity = styled.button`
    ${globalStyle}
    ${globalButtonStyle}
    cursor: pointer;
    color: rgba(0, 0, 0, 0.25);
`