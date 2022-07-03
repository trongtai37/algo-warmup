interface Point {
  x: number;
  y: number;
}

function spiralOrder(matrix: number[][]): number[] {
  let topLeft: Point = { x: 0, y: 0 }, bottomRight: Point = { x: matrix.length - 1, y: matrix[0].length - 1 };
  const res: number[] = [];

  while (topLeft.x < bottomRight.x && topLeft.y < bottomRight.y) {
    let { x, y } = topLeft;

    while (y < bottomRight.y) {
      res.push(matrix[x][y++]);
    }

    while (x < bottomRight.x) {
      res.push(matrix[x++][y])
    }

    while (y > topLeft.y) {
      res.push(matrix[x][y--])
    }

    while (x > topLeft.x) {
      res.push(matrix[x--][y])
    }

    topLeft.x++;
    topLeft.y++;
    bottomRight.x--;
    bottomRight.y--
  }

  if (topLeft.x === bottomRight.x) {
    return res.concat(matrix[topLeft.x].slice(topLeft.y, bottomRight.y + 1))
  }

  if (topLeft.y === bottomRight.y) {
    let x = topLeft.x;
    while (x <= bottomRight.x) {
      res.push(matrix[x++][topLeft.y])
    }
    return res;
  }

  return res;
};