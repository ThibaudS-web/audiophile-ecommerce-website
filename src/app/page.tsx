import Categories from "@/components/categories/Categories"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DescriptionNewProduct, NewProductWrapper, NextImage, SectionWrapper, Overline, ProductOverview, Banniere, TitleNewProduct } from "./homePageStyle"
import Headphone from "/public/assets/home/desktop/image-hero.jpg"
import ButtonFactory from "@/components/button/ButtonFactory"

export default function Home() {

  return (
    <>
      <NewProductWrapper>
        <SectionWrapper>
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
        </SectionWrapper>
      </NewProductWrapper>
      <Categories />
    </>
  )
}
