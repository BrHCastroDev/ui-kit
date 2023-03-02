import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',

  minWidth: 100,
  boxSizing: 'border-box',
  padding: '0 $4',

  fontFamily: '$default',
  fontWeight: '$regular',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',
  transition: 'filter 0.2s',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '0.6',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$yellow500',
  },

  svg: {
    width: '$6',
    height: '$6',
    color: 'inherit',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$black',
        color: '$white',

        '&:not(:disabled):hover': {
          filter: 'brightness(2)',
        },
      },
      secondary: {
        backgroundColor: '$green500',
        color: '$white',
        borderRadius: '$full',

        '&:not(:disabled):hover': {
          filter: 'brightness(0.8)',
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})
Button.displayName = 'Button'

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
  href?: string
  rel?: string
}
