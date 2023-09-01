interface ButtonProps {
    type?: 'primary' | 'secondary'
    textColor?: string
    size?: 'small' | 'medium' | 'large'
    label: string
    // eslint-disable-next-line no-unused-vars, no-undef
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default ButtonProps