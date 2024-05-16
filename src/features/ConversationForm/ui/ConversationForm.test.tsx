import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { ConversationForm } from '@/features/ConversationForm';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('ConversationForm component', () => {
  test('should matches snapshot', () => {
    const { container } = render(<ConversationForm />);
    expect(container).toMatchSnapshot();
  });

  it('should display validation errors if form fields are empty', async () => {
    const { getByText, getByRole } = render(<ConversationForm />);

    const submitButton = getByRole('button');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('Name is required!')).toBeInTheDocument();
      expect(getByText('Email is required!')).toBeInTheDocument();
      expect(getByText('Message is required!')).toBeInTheDocument();
    });
  });

  it('should not render form errors with valid data', async () => {
    const { getByTestId, queryByText } = render(<ConversationForm />);

    const nameInput = getByTestId('userName-input');
    const emailInput = getByTestId('email-input');
    const messageInput = getByTestId('message-input');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message' } });

    await waitFor(() => {
      expect(queryByText('Name is too short')).toBeNull();
      expect(queryByText('Invalid email')).toBeNull();
      expect(queryByText('Message is too short')).toBeNull();
    });
  });
});
