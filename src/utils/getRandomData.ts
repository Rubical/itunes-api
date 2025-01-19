type TypeData<T> = {
  resultCount: number;
  results: T[];
};

export function getRandomData<T>(
  data: TypeData<T> | undefined,
  limit: number
): T[] {
  if (!data) {
    return [];
  }
  const { resultCount, results } = data;

  if (resultCount > limit) {
    return [...results].sort(() => Math.random() - 0.5).slice(0, limit);
  }

  return results;
}
