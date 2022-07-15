function letterCombinations(digits: string): string[] {
  let res: string[][] = [];
  const map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }

  digits.split('').forEach((c: string) => {
    const characters = map[c] as string[];
    const temp: string[][] = [];
    characters.forEach(item => {
      if (res.length === 0) {
        temp.push([item]);
      }

      res.forEach(part => {
        temp.push(part.concat(item));
      })
    })
    res = temp;
  })

  return res.map(i => i.join(''));
};