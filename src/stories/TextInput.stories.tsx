import type { StoryObj, Meta } from '@storybook/react'

import { TextInput, TextInputProps } from '../components/TextInput'

export default {
  title: 'Forms/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Inscreva-se',
  },
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}
