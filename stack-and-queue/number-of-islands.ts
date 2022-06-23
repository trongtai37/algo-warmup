function numIslands(grid: string[][]): number {
  const visited = grid.map(row => new Array(row.length).fill(false));

  function traverse(i: number, j: number) {
    visited[i][j] = true;
    const increment = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (const [incrementX, incrementY] of increment) {
      const newI = i + incrementX;
      const newJ = j + incrementY;

      if (!visited[newI]?.[newJ] && grid[newI]?.[newJ] === '1') {
        traverse(newI, newJ);
      }
    }
  }
  let count = 0;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === '1' && !visited[x][y]) {
        count++;
        traverse(x, y);
      }
    }
  }

  return count;
};