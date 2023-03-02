import { Check } from 'phosphor-react'

import { styled } from '../styles'
import { Button } from './Button'
import { TextInput } from './TextInput'

export function FormExemple() {
  return (
    <Container>
      <div>
        <TextInput placeholder="Inscreva-se" />
        <Button type="submit">
          <Check />
        </Button>
      </div>
    </Container>
  )
}

export const Container = styled('form', {
  backgroundColor: '$white',
  width: '100%',
  height: '100%',
  padding: '0 $10',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  div: {
    width: '100%',
    maxWidth: 500,

    display: 'flex',

    [`> ${TextInput}`]: {
      width: '100%',
    },
  },
})
