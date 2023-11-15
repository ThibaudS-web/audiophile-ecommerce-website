import convertNumberToMoney from "@/helpers/NumberToMoney"
import ButtonQuantity from "../button/button-quantity/ButtonQuantity"
import { ItemContainer, InfosItem, LeftSideInfos, ImageItem, LabelItem, PriceItem, LabelAndPriceWrapper } from "./productInCartStyle"
import { ProductCart } from "@/context/cart/ICartContext"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "@/context/cart/CartContext"

const ProductInCart = ({ item }: { item: ProductCart }) => {
    const [quantity, setQuantity] = useState(item.quantity)
    const { removeItem, addItem } = useContext(CartContext)

    useEffect(() => {
        if (quantity === 0) {
            removeItem(item)
        } else {
            addItem(item, quantity, true)
        }
    }, [quantity])


    return (
        <ItemContainer key={item.productName}>
            <InfosItem>
                <LeftSideInfos>
                    <ImageItem src={item.imagePath} alt={item.productName} />
                    <LabelAndPriceWrapper>
                        <LabelItem>{item.productName}</LabelItem>
                        <PriceItem>
                            {
                                convertNumberToMoney(item.productPrice)
                            }
                        </PriceItem>
                    </LabelAndPriceWrapper>
                </LeftSideInfos>
                <ButtonQuantity
                    quantity={quantity}
                    setQuantity={setQuantity}
                    isCartContext={true}
                />
            </InfosItem>
        </ItemContainer>
    )
}

export default ProductInCart