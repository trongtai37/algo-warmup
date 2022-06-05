function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carrier = 0,
    p1 = l1,
    p2 = l2;
  let dummy = new ListNode();
  let p = dummy;

  while (p1 && p2) {
    const sum = p1.val + p2.val + carrier;
    const val = sum % 10;
    carrier = Math.floor(sum / 10);

    p.next = new ListNode(val);

    p = p.next;
    p1 = p1.next;
    p2 = p2.next;
  }

  while (p1) {
    const sum = p1.val + carrier;
    const val = sum % 10;
    carrier = Math.floor(sum / 10);

    p.next = new ListNode(val);

    p = p.next;
    p1 = p1.next;
  }

  while (p2) {
    const sum = p2.val + carrier;
    const val = sum % 10;
    carrier = Math.floor(sum / 10);

    p.next = new ListNode(val);

    p = p.next;
    p2 = p2.next;
  }

  if (carrier > 0) p.next = new ListNode(carrier);

  return dummy.next;
}
