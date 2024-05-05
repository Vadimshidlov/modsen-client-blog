import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { FeedBackSwiper } from '@/widgets/TestimonialsSection/ui/FeedBackSwiper';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('FeedBackSwiper tests', () => {
  test('should matches snapshot', () => {
    const { container } = render(<FeedBackSwiper />);
    expect(container).toMatchSnapshot();
  });

  test('should switch to next slide when next button is clicked', () => {
    const { getByTestId } = render(<FeedBackSwiper />);
    const nextButton = getByTestId('swiper-right-button');
    const swiperBlock = getByTestId('swiper-block');

    expect(swiperBlock).toHaveStyle({ transform: 'translateX(0%)' });

    fireEvent.click(nextButton);

    expect(swiperBlock).toHaveStyle({ transform: 'translateX(-100%)' });

    fireEvent.click(nextButton);

    expect(swiperBlock).toHaveStyle({ transform: 'translateX(-200%)' });
  });

  test('should switch to previous slide when previous button is clicked', () => {
    const { getByTestId } = render(<FeedBackSwiper />);
    const nextButton = getByTestId('swiper-left-button');
    const swiperBlock = getByTestId('swiper-block');

    expect(swiperBlock).toHaveStyle({ transform: 'translateX(0%)' });

    fireEvent.click(nextButton);

    expect(swiperBlock).toHaveStyle({ transform: 'translateX(-200%)' });

    fireEvent.click(nextButton);

    expect(swiperBlock).toHaveStyle({ transform: 'translateX(-100%)' });
  });
});
