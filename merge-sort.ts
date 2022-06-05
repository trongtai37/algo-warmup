const merge = (leftArr: number[], rightArr: number[]) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  return result
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
};

export const mergeSort = (arr: number[]): number[] => {
  const l = 0;
  const r = arr.length;

  if (r === 1) return arr;

  const mid = Math.floor((l + r) / 2);

  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));

  return merge(leftArr, rightArr);
};

console.log(mergeSort([3, 2, 5, 6, 8, 2, 11, 7, 9]));
