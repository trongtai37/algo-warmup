function nextGreatestLetter(letters: string[], target: string): string {
  let l = 0,
    r = letters.length - 1;
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);

    if (letters[mid].localeCompare(target) <= 0) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return letters[l].localeCompare(target) === 1 ? letters[l] : letters[0];
}
