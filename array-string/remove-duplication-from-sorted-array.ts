function removeDuplicates(nums: number[]): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = i;
    while (nums[j + 1] === nums[i]) {
      j++;
    };
    nums[k++] = nums[j];
    i = j;
  }

  return k;
};