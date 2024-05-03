import React from 'react';
import { render } from '@testing-library/react';
import { AllPostSection } from '@/widgets/BlogSection/ui/AllPostSection';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('AllPostSection tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<AllPostSection />);
    expect(container).toMatchSnapshot();
  });

  test('should renders pagination buttons correctly', () => {
    const { getByTestId } = render(<AllPostSection />);

    expect(getByTestId('prevButton')).toBeInTheDocument();
    expect(getByTestId('nextButton')).toBeInTheDocument();
  });

  test('should disables prev button on first page', () => {
    const { getByTestId } = render(<AllPostSection />);

    const prevButton = getByTestId('prevButton');
    expect(prevButton).toHaveAttribute('disabled');
  });

  test('should enables next button on first page', () => {
    const { getByTestId } = render(<AllPostSection />);

    const nextButton = getByTestId('nextButton');
    expect(nextButton).not.toHaveAttribute('disabled');
  });
});
