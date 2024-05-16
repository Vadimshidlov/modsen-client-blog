import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/widgets/Header';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import '@/shared/styles/globals.scss';

const meta: Meta<typeof Header> = {
  component: Header,
  decorators: [
    (Story) => (
      <NextIntlClientProvider messages={messages} locale="en">
        <Story />
      </NextIntlClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
