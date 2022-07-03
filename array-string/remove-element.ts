function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = nums[nums.length - 1];
      nums.length--;
      i--;
    }
  }

  return nums.length;
};

// function removeElement(nums: number[], val: number): number {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   return k;
// };