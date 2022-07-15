function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const sol: number[] = [];

  function backtrack(i: number = 0) {
    if (sol.length === k) {
      res.push([...sol]);
      return;
    }

    for (let j = i + 1; j <= n; j++) {
      if (!sol.includes(j)) {
        sol.push(j)
        backtrack(j);
        sol.pop();
      }
    }
  }

  backtrack();
  return res;
};