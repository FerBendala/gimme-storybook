import type { Meta, StoryObj } from '@storybook/react'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Button from './button'

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters:{
        controls:{
            exclude:/style|hasIcon|onClick*/g
        }
    },
    argTypes: {
        type: {
            control: 'select',
            description: 'Select the size (small, medium or large)',
            options: ['button', 'submit']
        },
        size: {
            control: 'select',
            description: 'Select the size (small, medium or large)',
            options: ['small', 'medium', 'large']
        },
        style: {
            control: 'select',
            description: 'Select the type (primary or secondary)',
            options: ['primary', 'secondary', 'tertiary'],
        },
        text: {
            description: 'Overwritten label',
        },
        avatar: {
            description: 'Overwritten avatar url image',
        },
        hasIcon: {
            control: 'boolean'
        },
        onClick: {
            description: 'add any function'
        },
    },
} as Meta
export default meta

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
    args: {
        type: 'button',
        size: 'medium',
        style: 'primary',
        text: 'Button',
        avatar: '',
        hasIcon: false
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const primaryButton = canvas.getByRole('button', { name: /Button/i })


        await expect(primaryButton.innerText).toBe('Button')
        await expect(primaryButton).toHaveStyle('background-color: #1ea7fd')
    }
}

export const Secondary: Story = {
    args: {
        ...Primary.args,
        style: 'secondary',
    }
}

export const Tertiary: Story = {
    args: {
        ...Primary.args,
        style: 'tertiary',
    }
}

export const Danger: Story = {
    args: {
        ...Primary.args,
        style: 'danger',
    }
}


