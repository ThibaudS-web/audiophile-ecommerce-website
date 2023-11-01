"use client"
import React from 'react'
import { Container, HeaderWrapper, MenuAndLogoWrapper, Nav, StyledLink } from './headerStyle'
import CartSVG from '../svg/cart/CartSVG'
import { CartSVGWrapper } from '../svg/cart/cartStyle'
import Logo from '../svg/logo/Logo'
import { usePathname } from 'next/navigation'
import useWidthScreen from '@/hooks/useWidthScreen'
import HamburgerSVG from '../svg/menu-hamburger/HamburgerSVG'

const Header = () => {
  const pathname = usePathname()

  const handleClickCart = () => {
    console.log('Clicked!')
  }

  const activeClassManagement = (href: string) => {
    pathname === href ? 'active' : ''
  }

  return (
    <HeaderWrapper>
      <Container>
        <MenuAndLogoWrapper>
          <HamburgerSVG />
          <StyledLink href="/">
            <Logo />
          </StyledLink>
        </MenuAndLogoWrapper>
        <Nav>
          <StyledLink className={`${activeClassManagement("/")}`} href="/">HOME</StyledLink>
          <StyledLink className={`${activeClassManagement("/headphones")}`} href="/headphones">HEADPHONES</StyledLink>
          <StyledLink className={`${activeClassManagement("/speakers")}`} href="/speakers">SPEAKERS</StyledLink>
          <StyledLink className={`${activeClassManagement("/earphones")}`} href="/earphones">EARPHONES</StyledLink>
        </Nav>
        <CartSVGWrapper onClick={handleClickCart}>
          <CartSVG />
        </CartSVGWrapper>
      </Container>
    </HeaderWrapper>
  )
}

export default Header