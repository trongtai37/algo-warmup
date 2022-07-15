function moveZeroes(nums: number[]): void {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[k];
      nums[k++] = nums[i];
      nums[i] = temp;
    }
  }
}
