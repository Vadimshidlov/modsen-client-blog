import React from 'react';
import { render } from '@testing-library/react';
import { PostItem } from '@/widgets/PostsSection/ui/PostItem';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('PostItem tests', () => {
  const postDate = '26 May, 2023';
  const authorName = 'John Doe';
  const postText = 'Post Text';

  test('should matches snapshot', () => {
    const { container } = render(
      <PostItem postDate={postDate} postText={postText} authorName={authorName} />,
    );
    expect(container).toMatchSnapshot();
  });
});
