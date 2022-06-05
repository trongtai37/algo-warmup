function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let normalP = head,
    delayP = head;

  while (n--) {
    normalP = normalP?.next;
  }

  if (normalP === null) {
    return head.next;
  }

  while (normalP?.next) {
    normalP = normalP.next;
    delayP = delayP.next;
  }

  delayP.next = delayP.next.next;

  return head;
}
