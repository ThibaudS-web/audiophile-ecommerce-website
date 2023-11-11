'use client'
import { Device } from "@/breakpoints";
import styled, { css } from "styled-components";

const GlobalStyletext = css`
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.5);
`

export const FooterBackground = styled.footer`
    width: 100%;
    background-color: var(--header-bg-color);
    margin-top: 8.75rem;
`

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    position: relative;

    &::after{
        content: '';
        width: 100px;
        height: 4px;
        background-color: var(--brown);
        position: absolute;
        top: 0;
        left: 0;

        @media screen and (${Device.mobileL}){
            left: 50%;
            transform: translateX(-50%)
        }
    }
`

export const FooterHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 4.5rem;

    @media screen and (${Device.tablet}) {
        justify-content: unset;
        flex-direction: column;
        gap: 2rem;
    }

    @media screen and (${Device.mobileL}) {
        align-items: center;
    }
`

export const FooterMain = styled.div`
    margin: 2rem 0;
    display: grid;

    grid-template-areas: 
        "footer-text social-links"
        "copyright .";
        
    @media screen and (${Device.tablet}) {
        grid-template-areas: 
            "footer-text footer-text footer-text"
            "copyright . social-links";
        }

    @media screen and (${Device.mobileL}) {
        grid-template-areas: 
            "footer-text"
            "copyright"
            "social-links";
        }

    & > :nth-child(1) {
        grid-area: footer-text;
        ${GlobalStyletext}
        width: calc(20.4rem + 21.5%);

        @media screen and (${Device.tablet}) {
            width: 100%;
        }

        @media screen and (${Device.mobileL}) {
            text-align: center;
        }
    }

    & > :nth-child(2) {
        grid-area: social-links;
        display: flex;
        gap: 1rem;
        align-self: flex-end;

        @media screen and (${Device.tablet}) {
            margin-top: 4rem;
            align-self: unset;
            justify-self: unset;
        }

        @media screen and (${Device.mobileL}) {
            justify-content: center;
            width: 100%;
        }
    }
    
    & > :nth-child(3) {
        grid-area: copyright;
        ${GlobalStyletext}
        margin-top: 4rem;

        @media screen and (${Device.mobileL}) {
            text-align: center;
        }
    }
`