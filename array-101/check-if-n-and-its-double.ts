function checkIfExist(arr: number[]): boolean {
  const map = new Map<number, true>();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(2 * arr[i]) || map.has(arr[i] / 2)) {
      return true;
    }
    map.set(arr[i], true);
  }

  return false;
}
