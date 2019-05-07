/**
 * @param input Your searching string
 * @param list List of available completion possibilities
 */
export default (input: string, list: string[]) => {
  const suggestionIndex = list.findIndex(item =>
    item.toLowerCase().includes(input.toLowerCase())
  );

  return {
    suggestion: list[suggestionIndex],
    suggestionIndex,
    completion:
      list[suggestionIndex] && list[suggestionIndex].slice(input.length)
  };
};
