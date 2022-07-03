export namespace UnionFind {
  export class QuickUnion {
    root: number[];

    constructor(size: number) {
      this.root = new Array(size).fill(true).map((_, index) => index)
    }

    find(index: number): number {
      while (index !== this.root[index]) {
        index = this.root[index];
      }

      return index;
    }

    union(x: number, y: number) {
      const rootX = this.find(x);
      const rootY = this.find(y);

      if (rootX !== rootY) {
        this.root[rootY] = rootX;
      }
    }

    connected(x: number, y: number) {
      return this.find(x) === this.find(y);
    }
  }
}