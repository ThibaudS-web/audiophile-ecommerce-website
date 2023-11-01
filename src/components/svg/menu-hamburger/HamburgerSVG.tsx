"use client"
import { SVGProps } from "react"
import { SVG } from "./hamburgerStyle"

const HamburgerSVG = (props: SVGProps<SVGSVGElement>) => (
    <SVG width={16} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
        <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
        </g>
    </SVG>
)

export default HamburgerSVG
