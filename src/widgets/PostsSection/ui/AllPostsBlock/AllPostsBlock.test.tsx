import React from 'react';
import { render } from '@testing-library/react';
import { AllPostsBlock } from '@/widgets/PostsSection/ui/AllPostsBlock';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('AllPostsBlock tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<AllPostsBlock />);
    expect(container).toMatchSnapshot();
  });
});
