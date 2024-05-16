import React from 'react';
import { render } from '@testing-library/react';
import { SearchTags } from '@/widgets/CategoriesSection/ui/SearchTags';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

describe('SearchTags tests', () => {
  test('should matches snapshot', () => {
    const selectTags: string[] = [];
    const setSelectTags = jest.fn();

    const { container } = render(
      <SearchTags selectTags={selectTags} setSelectTags={setSelectTags} />,
    );
    expect(container).toMatchSnapshot();
  });
});
