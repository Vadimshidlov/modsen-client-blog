import React from 'react';
import { render } from '@testing-library/react';
import { LogosSection } from '@/widgets/LogosSection';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('LogosSection tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<LogosSection />);
    expect(container).toMatchSnapshot();
  });
});
