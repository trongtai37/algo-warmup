function generate(numRows: number): number[][] {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const prevRows = generate(numRows - 1);
  const lastRow = prevRows[prevRows.length - 1];
  const newRow: number[] = [];
  newRow.push(1);
  lastRow.forEach((num, index) => {
    if (index > 0) {
      newRow.push(num + lastRow[index - 1])
    }
  });
  newRow.push(1);

  return prevRows.concat([newRow]);
};

console.log(generate(5))