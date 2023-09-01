import React, { FC } from 'react'
import classNames from 'classnames'

import ButtonProps from './types'

import styles from './button.module.scss'

const Button: FC<ButtonProps> = ({
    type = 'primary',
    textColor,
    size = 'medium',
    onClick,
    label,
}) => {
    return (
        <button
            type='button'
            role='button'
            className={classNames(
                styles['storybook-button'],
                styles[`storybook-button--${size}`],
                styles[`storybook-button--${type}`]
            )}
            style={textColor ? { color: textColor } : {}}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button
