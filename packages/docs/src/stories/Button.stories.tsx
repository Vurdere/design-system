import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@vurdere/react'
import { User, FacebookLogo } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Avaliar',
    variant: 'primary',
    size: 'md',
    radius: 'square',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    radius: {
      options: ['square', 'round', 'custom'],
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
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Voltar',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Mais informações',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIconleft: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <User  weight="bold" />
        Acesse seu perfil
      </>
    ),
  },
}

export const WithIconRight: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Conecte com Facebook
        <FacebookLogo  weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
