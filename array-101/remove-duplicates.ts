function removeDuplicates(nums: number[]): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      continue;
    }

    nums[k++] = nums[i];
  }

  return k;
}
