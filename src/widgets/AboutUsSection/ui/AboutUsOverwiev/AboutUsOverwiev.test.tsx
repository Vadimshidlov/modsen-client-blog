import { AboutUsOverwiev } from '@/widgets/AboutUsSection/ui/AboutUsOverwiev';
import { render } from '@testing-library/react';

jest.mock('next/font/google', () => ({
  Inter: () => ({ variable: 'fake-variable' }),
}));

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('AboutUsOverwiev tests', () => {
  test('should render overview section with correct data', () => {
    const { getByAltText, getByText } = render(<AboutUsOverwiev />);

    expect(getByAltText('owerview-image')).toBeInTheDocument();

    expect(getByText('12+')).toBeInTheDocument();
    expect(getByText('Mocked blogsMessage')).toBeInTheDocument();

    expect(getByText('18K+')).toBeInTheDocument();
    expect(getByText('Mocked viewMessage')).toBeInTheDocument();

    expect(getByText('30K+')).toBeInTheDocument();
    expect(getByText('Mocked userMessage')).toBeInTheDocument();
  });

  test('should matches snapshot', () => {
    const { container } = render(<AboutUsOverwiev />);
    expect(container).toMatchSnapshot();
  });
});
