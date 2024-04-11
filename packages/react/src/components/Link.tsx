import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Link = styled('a', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  textDecoration: 'underline',
  color: '$text',
  cursor: 'pointer',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface LinkProps extends ComponentProps<typeof Link> {
  as?: ElementType
}

Link.displayName = 'Link'
