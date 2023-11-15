"use client"
import { Device } from "@/breakpoints"
import ButtonMinimal from "@/components/button/button-minimal/ButtonMinimal"
import ButtonOutline from "@/components/button/button-outline/ButtonOutline"
import ButtonQuantity from "@/components/button/button-quantity/ButtonQuantity"
import styled from "styled-components"

export const BackgroundOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 900;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
`

export const Modal = styled.div`
    padding: 2rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 7.625rem;
    border-radius: 0.5rem;
    gap: 1.5rem;
    width: 100%;
    max-width: 400px;
    float: right;

    @media screen and (${Device.mobileL}) {
        max-width: unset;
        float: center;
        padding: 1rem;
    }
`

export const Empty = styled.h5`
    color: black;
    font-size: 1rem;

    & > strong {
        color: var(--brown)
    }
`

export const ModalHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
export const ItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 0.5rem 0;
    width: 100%;
`

export const TotalPrice = styled.p`
    font-size: 1.125rem;
    font-weight: bold;
`
export const TotalLabel = styled.p`
    color: #808080;
`
export const RemoveButton = styled(ButtonMinimal)`
    font-size: 0.9375rem;
    text-decoration: underline;
`
export const TotalWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const CheckoutButton = styled(ButtonOutline)`
    width: 100%;
`



