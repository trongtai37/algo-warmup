class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  if (head.next === null) return head;

  const nextPair = head.next?.next;
  const newHead = head.next;
  newHead.next = head;
  head.next = swapPairs(nextPair);

  return newHead;
};