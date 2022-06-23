function twoSum(numbers: number[], target: number): number[] {
  let l = 0,
    r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];

    if (sum > target) r--;
    else l++;
  }

  return [-1, -1];
}

// function twoSum(numbers: number[], target: number): number[] {
//   function binarySearch(nums: number[], target: number, l: number, r: number) {
//     while (l <= r) {
//       const mid = l + Math.floor((r - l) / 2);

//       if (nums[mid] === target) {
//         return mid;
//       }
//       if (nums[mid] < target) {
//         l = mid + 1;
//       } else {
//         r = mid - 1;
//       }
//     }

//     return -1;
//   }

//   for (let i = 0; i < numbers.length; i++) {
//     const offset = target - numbers[i];
//     const foundIndex = binarySearch(numbers, offset, i + 1, numbers.length - 1);

//     if (foundIndex > -1) {
//       return [i + 1, foundIndex + 1];
//     }
//   }
// }
