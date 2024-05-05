import React from 'react';
import { render } from '@testing-library/react';
import { SpecialPost } from '@/widgets/SpecialPostSection/ui/SpecialPost';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('SpecialPost tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<SpecialPost />);
    expect(container).toMatchSnapshot();
  });
});
