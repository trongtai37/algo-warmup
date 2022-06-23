export class Queue<T> {
  private _list: T[] = [];
  constructor() {
    this._list = [];
  }

  enQueue(item: T): number {
    return this._list.unshift(item);
  }

  deQueue(): T {
    return this._list.shift();
  }

  isEmpty(): boolean {
    return this._list.length === 0;
  }
}
