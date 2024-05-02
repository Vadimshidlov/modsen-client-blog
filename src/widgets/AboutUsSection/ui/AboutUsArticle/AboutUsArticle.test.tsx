import React from 'react';
import { render } from '@testing-library/react';
import { AboutUsArticle } from '@/widgets/AboutUsSection/ui/AboutUsArticle';

describe('AboutUsArticle component tests', () => {
  const title = 'Title';
  const subTitle = 'Subtitle';
  const text = 'Text content';

  test('should renders with correct content', () => {
    const { getByText } = render(<AboutUsArticle title={title} subTitle={subTitle} text={text} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subTitle)).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { asFragment } = render(<AboutUsArticle title={title} subTitle={subTitle} text={text} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
