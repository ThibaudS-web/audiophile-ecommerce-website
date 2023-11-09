"use client"
import styled from "styled-components"

export const BtnMinimal = styled.button`
    cursor: pointer;
    font-weight: bold;
    font-size: 0.8125rem;
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
