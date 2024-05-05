import { render } from '@testing-library/react';
import { AboutUsTitle } from '@/widgets/AboutUsSection/ui/AboutUsTitle';

jest.mock('next/font/google', () => ({
  Inter: () => ({ variable: 'fake-variable' }),
}));

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('AboutUsTitle tests', () => {
  test('renders title and subtitle with correct text content', () => {
    const { getByText } = render(<AboutUsTitle />);

    expect(getByText('Mocked subTitle')).toBeInTheDocument();
    expect(getByText('Mocked title')).toBeInTheDocument();
  });

  test('should matches snapshot', () => {
    const { container } = render(<AboutUsTitle />);
    expect(container).toMatchSnapshot();
  });
});
