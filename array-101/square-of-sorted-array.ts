// function merge(nums1: number[], nums2: number[]): number[] {
//   let p1 = 0,
//     p2 = 0;
//   const res: number[] = [];

//   while (p1 < nums1.length && p2 < nums2.length) {
//     if (nums1[p1] < nums2[p2]) {
//       res.push(nums1[p1]);
//       p1++;
//     } else {
//       res.push(nums2[p2]);
//       p2++;
//     }
//   }

//   return res.concat(nums1.slice(p1)).concat(nums2.slice(p2));
// }

// function sortedSquares(nums: number[]): number[] {
//   let firstPositiveIndex = nums.findIndex((n) => n >= 0);
//   if (firstPositiveIndex < 0) firstPositiveIndex = nums.length;
//   const negativePart = nums
//     .slice(0, firstPositiveIndex)
//     .map((x) => x * x)
//     .reverse();
//   const positivePart = nums.slice(firstPositiveIndex).map((x) => x * x);

//   return merge(negativePart, positivePart);
// }

// console.log(sortedSquares([-10000, -1, 0, 3, 10000]));

function sortedSquares(nums: number[]): number[] {
  let l = 0,
    r = nums.length - 1;
  const res: number[] = [];

  while (l <= r) {
    const squaredLeft = nums[l] * nums[l];
    const squaredRight = nums[r] * nums[r];
    if (squaredLeft > squaredRight) {
      res.unshift(squaredLeft);
      l++;
    } else {
      res.unshift(squaredRight);
      r--;
    }
  }

  return res;
}
