// function findPeakElement(nums: number[]): number {
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] > nums[i + 1]) {
//       return i;
//     }
//   }

//   return nums.length - 1;
// }

function findPeakElement(nums: number[]): number {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] > nums[mid + 1]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}
