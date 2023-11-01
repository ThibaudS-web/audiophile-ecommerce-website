export interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    handleClick?: () => void
    children: React.ReactNode

}

export interface ButtonOutlineProps extends ButtonBaseProps {
    color: "primary" | "secondary"
}

export interface ButtonFactoryProps {
    handleClick?: () => void
    children: React.ReactNode
    color?: "primary" | "secondary"
    btnType: 'outline' | 'shop'
}