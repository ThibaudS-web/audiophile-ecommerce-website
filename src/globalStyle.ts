import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: '__Manrope_e03fe5', '__Manrope_Fallback_e03fe5'
    }

    :root {
        --brown: #D87D4A;
        --brown-hover: #FBAF85;
        --black-header: #191919;
        --grey: #F1F1f1;
        --grey-light: #FAFAFA;
        --header-bg-color: #141414;

        --bloc-desktop: 1110px;
        --bloc-tablet: 690px;
        --bloc-mobile: 500px;
    }

    body {
        font-size: 0.9375rem;
        line-height: 1.5625rem;
        font-weight: 500;
        background-color: var(--grey-light)
    }

    h1, h2, h3, h4, h5, h6 {
        text-transform: uppercase;
        font-weight: bold;
    }

    h1 {
        font-size: 3.5rem;
        line-height: 3.625rem;
        letter-spacing: 2px;
    }

    h2 {
        font-size: 2.5rem;
        line-height: 2.75rem;
        letter-spacing: 1.5px;
    }

    h3 {
        font-size: 2rem;
        line-height: 2.25rem;
        letter-spacing: 1.15px;
    }
    
    h4 {
        font-size: 1.75rem;
        line-height: 2.375rem;
        letter-spacing: 2px;
    }

    h5 {
        font-size: 1.5rem;
        line-height: 2.0625rem;
        letter-spacing: 1.7px;
    }
            
    h6 {
        font-size: 1.125rem;
        line-height: 1.5rem;
        letter-spacing: 1.3px;
    }
`

export const Overline = styled.p`
    font-size: 0.875rem;
    text-transform: uppercase;
    line-height: 1.1875rem;
    letter-spacing: 0.625rem;
`

