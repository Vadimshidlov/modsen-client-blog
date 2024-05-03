import { render } from '@testing-library/react';
import { Footer } from '@/widgets/Footer';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('ChooseCategorySection tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
