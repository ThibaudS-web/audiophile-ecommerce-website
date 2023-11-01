"use client"
import React from 'react'
import { Container, HeaderWrapper, Nav, StyledLink } from './headerStyle'
import CartSVG from '../svg/cart/CartSVG'
import { CartSVGWrapper } from '../svg/cart/cartStyle'
import Logo from '../svg/logo/Logo'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  const handleClickCart = () => {
    console.log('Clicked!')
  }

  return (
    <HeaderWrapper>
      <Container>
        <StyledLink href="/">
          <Logo />
        </StyledLink>
        <Nav>
          <StyledLink className={`${pathname === '/' ? 'active' : ''}`} href="/">HOME</StyledLink>
          <StyledLink className={`${pathname === '/headphones' ? 'active' : ''}`} href="/headphones">HEADPHONES</StyledLink>
          <StyledLink className={`${pathname === '/speakers' ? 'active' : ''}`} href="/speakers">SPEAKERS</StyledLink>
          <StyledLink className={`${pathname === '/earphones' ? 'active' : ''}`} href="/earphones">EARPHONES</StyledLink>
        </Nav>
        <CartSVGWrapper onClick={handleClickCart}>
          <CartSVG />
        </CartSVGWrapper>
      </Container>
    </HeaderWrapper>
  )
}

export default Header