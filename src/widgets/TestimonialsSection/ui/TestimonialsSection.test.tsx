import { render } from '@testing-library/react';
import { TestimonialsSection } from '@/widgets/TestimonialsSection/';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('TestimonialsSection tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<TestimonialsSection />);
    expect(container).toMatchSnapshot();
  });
});
