function heightChecker(heights: number[]): number {
  const expected = [...heights].sort((a, b) => a - b);
  let count = 0;

  expected.forEach((expect, index) => {
    if (expect !== heights[index]) count++;
  });

  return count;
}
