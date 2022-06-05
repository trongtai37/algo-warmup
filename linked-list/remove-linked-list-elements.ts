function removeElements(head: ListNode | null, val: number): ListNode | null {
  while (head?.val === val) {
    head = head.next;
  }

  let currentNode = head;
  while (currentNode?.next) {
    const nextNode = currentNode.next;
    if (nextNode.val === val) {
      currentNode.next = nextNode.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  return head;
}

// function removeElements(head: ListNode | null, val: number): ListNode | null {
//   if (head === null) return null;

//   if (head.val === val) {
//     return removeElements(head.next, val);
//   }

//   head.next = removeElements(head.next, val);
//   return head;
// }
