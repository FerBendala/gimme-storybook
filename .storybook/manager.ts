import { addons } from '@storybook/manager-api'
import waffle from './waffle'

addons.setConfig({
    theme: waffle,
    panelPosition: 'bottom',
})