class MyCircularQueue {
  private head: number;
  private tail: number;
  private list: number[];

  constructor(k: number) {
    this.head = 0;
    this.tail = -1;
    this.list = new Array(k).fill(null);
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;

    const nextIndex = (this.tail + 1) % this.list.length;
    this.list[nextIndex] = value;
    this.tail = nextIndex;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;

    this.list[this.head] = null;
    this.head = (this.head + 1) % this.list.length;
    return true;
  }

  Front(): number {
    return this.list[this.head] ?? -1;
  }

  Rear(): number {
    return this.list[this.tail] ?? -1;
  }

  isEmpty(): boolean {
    return this.list[this.head] === null;
  }

  isFull(): boolean {
    const nextIndex = (this.tail + 1) % this.list.length;
    return this.list[nextIndex] !== null;
  }
}
