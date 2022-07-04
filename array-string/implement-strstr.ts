function strStr(haystack: string, needle: string): number {
  // return haystack.indexOf(needle);

  const subLength = needle.length, mainLength = haystack.length;

  if (subLength > mainLength) return -1;
  if (subLength === 0) return 0;

  for (let i = 0; i < mainLength - subLength; i++) {
    let j = 0;
    while (j < subLength) {
      if (haystack[i + j] !== needle[j]) break;
      j++;
    }

    if (j === subLength) return i;
  }

  return -1;
};