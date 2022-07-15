function solveSudoku(board: string[][]): void {
  const n = board.length;
  const holes: number[][] = [];
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === '.') holes.push([i, j]);
    });
  });

  function isValid(c: string): boolean {
    const [[x, y]] = holes;
    for (let i = 0; i < n; i++) {
      if (
        (board[x][i] === c && y !== i) ||
        (board[i][y] === c && x !== i)
      ) {
        return false;
      }
    }

    const [xTopLeft, yTopLeft] = [x, y].map((k) => k - (k % 3));

    for (let i = xTopLeft; i < xTopLeft + Math.floor(Math.sqrt(n)); i++) {
      for (let j = yTopLeft; j < yTopLeft + Math.floor(Math.sqrt(n)); j++) {
        if (!(i === x && j === y) && c === board[i][j]) {
          return false;
        }
      }
    }

    return true;
  }

  function backtrack() {
    if (!holes.length) {
      return true;
    }

    for (let j = 1; j <= 9; j++) {
      if (isValid(String(j))) {
        const [x, y] = holes.shift()!;
        board[x][y] = String(j);

        const isEnd = backtrack();
        if (isEnd) {
          return true;
        }

        holes.unshift([x, y]);
        board[x][y] = '.';
      }
    }

    return false;
  }

  backtrack();
}

