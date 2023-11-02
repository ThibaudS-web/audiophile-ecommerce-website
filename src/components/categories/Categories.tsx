"use client"
import { CategoriesWrapper, ItemList, NextImage, SectionWrapper } from "./categoriesStyle"
import ButtonFactory from '../button/ButtonFactory'
import { categories, categoryImages } from "@/helpers/imagesCategories"
import { useRouter } from "next/navigation"


const Categories = () => {
    const router = useRouter()

    const handleClickShopBtn = (url: string) => {
        router.push(`/${url}`)
    }

    return (
        <>
            <SectionWrapper>
                <CategoriesWrapper>
                    {categories.map((category) => (
                        <ItemList key={category}>
                            <NextImage src={categoryImages(category).import} alt={category} priority />
                            <h6>{category}</h6>
                            <ButtonFactory handleClick={() => handleClickShopBtn(category)} btnType='shop'>SHOP</ButtonFactory>
                        </ItemList>
                    ))}
                </CategoriesWrapper>
            </SectionWrapper>
        </>
    )
}

export default Categories