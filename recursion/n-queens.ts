function totalNQueens(n: number): number {
  const matrix = new Array(n).fill(true).map(() => new Array(n).fill(0));

  function isNotUnderAttack(row, col) {
    return matrix[row][col] === 0;
  }

  function placeQueen(row, col): () => void {
    const res: Array<[number, number]> = [];
    const directions = [
      [-1, -1], // up-left
      [1, 1], // down-right
      [-1, 1], // up-right
      [1, -1], // down-left
      [0, -1], // left
      [0, 1], // right
      [-1, 0], // down
      [1, 0], // up
    ];

    let factor = 0;
    while (true) {
      let done = true;
      const nextPoints = directions.map(([x, y]) => [
        row + x * factor,
        col + y * factor,
      ]);
      nextPoints.forEach(([i, j]) => {
        if (i >= 0 && i < n && j >= 0 && j < n) {
          if (matrix[i][j] === 0) res.push([i, j]);
          matrix[i][j] = 1;
          done = false;
        }
      });
      factor++;
      if (done) break;
    }

    return () => res.forEach(([i, j]) => (matrix[i][j] = 0));
  }

  function backtrackNQueens(row = 0, count = 0) {
    for (let col = 0; col < n; col++) {
      if (isNotUnderAttack(row, col)) {
        const removeQueen = placeQueen(row, col);
        if (row === n - 1) {
          count++;
        } else {
          count = backtrackNQueens(row + 1, count);
        }
        removeQueen();
      }
    }
    return count;
  }

  return backtrackNQueens();
}
