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
  PrimaryImageContainer
} from "./homePageStyle"
import ButtonFactory from "@/components/button/ButtonFactory"

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
            <ButtonFactory btnType="outline" color="secondary" $isReverseColor>SEE PRODUCT</ButtonFactory>
          </DescriptionPrimaryProduct>
        </PrimaryProduct>
      </OverviewProductsSection>
    </>
  )
}
