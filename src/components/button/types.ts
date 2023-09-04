interface ButtonProps {
    type: 'button' | 'submit'
    size: 'small' | 'medium' | 'large'
    style: 'primary' | 'secondary' | 'tertiary' | 'danger'
    text: string
    avatar?: string
    hasIcon?: boolean

    // eslint-disable-next-line no-unused-vars, no-undef
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default ButtonProps