import { render } from '@testing-library/react';
import { AboutUsTeam } from '@/widgets/AboutUsSection/ui/AboutUsTeam';

jest.mock('next/font/google', () => ({
  Inter: () => ({ variable: 'fake-variable' }),
}));

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('AboutUsTeam tests', () => {
  test('renders article section with correct data', () => {
    const { getByText } = render(<AboutUsTeam />);

    expect(getByText('Mocked title')).toBeInTheDocument();
    expect(getByText('Mocked subTitle')).toBeInTheDocument();
  });

  test('renders image with correct alt text', () => {
    const { getByAltText } = render(<AboutUsTeam />);

    expect(getByAltText('author-avatar')).toBeInTheDocument();
  });

  test('should matches snapshot', () => {
    const { container } = render(<AboutUsTeam />);
    expect(container).toMatchSnapshot();
  });
});
