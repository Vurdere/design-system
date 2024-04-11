import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  fontSize: '$sm',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 150,
  height: 40,
  boxSizing: 'border-box',
  transition: 'all ease .25s',
  gap: '$2',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  svg: {
    width: '$5',
    height: '$5',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primary',

        '&:not(:disabled):hover': {
          background: '$primaryHover',
        },

        '&:disabled': {
          color: '$textInative',
          backgroundColor: '$inative',
        },
      },

      secondary: {
        color: '$primary',
        border: '2px solid $primary',
        background: 'transparent',

        '&:not(:disabled):hover': {
          background: '$primary',
          color: '$white',
        },

        '&:disabled': {
          color: '$textInative',
          borderColor: '$inative',
        },
      },

      tertiary: {
        color: '$primary',
        textDecoration: 'underline',

        '&:not(:disabled):hover': {
          color: '$primaryHover',
        },

        '&:disabled': {
          color: '$textInative',
        },
      },
    },

    size: {
      sm: {
        width: 150,
      },

      md: {
        width: 240,
      },

      lg: {
        width: 300,
      }
    },


    radius: {
      square: {
        borderRadius: 'none',
      },
      round: {
        borderRadius: '$full'
      },
      custom: {
        borderRadius: '$md'
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'sm',
    radius: 'square',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
