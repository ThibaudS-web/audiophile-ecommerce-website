import { BtnMinimal } from "./buttonMinimalStyle"
import { ButtonBaseProps } from "@/types/buttonTypes"

const ButtonMinimal = ({ handleClick, children, ...props }: ButtonBaseProps) => {
    return (
        <BtnMinimal onClick={handleClick} {...props}>
            {children}
        </BtnMinimal>
    )
}

export default ButtonMinimal