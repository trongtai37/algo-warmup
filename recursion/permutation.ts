function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const part: number[] = [];

  function isValid(num: number) {
    return !part.includes(num);
  }

  function backtrack() {
    if (part.length === nums.length) {
      res.push([...part]);
      return;
    }

    for (const num of nums) {
      if (isValid(num)) {
        part.push(num);
        backtrack();
        part.pop();
      }
    }
  }

  backtrack();

  return res;
};