import React from 'react';
import { render } from '@testing-library/react';
import { Categories } from '@/widgets/CategoriesSection/ui/Categories';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('Categories tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<Categories />);
    expect(container).toMatchSnapshot();
  });
});
