import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    isFormButton: { control: 'boolean' },
    isPrimary: { control: 'boolean' },
    children: { control: 'text' },
    type: {
      options: ['button', 'reset', 'submit'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    isPrimary: true,
    type: 'button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    isPrimary: false,
    type: 'button',
  },
};
