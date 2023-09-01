import { withThemeByDataAttribute } from '@storybook/addon-styling'
import { Preview } from '@storybook/react'

import '../src/index.scss'

export const parameters = {
    actions: {
        argTypesRegex: '^on[A-Z].*'
    },
    layout: 'centered',
}

export const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
}

export const decorators = [
    withThemeByDataAttribute({
        themes: {
            light: 'light',
            dark: 'dark',
        },
        defaultTheme: 'dark',
        attributeName: 'data-bs-theme',
    }),
]