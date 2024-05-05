import { render } from '@testing-library/react';
import { ContactsSection } from '@/widgets/ContactsSection';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('ChooseCategorySection tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<ContactsSection />);
    expect(container).toMatchSnapshot();
  });
});
