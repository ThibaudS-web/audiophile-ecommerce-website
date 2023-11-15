"use client"
import React, { useContext } from 'react'
import {
  Container,
  HeaderWrapper,
  LogoLink,
  MenuAndLogoWrapper,
  TotalItemsInCart
} from './headerStyle'
import CartSVG from '../svg/cart/CartSVG'
import { CartSVGWrapper } from '../svg/cart/cartStyle'
import Logo from '../svg/logo/Logo'
import HamburgerSVG from '../svg/menu-hamburger/HamburgerSVG'
import Navigation from '../navigation/Navigation'
import { CartContext } from '@/context/cart/CartContext'

const Header = () => {
  const {
    handleModalDisplay,
    getTotalProductsNumberInCart,
    itemsList
  } = useContext(CartContext)

  const handleClickHamburgerMenu = () => {
    //TODO: Need to be implemented
    console.log('Clicked on Hamburger!')
  }

  return (
    <HeaderWrapper>
      <Container>
        <MenuAndLogoWrapper>
          <HamburgerSVG handleClick={handleClickHamburgerMenu} />
          <LogoLink href="/">
            <Logo />
          </LogoLink>
        </MenuAndLogoWrapper>
        <Navigation type='header' />
        <div onClick={handleModalDisplay} style={{ position: "relative" }}>
          {
            itemsList.length > 0 ?
              <TotalItemsInCart>
                {getTotalProductsNumberInCart()}
              </TotalItemsInCart>
              :
              null
          }
          <CartSVGWrapper >
            <CartSVG fill='white' />
          </CartSVGWrapper>
        </div>

      </Container>
    </HeaderWrapper>
  )
}

export default Header