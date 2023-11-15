
import { AddProductQuantity, ButtonDisplayCurrentQuantity, ButtonWrapper, RemoveProductQuantity } from './buttonQuantityStyle'

const ButtonQuantity = ({ quantity, setQuantity, isCartContext }: { quantity: number, setQuantity: React.Dispatch<React.SetStateAction<number>>, isCartContext?: boolean }) => {


    const addQuantity = () => {
        setQuantity((prevValueQuantity) => prevValueQuantity + 1)
    }

    const removeQuantity = () => {
        if (!isCartContext && quantity === 1) return
        if (isCartContext && quantity === 0) return
        setQuantity((prevValueQuantity) => prevValueQuantity - 1)
    }

    return (
        <ButtonWrapper $isCartContext={isCartContext}>
            <RemoveProductQuantity
                onClick={removeQuantity}
            >
                -
            </RemoveProductQuantity>
            <ButtonDisplayCurrentQuantity>{quantity}</ButtonDisplayCurrentQuantity>
            <AddProductQuantity
                onClick={addQuantity}
            >
                +
            </AddProductQuantity>
        </ButtonWrapper >
    )
}

export default ButtonQuantity