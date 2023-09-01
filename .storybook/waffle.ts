import { create } from '@storybook/theming/create'

export default create({
    base: 'dark',

    // Typography
    fontBase: 'Nunito Sans, sans-serif',
    fontCode: 'monospace',

    brandTitle: 'My custom Storybook',
    brandUrl: 'https://example.com',
    brandImage: '/images/shopfully-light.svg',
    brandTarget: '_self',

    //
    colorPrimary: '#02131c',
    colorSecondary: '#76b4d5',

    // UI
    appBg: '#02131c',
    appContentBg: '#02131c',
    appBorderColor: '#02131c',
    appBorderRadius: 0,

    // Text colors
    textColor: '#a2a8c0',
    textInverseColor: '#02131c',

    // Toolbar default and active colors
    barTextColor: '#5fa3c7',
    barSelectedColor: '#76b4d5',
    barBg: '#02131c',

    // Form colors
    inputBg: '#02131c',
    inputBorder: '#a2a8c0',
    inputTextColor: '#a2a8c0',
    inputBorderRadius: 0,
})