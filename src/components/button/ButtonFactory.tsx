import { ButtonFactoryProps } from '@/types/buttonTypes'
import ButtonOutline from './button-outline/ButtonOutline'
import ButtonMinimal from './button-minimal/ButtonMinimal'

const ButtonFactory = ({ isOutline, handleClick, children, color, $isReverseColor }: ButtonFactoryProps) => {
    return isOutline ?
        <ButtonOutline
            color={color!}
            $isReverseColor={$isReverseColor}
            handleClick={handleClick}
        >
            {children}
        </ButtonOutline>
        :
        <ButtonMinimal
            handleClick={handleClick}
        >
            {children}
        </ButtonMinimal>
}

export default ButtonFactory;