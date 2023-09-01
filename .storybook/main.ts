import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
    stories: [
        '../src/docs/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    staticDirs: ['../src/assets'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
        {
            name: '@storybook/addon-styling',
            options: {
                sass: {
                    // Require your Sass preprocessor here
                    implementation: require('sass'),
                },
            },
        }
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    docs: {
        autodocs: true
    },
    typescript: {
        check: true,

    },
}

export default config