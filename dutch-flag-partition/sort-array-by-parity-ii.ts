function sortArrayByParityII(nums: number[]): number[] {
  let boundary = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      const temp = nums[i];
      nums[i] = nums[boundary];
      nums[boundary++] = temp;
    }
  }

  let l = 1, r = nums.length - 1;
  if (r % 2 === 1) r--;
  while (l < r) {
    const temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l += 2;
    r -= 2;
  }

  return nums;
};