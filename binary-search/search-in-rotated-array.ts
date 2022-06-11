function search(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1,
    n = nums.length;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  const minIndex = r;
  l = 0;
  r = n - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const realMid = (mid + minIndex) % n;

    if (nums[realMid] === target) return realMid;

    if (nums[realMid] < target) l = mid + 1;
    else r = mid - 1;
  }

  return -1;
}

// function search(nums: number[], target: number): number {
//   let l = 0,
//     r = nums.length - 1,
//     n = nums.length;

//   while (l < r) {
//     const mid = l + Math.floor((r - l) / 2);

//     if (nums[mid] > nums[r]) {
//       l = mid + 1;
//     } else {
//       r = mid;
//     }
//   }
//   const minIndex = r;
//   l = 0;
//   r = n - 1;

//   while (l <= r) {
//     const mid = l + Math.floor((r - l) / 2);

//     if (nums[mid] === target) return mid;

//     if (nums[l] > nums[r]) {
//       if (target >= nums[l]) {
//         r = minIndex - 1;
//       } else {
//         l = minIndex;
//       }
//     } else {
//       if (nums[mid] > target) {
//         r = mid - 1;
//       } else {
//         l = mid + 1;
//       }
//     }
//   }

//   return -1;
// }
