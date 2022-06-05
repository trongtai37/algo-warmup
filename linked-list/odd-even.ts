function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let oddPointer = head,
    evenPointer = head.next,
    firstEven = head.next;

  while (oddPointer.next && evenPointer.next) {
    oddPointer.next = evenPointer.next;
    oddPointer = oddPointer.next;

    evenPointer.next = oddPointer.next;
    evenPointer = evenPointer.next;
  }

  oddPointer.next = firstEven;

  return head;
}
