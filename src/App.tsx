import { Check } from 'phosphor-react'

import { Button } from './components/Button'
import { TextInput } from './components/TextInput'
import { styled } from './styles'

export function App() {
  return (
    <Container>
      <main>
        <h1>NOVIDADES</h1>
        <NewsLetterForm>
          <TextInput type="email" placeholder="Inscreva-se" />
          <Button>
            <Check />
          </Button>
        </NewsLetterForm>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cum
          saepe neque cupiditate minima unde doloribus aliquam illum quibusdam
          beatae in deleniti, accusantium voluptatem fugit suscipit tempora
          magnam voluptas ut.
        </p>
      </main>
    </Container>
  )
}

export const Container = styled('div', {
  width: '100%',
  height: '100vh',

  padding: '0 $8',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  main: {
    width: '100%',
    maxWidth: 1381,
    margin: '0 auto',
    height: 700,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    h1: {
      fontFamily: '$heading',
      letterSpacing: '$wide',
      fontSize: '3.4375rem',
      color: '$green',
    },
    p: {
      fontFamily: '$default',
      fontSize: '2.125rem',
      maxWidth: 700,
    },
  },
})

export const NewsLetterForm = styled('form', {
  width: '100%',
  maxWidth: 400,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',

  [`> ${TextInput}`]: {
    width: '100%',
  },

  '@media (max-width: 640px)': {
    [`> ${Button}`]: {
      minWidth: 'unset',
    },
  },
})
