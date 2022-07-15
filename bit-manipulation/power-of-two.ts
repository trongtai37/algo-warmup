function turnOffRightMostBit(n) {
  return n & (n - 1);
}

function isPowerOfTwo(n: number): boolean {
  return n > 0 && turnOffRightMostBit(n) === 0;
};