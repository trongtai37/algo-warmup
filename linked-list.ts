interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;
}

class LinkedList<T> {
  private head: LinkedListNode<T>;
  private tail: LinkedListNode<T>;

  constructor(value: T) {
    this.head = { value, next: null };
    this.tail = this.head;
  }

  insert(value: T) {
    const node = { value, next: null };
    this.tail.next = node;
    this.tail = node;
  }

  remove() {}

  removeTail() {
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this.tail = currentNode;
  }

  isHead(node: LinkedListNode<T>) {
    return node === this.head;
  }

  isTail(node: LinkedListNode<T>) {
    return node === this.tail;
  }

  contains(value: T) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }
}
