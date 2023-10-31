"use client"
import styled from "styled-components"

export const BtnOutline = styled.button<{ color: string }>`
    width: 160px;
    height: 48px; 
    font-weight: bold;
    cursor: pointer;
    color: ${(props) => props.color === 'primary' ? "var(--primary-fg-button)" : "black"};
    background-color:${(props) => props.color === 'primary' ? "var(--primary-bg-button)" : "var(--secondary-bg-button)"};
    border: ${(props) => props.color === "primary" ? "none" : "1px solid black"};

    &:hover {
        color: white;
        background-color:${(props) => props.color === 'primary' ? "var(--primary-brown-hover)" : "black"};
    }
`