import React from 'react';
import { render } from '@testing-library/react';
import { HomeAboutUs } from '@/widgets/HomeAboutUs';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('HomeAboutUs tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<HomeAboutUs />);
    expect(container).toMatchSnapshot();
  });
});
