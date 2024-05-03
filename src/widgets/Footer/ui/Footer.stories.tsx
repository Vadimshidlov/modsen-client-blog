import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@/widgets/Footer';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import '@/shared/styles/globals.scss';

const meta: Meta<typeof Footer> = {
  component: Footer,
  decorators: [
    (Story) => (
      <NextIntlClientProvider messages={messages} locale="en">
        <Story />
      </NextIntlClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
