"use client"
import { Device } from "@/breakpoints"
import styled from "styled-components"

export const AudiophileSummaryWrapper = styled.div`
    width: 85%;
    max-width: var(--bloc-desktop);
    margin-top: 5.75rem;
    display: flex;
    justify-content: space-between;
    gap: 1.875rem;
    margin: auto;

    @media screen and (${Device.laptop}) {
        flex-direction: column-reverse;
    }

    @media screen and (${Device.tablet}) {
        width: 90%;
        max-width: var(--bloc-tablet);
    }
`

export const AudiophileSummaryTextWrapper = styled.div`
    display: flex;
    width: 100%;
    text-align: left;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    & > * {
        margin-right: 5.6rem;

        @media screen and (${Device.laptop}) {
            margin-right: unset;
        }
    }

    & > h2 {
        @media screen and (${Device.mobileL}) {
            font-size: 1.75rem;
            line-height: 2rem;
        }  
    }

    @media screen and (${Device.laptop}) {
        text-align: center;
        padding: unset;
    }  
`

export const Picture = styled.picture`
    width: 100%;
`

export const BestGearImage = styled.img`
    height: auto;
    width: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
    display: block;


    @media screen and (${Device.laptop}) {
        width: 100%;
        height: 300px;
    }
`
export const Strong = styled.strong`
    color: var(--brown)
`
