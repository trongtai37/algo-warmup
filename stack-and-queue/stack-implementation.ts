export class Stack<T> {
  private list: T[];

  constructor() {
    this.list = [];
  }

  push(item: T): number {
    return this.list.push(item);
  }

  pop(): T {
    return this.list.pop();
  }

  isEmpty(): boolean {
    return this.list.length === 0;
  }

  top(): T | undefined {
    return this.list[this.list.length - 1];
  }
}
