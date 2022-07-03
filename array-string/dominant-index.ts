function dominantIndex(nums: number[]): number {
  const maxNum = Math.max(...nums);

  const isDominant = nums.every(n => n === maxNum ? true : n * 2 < maxNum);
  if (isDominant) {
    return nums.indexOf(maxNum);
  }

  return -1
};