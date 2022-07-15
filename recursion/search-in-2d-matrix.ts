function searchMatrix(
  matrix: number[][],
  target: number,
  topLeft: number[] = [0, 0],
  rightBottom: number[] = [matrix.length - 1, matrix[0].length - 1]
): boolean {
  const [x, y] = topLeft;
  const [m, n] = rightBottom;

  if (x > m || y > n) return false;
  if (x === m && y === n) return matrix[x][y] === target;

  const i = x + Math.floor((m - x) / 2);
  const j = y + Math.floor((n - y) / 2);

  if (matrix[i][j] === target) return true;

  if (matrix[i][j] > target) {
    return (
      searchMatrix(matrix, target, [x, y], [i - 1, j - 1]) ||
      searchMatrix(matrix, target, [i, y], [m, j - 1]) ||
      searchMatrix(matrix, target, [x, j], [i - 1, n])
    )
  }

  return (
    searchMatrix(matrix, target, [i + 1, j + 1], [m, n]) ||
    searchMatrix(matrix, target, [i + 1, y], [m, j]) ||
    searchMatrix(matrix, target, [x, j + 1], [i, n])
  )
};

console.log(searchMatrix([[-1, 3]],
  3))