"use client"
import styled from "styled-components"

export const BtnShop = styled.button`
    cursor: pointer;
    font-weight: bold;
    font-size: 13px;
    font-weight: bold;
    border: none;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.5);

    &:hover {
        color: var(--brown)
    }
`
export const Arrow = styled.span`
    width: 7px;
    height: 7px;
    border-right: 2px solid var(--brown);
    border-top: 2px solid var(--brown);
    transform: rotate(45deg);
`