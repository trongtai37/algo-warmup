interface ListNode {
  val: number;
  next: ListNode | null;
}

class MyLinkedList {
  private head: ListNode | null;

  constructor() {
    this.head = null;
  }

  get(index: number): number {
    let currentNode = this.head;
    let count = 0;

    while (count < index) {
      currentNode = currentNode?.next;
      count++;
    }

    return currentNode?.val ?? -1;
  }

  addAtHead(val: number): void {
    const newNode = {
      val,
      next: this.head,
    };

    this.head = newNode;
  }

  addAtTail(val: number): void {
    let currentNode = this.head;

    while (currentNode?.next) {
      currentNode = currentNode?.next;
    }

    const newNode = {
      val,
      next: null,
    };

    if (currentNode) {
      currentNode.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  addAtIndex(index: number, val: number): void {
    let prevNode = null,
      currentNode = this.head,
      count = 0;

    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    while (count < index) {
      prevNode = currentNode;
      currentNode = currentNode?.next;
      count++;
    }

    if (prevNode) {
      const newNode = {
        val,
        next: currentNode || null,
      };
      prevNode.next = newNode;
      return;
    }
  }

  deleteAtIndex(index: number): void {
    let prevNode = null,
      currentNode = this.head,
      count = 0;

    if (index === 0) {
      this.head = currentNode.next;
      return;
    }

    while (count < index) {
      prevNode = currentNode;
      currentNode = currentNode?.next;
      count++;
    }

    if (prevNode && currentNode) {
      prevNode.next = currentNode.next;
      return;
    }
  }
}
