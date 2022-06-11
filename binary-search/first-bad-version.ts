var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let l = 1,
      r = n;
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2);
      const isBad = isBadVersion(mid);

      if (isBad) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    return l;
  };
};
