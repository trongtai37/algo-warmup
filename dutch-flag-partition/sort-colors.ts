/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let boundary = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[i] = nums[boundary];
      nums[boundary++] = 0;
    }
  }

  boundary = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 2) {
      nums[i] = nums[boundary];
      nums[boundary--] = 2;
    }
  }
};