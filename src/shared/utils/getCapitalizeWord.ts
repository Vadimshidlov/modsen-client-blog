export const getCapitalizeWord = (word: string) => {
  const firstLetter = word.toUpperCase()[0];
  const lowerCaseWord = word.toLowerCase().slice(1);

  return firstLetter + lowerCaseWord;
};
