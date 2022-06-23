function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  function merge(array1: number[], array2: number[]) {
    let p1 = 0,
      p2 = 0,
      res = [];

    while (p1 < array1.length && p2 < array2.length) {
      if (array1[p1] <= array2[p2]) {
        res.push(array1[p1]);
        p1++;
      } else {
        res.push(array2[p2]);
        p2++;
      }
    }

    return res.concat(array1.slice(p1)).concat(array2.slice(p2));
  }

  const mergedArr = merge(nums1, nums2);
  const n = mergedArr.length;

  if (n % 2 == 0) {
    return (mergedArr[n / 2 - 1] + mergedArr[n / 2]) / 2;
  }

  return mergedArr[Math.floor(n / 2)];
}
