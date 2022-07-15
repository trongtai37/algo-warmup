function replaceElements(arr: number[]): number[] {
  let max = arr[arr.length - 1];
  let i = arr.length - 1;

  arr[i] = -1;
  i--;

  while (i >= 0) {
    const val = arr[i];
    arr[i] = max;
    max = Math.max(val, max);
    i--;
  }

  return arr;
}
