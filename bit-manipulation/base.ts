
// position = 6, x = 01100110
// getBit(x, 6) = 1
// getBit(x, position) = (01100110>>6) & 1 = (00000001) & (00000001) = 1

export function getBit(x: number, position: number) {
  return (x >> position) & 1
}

console.log(getBit(parseInt('01100110', 2), 6))

export function setBit(x: number, position: number) {
  const mask = 1 << position;
  return x | mask;
}

export function flipBit(x: number, position: number) {
  const mask = 1 << position;
  return x ^ mask;
}

export function turnOffRightMostBit(x: number) {
  return x & (x - 1)
}