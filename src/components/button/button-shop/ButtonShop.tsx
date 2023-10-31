import { Arrow, BtnShop } from "./buttonShopStyle"
import { ButtonBaseProps } from "@/types/buttonTypes"

const ButtonShop = ({ handleClick, children, ...props }: ButtonBaseProps) => {
    return (
        <BtnShop onClick={handleClick} {...props}>
            {children}
            <Arrow />
        </BtnShop>
    )
}

export default ButtonShop