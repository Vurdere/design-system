import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Pills = styled('button', {
  all: 'unset',
  fontSize: '$sm',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 150,
  height: 40,
  boxSizing: 'border-box',
  transition: 'all ease .25s',
  color: '$text',
  borderRadius: '$full',
  border: '1px solid $lines',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$inative',
    color: '$textInative'
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$primaryHover'
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$white',
      },

      secondary: {
        backgroundColor: '$primaryHover',
        cursor: 'inherit',
      },
    },
  },

  defaultVariants: {
    variant: 'primary'
  }
})

export interface PillsProps extends ComponentProps<typeof Pills> {
  as?: ElementType
}

Pills.displayName = 'Pills'
