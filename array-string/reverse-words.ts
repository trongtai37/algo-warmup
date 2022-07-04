// function reverseRange(s: string)

function reverseWords(s: string): string {
  return s.trim().split(/\s+/).reverse().join(' ')
};