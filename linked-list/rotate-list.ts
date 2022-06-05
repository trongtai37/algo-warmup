function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null) return null;

  let length = 0,
    currentNode = head;
  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }

  k %= length;
  while (k--) {
    currentNode = head;
    while (currentNode.next?.next) {
      currentNode = currentNode.next;
    }
    const lastNode = currentNode.next;
    currentNode.next = null;

    lastNode.next = head;
    head = lastNode;
  }

  return head;
}
