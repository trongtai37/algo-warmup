class MinStack {
  private list: number[];
  private minValues: number[];

  constructor() {
    this.list = [];
    this.minValues = [];
  }

  push(val: number): void {
    this.list.push(val);
    this.minValues.push(
      Math.min(this.minValues[this.minValues.length - 1] || Infinity, val)
    );
  }

  pop(): void {
    this.list.pop();
    this.minValues.pop();
  }

  top(): number {
    return this.list[this.list.length - 1];
  }

  getMin(): number {
    return this.minValues[this.minValues.length - 1];
  }
}
