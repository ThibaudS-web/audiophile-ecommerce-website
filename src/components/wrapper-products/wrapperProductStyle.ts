"use client"
import { Device } from "@/breakpoints"
import styled from "styled-components"

export const Wrapper = styled.section`
    width: 85%;
    max-width: var(--bloc-desktop);
    display: flex;
    margin: 10rem auto 15rem auto;
    flex-direction: column;
    gap: 10rem;

    @media screen and (${Device.laptop}) {
        width:90%;
        gap: 7.5rem;
        margin: 7.5rem auto 10rem auto;
    }

    @media screen and (${Device.tablet}) {
        max-width: var(--bloc-tablet);
    }
`