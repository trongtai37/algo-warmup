function sortArrayByParity(nums: number[]): number[] {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      const temp = nums[k];
      nums[k++] = nums[i];
      nums[i] = temp;
    }
  }

  return nums;
}
