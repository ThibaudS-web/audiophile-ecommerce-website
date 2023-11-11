"use client"
import styled, { css } from "styled-components"

const generateStyle = (color: "primary" | "secondary", isReverse?: boolean) => {

    const generatePrimaryButtonCSS = () => {
        if (isReverse) {
            return css`
                color: var(--brown);
                background-color: transparent;
                border: 1px solid var(--brown);

                &:hover {
                    color: white;
                    background-color: var(--brown);
                    border: none;
                }
            `
        }

        return css`
            color: white;
            background-color: var(--brown);
            border: none;

            &:hover {
                color: white;
                background-color: var(--brown-hover);
            }
        `
    }

    const generateSecondaryButtonCSS = () => {
        if (isReverse) {
            return css`
                color: white;
                background-color: black;
                border: none;

                &:hover {
                    color: white;
                    background-color: #4C4C4C;
                }
            `
        }

        return css`
            color: black;
            background-color: transparent;
            border: 1px solid black;

            &:hover {
                color: white;
                background-color: black;
            }
        `
    }

    if (color === "primary") {
        return generatePrimaryButtonCSS;
    }

    if (color === "secondary") {
        return generateSecondaryButtonCSS;
    }

    return null
}

export const BtnOutline = styled.button<{ color: "primary" | "secondary", $isReverseColor?: boolean }>`
    width: 160px;
    height: 48px;
    font-weight: bold;
    cursor: pointer;
    ${(props) => generateStyle(props.color, props.$isReverseColor)}

    &:disabled{
        opacity: 0.5;
        cursor: unset;  

        &:hover{
            background-color: ${(props) => props.color === "primary" ? "var(--brown)" : "black"};
        }
    }
`;