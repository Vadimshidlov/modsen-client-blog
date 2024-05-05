import React from 'react';
import { render } from '@testing-library/react';
import { StartUpSection } from '@/widgets/StartUpSection/ui/StartUpSection';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('StartUpSection tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<StartUpSection />);
    expect(container).toMatchSnapshot();
  });
});
