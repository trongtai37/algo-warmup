function duplicateZeros(arr: number[]): void {
  let zeroCount = 0;
  arr.forEach((item) => {
    if (item === 0) zeroCount++;
  });

  let i = arr.length - 1;
  while (i >= 0) {
    if (i + zeroCount <= arr.length - 1) {
      arr[i + zeroCount] = arr[i];
    }
    if (arr[i] === 0) {
      zeroCount--;
      if (i + zeroCount <= arr.length - 1) {
        arr[i + zeroCount] = arr[i];
      }
    }
    i--;
  }
}
