import { getCapitalizeWord } from '@/shared/utils';

describe('getCapitalizeWord tests', () => {
  test('should returns a string with the first letter capitalized', () => {
    const word = 'example';
    const capitalizedWord = getCapitalizeWord(word);
    expect(capitalizedWord).toEqual('Example');
  });

  test('should handles single letter string', () => {
    const word = 'a';
    const capitalizedWord = getCapitalizeWord(word);
    expect(capitalizedWord).toEqual('A');
  });

  test('should handles string with all capital letters', () => {
    const word = 'EXAMPLE';
    const capitalizedWord = getCapitalizeWord(word);
    expect(capitalizedWord).toEqual('Example');
  });

  test('should handles string with non-alphabetic characters', () => {
    const word = '123example';
    const capitalizedWord = getCapitalizeWord(word);
    expect(capitalizedWord).toEqual('123example');
  });
});
