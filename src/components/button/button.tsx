import React, { FC } from 'react'
import classNames from 'classnames'

import ButtonProps from './types'

import styles from './button.module.scss'

const Button: FC<ButtonProps> = ({
    type,
    size,
    style,
    text,
    avatar,
    hasIcon,
    onClick,
}) => {
    return (
        <button
            type={type}
            role='button'
            onClick={onClick}
            className={classNames(
                styles['storybook-button'],
                styles[`storybook-button--${size}`],
                styles[`storybook-button--${style}`],
                hasIcon && styles[`storybook-button--${hasIcon}`],
            )}
        >
            {hasIcon && <p>icon</p> /* <Icon className={styles['button__icon']} /> */}
            {avatar && (
                <img
                    className={styles['button__image']}
                    src={avatar}
                    alt={text}
                />
            )}
            {text && <span className={styles['button__text']}>{text}</span>}
        </button>
    )
}

export default Button
