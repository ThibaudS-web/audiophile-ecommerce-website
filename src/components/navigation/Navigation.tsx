import React from 'react'
import { NavigationWrapper, StyledLink } from './navigationStyle'
import { usePathname } from 'next/navigation'

const Navigation = ({ type }: { type: "header" | "footer" }) => {
    const pathname = usePathname()

    const activeClassManagement = (href: string) => {
        return pathname === href ? 'active' : ''
    }

    return (
        <NavigationWrapper type={type}>
            <StyledLink className={`${activeClassManagement("/")}`} href="/">HOME</StyledLink>
            <StyledLink className={`${activeClassManagement("/headphones")}`} href="/headphones">HEADPHONES</StyledLink>
            <StyledLink className={`${activeClassManagement("/speakers")}`} href="/speakers">SPEAKERS</StyledLink>
            <StyledLink className={`${activeClassManagement("/earphones")}`} href="/earphones">EARPHONES</StyledLink>
        </NavigationWrapper>
    )
}

export default Navigation