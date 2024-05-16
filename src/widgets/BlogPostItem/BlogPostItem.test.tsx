import React from 'react';
import { render } from '@testing-library/react';
import { BlogPostItem } from '@/widgets/BlogPostItem';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('BlogPostItem tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<BlogPostItem postId={1} />);
    expect(container).toMatchSnapshot();
  });
});
