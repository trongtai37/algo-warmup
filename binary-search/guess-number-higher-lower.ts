/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 */

const guess = function (num: number) {
  return 1;
};

function guessNumber(n: number): number {
  let l = 1,
    r = n;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    const sign = guess(mid);
    if (sign === 0) {
      return mid;
    } else if (sign === 1) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}
