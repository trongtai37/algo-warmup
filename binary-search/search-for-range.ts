function searchRange(
  nums: number[],
  target: number
): readonly [number, number] {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] >= target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  const leftIndex = nums[l] === target ? l : -1;
  if (leftIndex < 0) return [-1, -1];

  r = nums.length - 1;
  while (l < r) {
    const mid = l + Math.ceil((r - l) / 2);

    if (nums[mid] <= target) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }

  return [leftIndex, l];
}

// function searchRange(
//   nums: number[],
//   target: number
// ): readonly [number, number] {
//   function spread(index: number) {
//     let left = index,
//       right = index;
//     while (nums[left - 1] === nums[index]) {
//       left--;
//     }
//     while (nums[right + 1] === nums[index]) {
//       right++;
//     }
//     return [left, right] as const;
//   }

//   let l = 0,
//     r = nums.length - 1;
//   while (l <= r) {
//     const mid = l + Math.floor((r - l) / 2);

//     if (nums[mid] === target) return spread(mid);

//     if (nums[mid] > target) {
//       r = mid - 1;
//     } else {
//       l = mid + 1;
//     }
//   }

//   return [-1, -1];
// }
