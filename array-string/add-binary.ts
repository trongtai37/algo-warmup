type Bit = '0' | '1';

function addBit(x: Bit = '0', y: Bit = '0'): {
  carry: Bit;
  result: Bit;
} {
  if (x === '1' && y === '1') {
    return {
      carry: '1',
      result: '0',
    }
  }

  return {
    carry: '0',
    result: String(+x + +y) as Bit,
  }
}

function addBinary(a: string, b: string): string {
  let charsA = a.split('').reverse() as Bit[];
  let charsB = b.split('').reverse() as Bit[];
  const res: Bit[] = [];
  let carry: Bit = '0';

  if (charsA.length < charsB.length) {
    const temp = charsA;
    charsA = charsB;
    charsB = temp;
  }

  for (let i = 0; i < charsA.length; i++) {
    const res1 = addBit(charsA[i], charsB[i]);
    const res2 = addBit(res1.result, carry)

    res[i] = res2.result;
    carry = addBit(res1.carry, res2.carry).result;
  }

  if (carry === '1') {
    res.push(carry);
  }

  return res.reverse().join('')
};

console.log(addBinary("1", "111"))