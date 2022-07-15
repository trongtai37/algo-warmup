function findMaxConsecutiveOnes(nums: number[]): number {
  let max = -Infinity;
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      temp = 0;
    } else {
      temp++;
    }
    max = Math.max(temp, max);
  }

  return max;
}
