function findDiagonalOrder(mat: number[][]): number[] {
  let i = 0, j = 0;
  let direction: 'up' | 'down' = 'up';
  const res: number[] = [], row = mat.length - 1, col = mat[0].length - 1;

  while (true) {
    res.push(mat[i][j]);
    if (i === row && j === col) return res;

    if (direction === 'up') {
      if (j === col) {
        i += 1;
        direction = 'down';
        continue;
      }

      if (i === 0) {
        j += 1;
        direction = 'down';
        continue;
      }

      i -= 1;
      j += 1;
      continue;
    }

    if (direction === 'down') {
      if (i === row) {
        direction = 'up';
        j += 1;
        continue;
      }

      if (j === 0) {
        direction = 'up';
        i += 1;
        continue;
      }

      i += 1;
      j -= 1;
      continue;
    }
  }
};

console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))