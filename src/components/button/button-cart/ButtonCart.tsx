
import React, { useEffect, useState } from 'react'
import { AddProductQuantity, ButtonDisplayCurrentQuantity, ButtonWrapper, RemoveProductQuantity } from './buttonCartStyle'

const ButtonCart = ({ handleIsDisabledStateButton }: { handleIsDisabledStateButton: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [itemQuantity, setItemQuantity] = useState(0)

    const addQuantity = () => {
        setItemQuantity((prevValueQuantity) => prevValueQuantity + 1)
    }

    const removeQuantity = () => {
        if (itemQuantity === 0) return
        setItemQuantity((prevValueQuantity) => prevValueQuantity - 1)
    }

    useEffect(() => {
        if (itemQuantity > 0) handleIsDisabledStateButton(false)
        if (itemQuantity < 1) handleIsDisabledStateButton(true)
    }, [itemQuantity])

    return (
        <ButtonWrapper>
            <RemoveProductQuantity
                onClick={removeQuantity}
            >
                -
            </RemoveProductQuantity>
            <ButtonDisplayCurrentQuantity>{itemQuantity}</ButtonDisplayCurrentQuantity>
            <AddProductQuantity
                onClick={addQuantity}
            >
                +
            </AddProductQuantity>
        </ButtonWrapper >
    )
}

export default ButtonCart