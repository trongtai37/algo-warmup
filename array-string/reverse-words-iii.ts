function reverseWordsV2(s: string): string {
  return s.split(/\s+/).map(str => str.split('').reverse().join('')).join(' ')
};