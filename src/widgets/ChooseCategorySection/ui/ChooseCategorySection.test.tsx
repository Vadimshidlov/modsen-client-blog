import { render } from '@testing-library/react';
import { ChooseCategorySection } from '@/widgets/ChooseCategorySection';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('ChooseCategorySection tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<ChooseCategorySection />);
    expect(container).toMatchSnapshot();
  });
});
