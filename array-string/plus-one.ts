function plusOne(digits: number[]): number[] {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const temp = digits[i] + carry;
    digits[i] = temp % 10;
    carry = Math.floor(temp / 10);

    if (carry === 0) return digits;
  }

  return [carry].concat(digits);
};