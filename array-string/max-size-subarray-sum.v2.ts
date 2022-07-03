function minSubArrayLenV2(target: number, nums: number[]): number {
  let left = 0, sum = 0, ans = Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      ans = Math.min(i + 1 - left, ans);
      sum -= nums[left];
      left++;
    }
  }

  return ans === Infinity ? 0 : ans;
};