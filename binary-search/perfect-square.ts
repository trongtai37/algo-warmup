function isPerfectSquare(n: number): boolean {
  let l = 1,
    r = n;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const square = mid * mid;

    if (square === n) return true;

    if (square < n) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
}
