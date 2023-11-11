"use client"
import React from 'react'
import {
  FooterBackground,
  FooterHeader,
  FooterMain,
  FooterWrapper
} from './footerStyle'
import Logo from '../svg/logo/Logo'
import Navigation from '../navigation/Navigation'
import FacebookSVG from '../svg/social/FacebookSVG'
import InstagramSVG from '../svg/social/InstagramSVG'
import XSVG from '../svg/social/XSVG'
import PageContainer from '../container/PageContainer'

const Footer = () => {
  
  return (
    <FooterBackground>
      <PageContainer>
        <FooterWrapper>
          <FooterHeader>
            <Logo />
            <Navigation type='footer' />
          </FooterHeader>
            <FooterMain>
              <p>
                Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
              </p>
              <div>
                <FacebookSVG />
                <XSVG fill="white" />
                <InstagramSVG />
              </div>
              <p>
                Copyright 2021. All Rights Reserved
              </p>
            </FooterMain>
        </FooterWrapper>
      </PageContainer>
    </FooterBackground>
  )
}

export default Footer