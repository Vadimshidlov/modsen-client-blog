import { render } from '@testing-library/react';
import { AboutUsMission } from '@/widgets/AboutUsSection/ui/AboutUsMission';

jest.mock('next/font/google', () => ({
  Inter: () => ({ variable: 'fake-variable' }),
}));

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('AboutUsMission component tests', () => {
  test('renders mission and vision sections with correct content', () => {
    const { getByText } = render(<AboutUsMission />);

    expect(getByText('Mocked missionTitle')).toBeInTheDocument();
    expect(getByText('Mocked visionTitle')).toBeInTheDocument();
  });

  test('should matches snapshot', () => {
    const { asFragment } = render(<AboutUsMission />);

    expect(asFragment()).toMatchSnapshot();
  });
});
