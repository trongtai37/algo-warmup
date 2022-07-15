function binarySearch(arr: number[], val: number, l: number = 0, r: number = arr.length - 1) {
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    if (arr[mid] >= val) {
      r = mid;
    }
    else {
      l = mid + 1;
    }
  }

  return arr[l] > val ? arr[l] : -1;
}

function modifyString(s: string) {
  const map = new Map<string, number[]>();
  s.split('').forEach((c, index) => {
    if (map.has(c)) {
      map.get(c)?.push(index);
    }
    else {
      map.set(c, ([] as number[]).concat(index))
    }
  })

  const sortedEntries = [...map.entries()].sort(([c1], [c2]) => {
    return c2.localeCompare(c1);
  });

  const ans: { char: string, index: number }[] = [];
  let prevSelectedIndex = -1;
  for (let i = 0; i < sortedEntries.length; i++) {
    const [c, indexes] = sortedEntries[i];
    let selectedIndex = binarySearch(indexes, prevSelectedIndex);
    if (selectedIndex === -1) {
      selectedIndex = indexes[0];
    }
    prevSelectedIndex = selectedIndex;
    ans.push({
      char: c,
      index: selectedIndex,
    })
  }

  return ans.sort((itemA, itemB) => itemA.index - itemB.index).map(({ char }) => char).join('');
}

console.log(modifyString('aabcb'))
console.log(modifyString('abacaba'))
console.log(modifyString('aazb'))