import type { Meta, StoryObj } from '@storybook/react'
import { Pills, PillsProps } from '@vurdere/react'

export default {
  title: 'Form/Pills',
  component: Pills,
  args: {
    children: 'Pílula clicável',
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    variant: {
        options: ['primary', 'secondary'],
        control: {
            type: 'inline-radio',
        },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<PillsProps>

export const Primary: StoryObj<PillsProps> = {}

export const Secondary: StoryObj<PillsProps> = {
    args: {
        variant: 'secondary',
        children: 'Pílula informativa',
        as: 'div',
    },
}

export const Disabled: StoryObj<PillsProps> = {
  args: {
    disabled: true,
  },
}
