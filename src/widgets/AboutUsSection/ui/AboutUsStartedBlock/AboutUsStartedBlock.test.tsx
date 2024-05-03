import { render } from '@testing-library/react';
import { AboutUsStartedBlock } from '@/widgets/AboutUsSection/ui/AboutUsStartedBlock';

jest.mock('next/font/google', () => ({
  Inter: () => ({ variable: 'fake-variable' }),
}));

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('AboutUsStartedBlock tests', () => {
  test('should render article section with correct data', () => {
    const { getByText } = render(<AboutUsStartedBlock />);

    expect(getByText('Mocked title')).toBeInTheDocument();
    expect(getByText('Mocked subTitle')).toBeInTheDocument();
  });

  test('should render image with correct alt text', () => {
    const { getByAltText } = render(<AboutUsStartedBlock />);

    expect(getByAltText('author-avatar')).toBeInTheDocument();
  });

  test('should matches snapshot', () => {
    const { container } = render(<AboutUsStartedBlock />);
    expect(container).toMatchSnapshot();
  });
});
