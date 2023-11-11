export interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    handleClick?: () => void
    children: React.ReactNode
}

export interface ButtonOutlineProps extends ButtonBaseProps {
    color: "primary" | "secondary"
    $isReverseColor?: boolean
}

export interface ButtonFactoryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    handleClick?: () => void
        children: React.ReactNode
    color?: "primary" | "secondary"
    isOutline: boolean
    $isReverseColor?: boolean
}