function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set(nums1);
  const res = new Set<number>();

  nums2.forEach((val) => {
    if (set.has(val)) {
      res.add(val);
    }
  });

  return [...res];
}
// function intersection(nums1: number[], nums2: number[]): number[] {
//   function binarySearch(nums: number[], target: number) {
//     let l = 0,
//       r = nums.length - 1;

//     while (l <= r) {
//       const mid = l + Math.floor((r - l) / 2);

//       if (nums[mid] === target) return true;
//       if (nums[mid] < target) {
//         l = mid + 1;
//       } else {
//         r = mid - 1;
//       }
//     }
//   }
//   nums2.sort((a, b) => a - b);
//   return [...new Set(nums1).values()].filter((val) => binarySearch(nums2, val));
// }
