function thirdMax(nums: number[]): number {
  let res = [-Infinity, -Infinity, -Infinity];
  nums.forEach((item) => {
    if (!res.includes(item)) {
      res = res
        .concat(item)
        .sort((a, b) => b - a)
        .slice(0, 4);
    }
  });

  return res[2] === -Infinity ? res[0] : res[2];
}
