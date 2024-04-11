import type { Meta, StoryObj } from '@storybook/react'
import { Link, LinkProps } from '@vurdere/react'

export default {
  title: 'Typography/Link',
  component: Link,
  args: {
    size: 'md',
    children:
      'ver todas as notas',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<LinkProps>

export const Primary: StoryObj<LinkProps> = {}

export const Bold: StoryObj<LinkProps> = {
  args: {
    children: 'ver todas as notas',
    as: 'strong',
  },
}
