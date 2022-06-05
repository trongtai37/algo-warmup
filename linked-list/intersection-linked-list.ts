function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let m = 0;
  let n = 0;

  let currentNodeA = headA;
  let currentNodeB = headB;

  while (currentNodeA) {
    m++;
    currentNodeA = currentNodeA.next;
  }

  while (currentNodeB) {
    n++;
    currentNodeB = currentNodeB.next;
  }

  if (m < n) {
    [m, n] = [n, m];
    [headA, headB] = [headB, headA];
  }

  let k = m - n;
  while (k) {
    headA = headA.next;
    k--;
  }

  while (headA && headB) {
    if (headA === headB) return headA;
    headA = headA.next;
    headB = headB.next;
  }

  return null;
}

function getIntersectionNodeV2(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let currentNodeA = headA;
  let currentNodeB = headB;

  if (currentNodeA === null && currentNodeB === null) {
    return null;
  }
}
