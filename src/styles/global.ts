import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  '@font-face': [
    {
      fontFamily: 'Helvetica',
      src: 'url(/fonts/helvetica/Helvetica.woff2) format("woff2")',
      fontWeight: 400,
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
    {
      fontFamily: 'Druck',
      src: 'url(/fonts/druk/Druk-Bold.woff2) format("woff2")',
      fontWeight: 700,
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
  ],

  body: {
    fontFamily: 'Helvetica, sans-serif',
    '-webkit-font-smoothing': 'antialiazed',
  },
})
