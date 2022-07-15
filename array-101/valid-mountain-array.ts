function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) {
    return false;
  }

  let l = 0,
    r = arr.length - 1;

  while (l < arr.length - 2 && arr[l] < arr[l + 1]) {
    l++;
  }

  while (r > 1 && arr[r] < arr[r - 1]) {
    r--;
  }

  return l === r;
}
