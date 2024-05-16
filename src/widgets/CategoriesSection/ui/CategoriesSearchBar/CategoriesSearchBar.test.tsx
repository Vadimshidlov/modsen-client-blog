import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { CategoriesSearchBar } from '@/widgets/CategoriesSection/ui/CategoriesSearchBar';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('CategoriesSearchBar tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<CategoriesSearchBar />);
    expect(container).toMatchSnapshot();
  });

  test('should renders search input correctly', () => {
    const { getByTestId } = render(<CategoriesSearchBar />);

    expect(getByTestId('searchTag-input')).toBeInTheDocument();
  });

  test('should updates search value correctly', async () => {
    const { getByTestId } = render(<CategoriesSearchBar />);
    const searchInput = getByTestId('searchTag-input');

    fireEvent.change(searchInput, { target: { value: 'Tag1' } });
    await waitFor(() => expect(searchInput).toHaveValue('Tag1'));
  });

  test('should renders "Posts not found" message correctly', async () => {
    const { getByTestId } = render(<CategoriesSearchBar />);
    const searchInput = getByTestId('searchTag-input');

    fireEvent.change(searchInput, { target: { value: 'Tag4' } });

    await waitFor(() => {
      expect(getByTestId('not-found-posts')).toBeInTheDocument();
    });
  });
});
