function longestCommonPrefix(strs: string[]): string {
  const trie: string[][] = [];
  let minLength = Infinity;

  strs.forEach(str => {
    minLength = Math.min(minLength, str.length);
    str.split('').forEach((c, index) => {
      if (trie[index] === undefined) {
        trie[index] = [];
      }

      if (!trie[index].includes(c)) {
        trie[index].push(c)
      }
    })
  });

  let ans = '', i = 0;
  while (i < minLength) {
    if (trie[i].length === 1) {
      ans += trie[i++][0];
    } else {
      break;
    }
  }

  return ans;
};