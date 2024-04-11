import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@vurdere/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://static.wixstatic.com/shapes/c3bc03_d4e830a0ba3a4515a09030e56acb5ec8.svg',
    alt: 'Vurdere',
    city: 'false'
  },
  argTypes: {
    city: {
      options: ['false', 'true'],
      control: {
        type: 'inline-radio',
      },
    },
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const NoImage: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
