import { ButtonFactoryProps } from '@/types/buttonTypes'
import ButtonOutline from './button-outline/ButtonOutline'
import ButtonShop from './button-shop/ButtonShop'

const ButtonFactory = ({ btnType, handleClick, children, color }: ButtonFactoryProps) => {
    switch (btnType) {
        case 'outline':
            return <ButtonOutline color={color!} handleClick={handleClick}>{children}</ButtonOutline>
        case 'shop':
            return <ButtonShop handleClick={handleClick}>{children}</ButtonShop>
        default:
            throw new Error(`Type de bouton inconnu: ${btnType}`)
    }
}

export default ButtonFactory;