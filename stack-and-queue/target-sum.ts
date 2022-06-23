function findTargetSumWays(nums: number[], target: number): number {
  let count = 0;

  function sumTo(prevSum: number, i: number) {
    const plus = prevSum + nums[i];
    const subtract = prevSum - nums[i];

    if (i === nums.length - 1) {
      plus === target && count++;
      subtract === target && count++;
    } else {
      sumTo(plus, i + 1);
      sumTo(subtract, i + 1);
    }
  }

  sumTo(0, 0)

  return count;
};