import React from 'react';
import { render } from '@testing-library/react';
import { BlogFeaturedPost } from '@/widgets/BlogSection/ui/BlogFeaturedPost';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('BlogFeaturedPost tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<BlogFeaturedPost />);
    expect(container).toMatchSnapshot();
  });
});
