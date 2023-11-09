"use client"
import {
    Arrow,
    CategoriesWrapper,
    ItemList,
    NextImage
} from "./categoriesStyle"
import ButtonFactory from '../button/ButtonFactory'
import {
    categories,
    categoryImages
} from "@/helpers/imagesCategories"
import { useRouter } from "next/navigation"

const Categories = () => {
    const router = useRouter()

    const handleClickShopBtn = (url: string) => {
        router.push(`/${url}`)
    }

    return (
        <>
            <CategoriesWrapper>
                {categories.map((category) => (
                    <ItemList key={category}>
                        <NextImage src={categoryImages(category).import} alt={category} priority />
                        <h6>{category}</h6>
                        <ButtonFactory handleClick={() => handleClickShopBtn(category)} isOutline={false}>
                            SHOP
                            <Arrow />
                        </ButtonFactory>
                    </ItemList>
                ))}
            </CategoriesWrapper>

        </>
    )
}

export default Categories