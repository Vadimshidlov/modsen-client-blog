import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';
import { ConversationForm } from '@/features/ConversationForm';
import '@/shared/styles/globals.scss';
import messages from '../../../../messages/en.json';

const meta: Meta<typeof ConversationForm> = {
  component: ConversationForm,
  decorators: [
    (Story) => (
      <NextIntlClientProvider messages={messages} locale="en">
        <Story />
      </NextIntlClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ConversationForm>;

export const Primary: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
