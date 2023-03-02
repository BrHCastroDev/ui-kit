import type { StoryObj, Meta } from '@storybook/react'
import { Check } from 'phosphor-react'

import { Button, ButtonProps } from '../components/Button'

export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'primary',
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'md',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    css: {
      control: {
        type: null,
      },
    },
    as: {
      control: {
        type: null,
      },
    },
    ref: {
      control: {
        type: null,
      },
    },
    children: {
      name: 'Title',
      description: 'Button title',
      type: 'string',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: <Check />,
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Fale conosco pelo Whatsapp',
  },
}
