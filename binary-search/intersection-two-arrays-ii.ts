function intersection(nums1: number[], nums2: number[]): number[] {
  const map = new Map();
  nums2.forEach((val) => {
    map.set(val, map.has(val) ? map.get(val) + 1 : 1);
  });

  const res = [];
  nums1.forEach((val) => {
    if (map.has(val) && map.get(val) > 0) {
      res.push(val);
      map.set(val, map.get(val) - 1);
    }
  });

  return res;
}
