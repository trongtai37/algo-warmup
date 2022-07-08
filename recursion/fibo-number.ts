function fib(n: number): number {
  const memo = [0, 1];
  let i = 2;
  while (i <= n) {
    memo[i] = memo[i - 1] + memo[i - 2];
    i++;
  }

  return memo[n]
};