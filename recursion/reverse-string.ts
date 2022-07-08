/**
 Do not return anything, modify s in-place instead.
 */
function swapRecursively(s: string[], l: number, r: number) {
  if (l >= r) return;
  const temp = s[l];
  s[l] = s[r];
  s[r] = temp;
  swapRecursively(s, l + 1, r - 1);
}

function reverseString(s: string[]): void {
  swapRecursively(s, 0, s.length - 1);
};