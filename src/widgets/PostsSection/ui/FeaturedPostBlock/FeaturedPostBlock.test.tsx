import React from 'react';
import { render } from '@testing-library/react';
import { FeaturedPostBlock } from '@/widgets/PostsSection/ui/FeaturedPostBlock';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('FeaturedPostBlock tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<FeaturedPostBlock />);
    expect(container).toMatchSnapshot();
  });
});
