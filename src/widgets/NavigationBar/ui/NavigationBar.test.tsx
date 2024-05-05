import React from 'react';
import { render } from '@testing-library/react';
import { NavigationBar } from '@/widgets/NavigationBar';
import { NAVIGATION_LINKS } from '@/shared/constants/navigationBar';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('NavigationBar tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<NavigationBar navigationLinks={NAVIGATION_LINKS} />);
    expect(container).toMatchSnapshot();
  });
});
