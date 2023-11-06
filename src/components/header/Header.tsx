"use client"
import React from 'react'
import {
  Container,
  HeaderWrapper,
  LogoLink,
  MenuAndLogoWrapper
} from './headerStyle'
import CartSVG from '../svg/cart/CartSVG'
import { CartSVGWrapper } from '../svg/cart/cartStyle'
import Logo from '../svg/logo/Logo'
import HamburgerSVG from '../svg/menu-hamburger/HamburgerSVG'
import Navigation from '../navigation/Navigation'
import Link from 'next/link'

const Header = () => {

  const handleClickCart = () => {
    //TODO: Need to be implemented
    console.log('Clicked!')
  }

  return (
    <HeaderWrapper>
      <Container>
        <MenuAndLogoWrapper>
          <HamburgerSVG />
          <LogoLink href="/">
            <Logo />
          </LogoLink>
        </MenuAndLogoWrapper>
        <Navigation type='header' />
        <CartSVGWrapper onClick={handleClickCart}>
          <CartSVG />
        </CartSVGWrapper>
      </Container>
    </HeaderWrapper>
  )
}

export default Header