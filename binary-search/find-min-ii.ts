function findMin(nums: number[]): number {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else if (nums[mid] < nums[r]) {
      r = mid;
    } else {
      r--;
    }
  }

  return nums[l];
}

console.log(findMin([10, 10, 10, 1, 10]));
