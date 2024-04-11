import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@vurdere/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
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
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Bold: StoryObj<TextProps> = {
  args: {
    children: 'Incrível',
    as: 'strong',
  },
}

export const SmallRegular: StoryObj<TextProps> = {
  args: {
    children: 'Belo Horizonte',
    size: 'sm'
  },
}

export const SmallBold: StoryObj<TextProps> = {
  args: {
    children: 'Jordan Santos Costa',
    as: 'strong',
    size: 'sm'
  },
}