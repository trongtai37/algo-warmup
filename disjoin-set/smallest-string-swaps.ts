class UnionFind {
  rank: number[];
  root: number[];

  constructor(size: number) {
    this.root = new Array(size).fill(true).map((_, index) => index);
    this.rank = new Array(size).fill(1);
  }

  find(index: number): number {
    if (this.root[index] === index) {
      return index;
    }

    return this.root[index] = this.find(this.root[index]);
  }


  union(x: number, y: number) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (this.rank[rootX] > this.rank[rootY]) {
      this.root[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.root[rootX] = rootY;
    } else {
      this.root[rootY] = rootX;
      this.rank[rootX] += 1;
    }
  }
}

function smallestStringWithSwaps(s: string, pairs: number[][]): string {
  const n = s.length;
  const djs = new UnionFind(n);
  pairs.forEach(([x, y]) => djs.union(x, y));
  const groupByRoot = new Array(n).fill(true).reduce<{ [key: number]: number[] }>((acc, _, index) => {
    const rootI = djs.find(index);
    return {
      ...acc,
      [rootI]: (acc[rootI] || []).concat(index),
    }
  }, {});

  const arr: string[] = [];

  Object.values<number[]>(groupByRoot).forEach((indexes: number[]) => {
    const sortedChars = indexes.map(index => s.charAt(index)).sort();
    const sortedIndexes = indexes.sort((a, b) => a - b);

    sortedIndexes.forEach((i, j) => {
      arr[i] = sortedChars[j];
    })
  })

  return arr.join('')
};

console.log(smallestStringWithSwaps("dcab", [[0, 3], [1, 2], [0, 2]]))