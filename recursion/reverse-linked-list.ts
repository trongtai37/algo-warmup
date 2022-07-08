function reverseList(head: ListNode | null): ListNode | null {
  let newHead;
  function reverseFrom(head: ListNode): ListNode {
    if (head.next === null) {
      newHead = head;
      return head;
    };

    const nextNode = head.next;
    const lastNode = reverseFrom(nextNode)!;
    lastNode.next = head;
    head.next = null;
    return head;
  };

  if (head === null) return null;
  reverseFrom(head);
  return newHead;
};