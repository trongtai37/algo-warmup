class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slowPointer = head;
  let fastPointer = head;

  while (slowPointer && fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next?.next;

    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
}

function detectCycle(head: ListNode | null): ListNode | null {
  let slowPointer = head;
  let fastPointer = head;

  while (slowPointer && fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next?.next;

    if (slowPointer === fastPointer) {
      while (head !== slowPointer) {
        head = head.next;
        slowPointer = slowPointer.next;
      }

      return head;
    }
  }

  return null;
}
