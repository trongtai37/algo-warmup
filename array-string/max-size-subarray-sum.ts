function search(nums: number[], l: number, r: number, target: number) {
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2)
    if (nums[mid] < target) {
      l = mid + 1;
    }
    else {
      r = mid;
    }
  }

  return nums[l] >= target ? l : -1;
}

function minSubArrayLen(target: number, nums: number[]): number {
  const sums = [0];
  for (let i = 0; i < nums.length; i++) {
    sums[i + 1] = sums[i] + nums[i];
  }

  let res = Infinity;
  sums.forEach((s, index) => {
    const found = s + target;
    const foundIndex = search(sums, index + 1, sums.length - 1, found);
    if (foundIndex > 0) {
      res = Math.min(res, foundIndex - index);
    }
  })

  return res === Infinity ? 0 : res;
};