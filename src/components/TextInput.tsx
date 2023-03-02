import { ComponentProps } from 'react'

import { styled } from '../styles'

export const TextInput = styled('input', {
  backgroundColor: '$white',
  border: '2px solid $black',
  padding: '$2 $3',

  fontFamily: '$default',
  fontSize: '$lg',
  color: '$black',
  fontWeight: '$regular',

  '&:focus': {
    outline: 0,
    boxShadow: '0 0 0 2px $colors$yellow500',
  },

  '&:disabled': {
    color: '$gray400',
  },

  '&::placeholder': {
    color: '$gray300',
  },
})
TextInput.displayName = 'TextInput'

export interface TextInputProps extends ComponentProps<typeof TextInput> {}
