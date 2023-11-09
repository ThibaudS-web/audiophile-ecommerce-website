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
  DescriptionEarphoneProduct
} from "./homePageStyle"
import ButtonFactory from "@/components/button/ButtonFactory"
import AudiophileSummary from "@/components/audiophile-summary/AudiophileSummary"
import {
  useRouter,
  usePathname
} from "next/navigation"

import PageContainer from "@/components/container/PageContainer"

export default function Home() {
  const pathname = usePathname()
  const { push } = useRouter()

  const goToTheProductPage = (url: string) => {
    push(url)
  }

  return (
    <>
      <NewProductWrapper>
        <PageContainer>
          <NewProductSectionWrapper>
            <Banniere>
              <DescriptionNewProduct>
                <Overline>NEW PRODUCT</Overline>
                <TitleNewProduct>XX99 Mark II Headphones</TitleNewProduct>
                <ProductOverview>
                  Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </ProductOverview>
                <ButtonFactory
                  handleClick={() => goToTheProductPage("/headphones/xx99-mark-two-headphones")}
                  isOutline
                  color="primary"
                >
                  SEE PRODUCT
                </ButtonFactory>
              </DescriptionNewProduct>
            </Banniere>
          </NewProductSectionWrapper>
        </PageContainer>
      </NewProductWrapper>
      
      <PageContainer>
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
                handleClick={() => goToTheProductPage("/speakers/zx9-speaker")}
                isOutline
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
                handleClick={() => goToTheProductPage("/speakers/zx7-speaker")}
                isOutline
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
                handleClick={() => goToTheProductPage("/earphones/yx1-earphones")}
                isOutline
                color="secondary"
              >
                SEE PRODUCT
              </ButtonFactory>
            </DescriptionEarphoneProduct>
          </EarphoneProductWrapper>

        </OverviewProductsSection>

        <AudiophileSummary />
      </PageContainer>
    </>
  )
}
