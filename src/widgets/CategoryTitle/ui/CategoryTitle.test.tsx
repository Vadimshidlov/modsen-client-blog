import React from 'react';
import { render } from '@testing-library/react';
import { CategoryTitle } from '@/widgets/CategoryTitle';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('SearchTags tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<CategoryTitle categoryName="Buisiness" />);
    expect(container).toMatchSnapshot();
  });

  test('renders category title correctly', () => {
    const { getByText } = render(<CategoryTitle categoryName="category" />);

    expect(getByText('Mocked Category')).toBeInTheDocument();
  });

  test('renders category description correctly', () => {
    const { getByText } = render(<CategoryTitle categoryName="category" />);

    expect(
      getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      ),
    ).toBeInTheDocument();
  });

  test('renders category path correctly', () => {
    const { getByText } = render(<CategoryTitle categoryName="category" />);

    expect(getByText('BLOG > MOCKED CATEGORY')).toBeInTheDocument();
  });
});
