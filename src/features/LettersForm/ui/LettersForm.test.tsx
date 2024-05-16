import React from 'react';
import { render } from '@testing-library/react';
import { LettersForm } from '@/features/LettersForm';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('LettersForm component', () => {
  test('should matches snapshot', () => {
    const { container } = render(<LettersForm />);
    expect(container).toMatchSnapshot();
  });
});
