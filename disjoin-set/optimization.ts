export namespace UnionFind {
  export class UnionByRank {
    private root: number[];
    private rank: number[];

    constructor(size: number) {
      this.root = new Array(size).fill(true).map((_, index) => index);
      this.rank = new Array(size).fill(1);
    }

    find(index: number): number {
      if (index === this.root[index]) {
        return index;
      }

      this.root[index] = this.find(this.root[index]);
      return this.root[index];
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

    connected(x: number, y: number) {
      return this.find(x) === this.find(y);
    }
  }
}