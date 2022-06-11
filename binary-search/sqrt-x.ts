function mySqrt(x: number): number {
  let l = 0,
    r = x;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square > x) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return l - 1;
}
