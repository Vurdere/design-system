import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@vurdere/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Reações dos clientes',
    size: 'lg',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const Secondary: StoryObj<HeadingProps> = {
  args: {
    children: 'Avaliações e Comentários',
    size: 'sm',
    as: 'h3',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o subtitle sempre será um `h3`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}