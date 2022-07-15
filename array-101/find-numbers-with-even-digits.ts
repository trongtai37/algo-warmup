function isHasEvenDigits(num: number) {
  if (num === 0) return false;
  const noOfDigits = Math.floor(Math.log10(Math.abs(num)) + 1);
  return noOfDigits % 2 === 0;
}

function findNumbers(nums: number[]): number {
  return nums.reduce((acc, item) => {
    return acc + (isHasEvenDigits(item) ? 1 : 0);
  }, 0);
}
