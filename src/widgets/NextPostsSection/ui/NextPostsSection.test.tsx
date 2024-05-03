import React from 'react';
import { render } from '@testing-library/react';
import { NextPostsSection } from '@/widgets/NextPostsSection';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('NavigationBar tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<NextPostsSection activePostId={1} />);
    expect(container).toMatchSnapshot();
  });
});
