import { addons } from '@storybook/manager-api'
import gimmeTheme from './gimme-theme'

addons.setConfig({
    theme: gimmeTheme,
    panelPosition: 'bottom',
})