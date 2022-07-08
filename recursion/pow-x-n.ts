function myPow(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x;
    n = Math.abs(n);
  }

  if (n == 0) return 1;
  const half = Math.floor(n / 2);
  const carry = n % 2;

  const halfPow = myPow(x, half);
  return halfPow * halfPow * (carry === 1 ? x : 1)
};