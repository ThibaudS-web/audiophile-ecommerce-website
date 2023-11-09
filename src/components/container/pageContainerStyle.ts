"use client"
import { Device } from "@/breakpoints"
import styled from "styled-components"

export const Container = styled.div`
    width: 85%;
    margin: auto;
    max-width: var(--bloc-desktop);

    @media screen and (${Device.tablet}) {
        width: 90%;
        max-width: var(--bloc-tablet);
    }
`