import { SpecialPostSection } from '@/widgets/SpecialPostSection';
import React from 'react';
import { render } from '@testing-library/react';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('SpecialPostSection tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<SpecialPostSection />);
    expect(container).toMatchSnapshot();
  });
});
