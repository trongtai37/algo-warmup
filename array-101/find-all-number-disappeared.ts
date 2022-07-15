function findDisappearedNumbers(nums: number[]): number[] {
  const map = new Map<number, boolean>(nums.map((num) => [num, true]));
  let i = 1;
  const res: number[] = [];
  while (i <= nums.length) {
    if (!map.has(i)) {
      res.push(i);
    }
    i++;
  }

  return res;
}
