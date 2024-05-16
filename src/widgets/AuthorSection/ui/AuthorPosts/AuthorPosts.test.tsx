import { render } from '@testing-library/react';
import { AuthorPosts } from '@/widgets/AuthorSection/ui/AuthorPosts';

jest.mock('next/font/google', () => ({
  Inter: () => ({ variable: 'fake-variable' }),
}));

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('AboutUsTitle tests', () => {
  const name = 'John Doe';

  test('should matches snapshot', () => {
    const { container } = render(<AuthorPosts authorName={name} />);
    expect(container).toMatchSnapshot();
  });
});
