function getRow(rowIndex: number): number[] {
  const factor = [1];
  for (let i = 1; i <= rowIndex; i++) {
    factor[i] = factor[i - 1] * i;
  }

  function c(k, n) {
    return factor[n] / (factor[k] * factor[n - k])
  }

  return new Array(rowIndex + 1).fill(true).map((_, index) => c(index, rowIndex));
};