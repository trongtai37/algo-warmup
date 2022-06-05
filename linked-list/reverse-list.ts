function reverseList(head: ListNode | null): ListNode | null {
  let originHead = head,
    tempHead = head;
  if (head === null) return null;

  while (originHead.next) {
    const movedNode = originHead.next;
    originHead.next = movedNode.next;
    movedNode.next = tempHead;
    tempHead = movedNode;
  }

  return tempHead;
}
