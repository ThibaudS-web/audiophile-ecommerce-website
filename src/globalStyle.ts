import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        :root {
            --primary-brown: #D87D4A;
            --secondary-black: #101010;
            --grey: #F1F1f1;
            --grey-light: #FAFAFA;
            --primary-brown-hover: #fbaf85;
            --white: #FFFFFF;
            --black: #000000;
        }

        body {
            font-size: 0.9375rem;
            line-height: 1.5625rem;
            font-weight: 500;
        }

        h1, h2, h3, h4, h5, h6 {
            text-transform: uppercase;
        }

        h1 {
            font-size: 3.5rem;
            line-height: 3.625rem;
            letter-spacing: 2px;
            font-weight: bold;
        }

        h2 {
            font-size: 2.5rem;
            line-height: 2.75rem;
            letter-spacing: 1.5px;
            font-weight: bold;
        }

        h3 {
            font-size: 2rem;
            line-height: 2.25rem;
            letter-spacing: 1.15px;
            font-weight: bold;
        }
        
        h4 {
            font-size: 1.75rem;
            line-height: 2.375rem;
            letter-spacing: 2px;
            font-weight: bold;
        }

        h5 {
            font-size: 1.5rem;
            line-height: 2.0625rem;
            letter-spacing: 1.7px;
            font-weight: bold;
        }
                
        h6 {
            font-size: 1.125rem;
            line-height: 1.5rem;
            letter-spacing: 1.3px;
            font-weight: bold;
        }
    `

export const Overline = styled.p`
    font-size: 0.875rem;
    text-transform: uppercase;
    line-height: 1.1875rem;
    letter-spacing: 0.625rem;
`

