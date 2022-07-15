function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1,
    p2 = n - 1;
  let newLength = m + n - 1;

  while (newLength >= 0) {
    if (p1 >= 0 && p2 >= 0) {
      if (nums1[p1] >= nums2[p2]) {
        nums1[newLength--] = nums1[p1];
        p1--;
      } else {
        nums1[newLength--] = nums2[p2];
        p2--;
      }
      continue;
    }

    if (p1 < 0) {
      nums1[newLength--] = nums2[p2];
      p2--;
      continue;
    }

    if (p2 < 0) {
      nums1[newLength--] = nums1[p1];
      p1--;
      continue;
    }
  }
}
