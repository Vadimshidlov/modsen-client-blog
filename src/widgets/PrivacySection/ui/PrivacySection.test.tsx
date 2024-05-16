import React from 'react';
import { render } from '@testing-library/react';
import { PrivacySection } from '@/widgets/PrivacySection';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('PrivacySection tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<PrivacySection />);
    expect(container).toMatchSnapshot();
  });
});
