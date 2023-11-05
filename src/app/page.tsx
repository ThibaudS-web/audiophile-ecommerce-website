"use client"
import Categories from "@/components/categories/Categories"
import {
  DescriptionNewProduct,
  NewProductWrapper,
  NewProductSectionWrapper,
  Overline,
  ProductOverview,
  Banniere,
  TitleNewProduct,
  OverviewProductsSection,
  PrimaryProduct,
  DescriptionPrimaryProduct,
  PrimaryImageContainer,
  SpeakerProduct,
  DescriptionSpeakerProduct,
  EarphoneImage,
  EarphoneProductWrapper,
  DescriptionEarphoneProduct,
  ProductSummary,
  BestGearImage,
  Strong,
  ProductSummaryTextWrapper,
  Picture
} from "./homePageStyle"
import ButtonFactory from "@/components/button/ButtonFactory"
import BestGearDesktop from "/public/assets/shared/desktop/image-best-gear.jpg"
import BestGearTablet from "/public/assets/shared/tablet/image-best-gear.jpg"
import BestGearMobile from "/public/assets/shared/mobile/image-best-gear.jpg"
import { Device } from "@/breakpoints"

export default function Home() {
  return (
    <>
      <NewProductWrapper>
        <NewProductSectionWrapper>
          <Banniere>
            <DescriptionNewProduct>
              <Overline>NEW PRODUCT</Overline>
              <TitleNewProduct>XX99 Mark II Headphones</TitleNewProduct>
              <ProductOverview>
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
              </ProductOverview>
              <ButtonFactory btnType="outline" color="primary">SEE PRODUCT</ButtonFactory>
            </DescriptionNewProduct>
          </Banniere>
        </NewProductSectionWrapper>
      </NewProductWrapper>

      <Categories />

      <OverviewProductsSection>
        <PrimaryProduct>
          <PrimaryImageContainer />
          <DescriptionPrimaryProduct>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <ButtonFactory
              btnType="outline"
              color="secondary"
              $isReverseColor
            >
              SEE PRODUCT
            </ButtonFactory>
          </DescriptionPrimaryProduct>
        </PrimaryProduct>

        <SpeakerProduct>
          <DescriptionSpeakerProduct>
            <h4>ZX7 SPEAKER</h4>
            <ButtonFactory
              btnType="outline"
              color="secondary"
            >
              SEE PRODUCT
            </ButtonFactory>
          </DescriptionSpeakerProduct>
        </SpeakerProduct>

        <EarphoneProductWrapper>
          <EarphoneImage />
          <DescriptionEarphoneProduct>
            <h4>YX1 EARPHONES</h4>
            <ButtonFactory
              btnType="outline"
              color="secondary"
            >
              SEE PRODUCT
            </ButtonFactory>
          </DescriptionEarphoneProduct>
        </EarphoneProductWrapper>
        
        <ProductSummary>
          <ProductSummaryTextWrapper>
            <h2>Bringing you the <Strong>best</Strong> audio gear</h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </ProductSummaryTextWrapper>
          <Picture>
            <source srcSet={BestGearTablet.src} media={`(${Device.laptop})`} />
            <source srcSet={BestGearMobile.src} media={`(${Device.mobileL})`} />
            <BestGearImage src={BestGearDesktop.src} alt="Best gear" />
          </Picture>
        </ProductSummary>
      </OverviewProductsSection>
    </>
  )
}
