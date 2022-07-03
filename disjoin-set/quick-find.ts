export namespace UnionFind {
  export class QuickFind {
    private root: number[];

    constructor(size: number) {
      this.root = new Array(size).fill(true).map((_, index) => index);
    }

    find(index: number): number {
      return this.root[index];
    }

    union(x: number, y: number): void {
      const rootX = this.find(x);
      const rootY = this.find(y);

      if (rootX !== rootY) {
        this.root = this.root.map(item => item === rootY ? rootX : rootY)
      }
    }

    connected(x: number, y: number): boolean {
      return this.find(x) === this.find(y)
    }
  }
}
