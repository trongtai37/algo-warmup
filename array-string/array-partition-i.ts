function arrayPairSum(nums: number[]): number {
  return nums.sort((a, b) => a - b).reduce((sum, x, index) => {
    if (index % 2 === 0) {
      return sum + x;
    }

    return sum;
  }, 0)
};