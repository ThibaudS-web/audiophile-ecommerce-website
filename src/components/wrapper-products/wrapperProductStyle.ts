"use client"
import { Device } from "@/breakpoints"
import styled from "styled-components"

export const Wrapper = styled.section`
    display: flex;
    margin: 10rem auto 15rem auto;
    flex-direction: column;
    gap: 10rem;

    @media screen and (${Device.laptop}) {
        gap: 7.5rem;
        margin: 7.5rem auto 10rem auto;
    }
`