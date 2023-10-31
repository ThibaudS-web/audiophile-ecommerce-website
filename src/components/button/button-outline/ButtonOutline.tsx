import { ButtonOutlineProps } from "@/types/buttonTypes"
import { BtnOutline } from "./buttonOutlineStyle"

const ButtonOutline = ({ handleClick, children, color, ...props }: ButtonOutlineProps) => {
    return <BtnOutline color={color} onClick={handleClick} {...props}> {children}</BtnOutline >
}

export default ButtonOutline