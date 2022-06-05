// function mergeTwoLists(
//   list1: ListNode | null,
//   list2: ListNode | null
// ): ListNode | null {
//   if (list1 === null) return list2;
//   if (list2 === null) return list1;

//   let p1 = list1,
//     p2 = list2;
//   let p = null;

//   while (p1 && p2) {
//     if (p1.val < p2.val) {
//       if (!p) p = p1;
//       else {
//         p.next = p1;
//         p = p.next;
//       }
//       p1 = p1.next;
//     } else {
//       if (!p) p = p2;
//       else {
//         p.next = p2;
//         p = p.next;
//       }
//       p2 = p2.next;
//     }
//   }

//   if (p && p1) p.next = p1;
//   if (p && p2) p.next = p2;

//   return list1.val < list2.val ? list1 : list2;
// }
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let p1 = list1,
    p2 = list2;
  let p = new ListNode();
  let dummy = p;

  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p = p.next;
      p1 = p1.next;
    } else {
      p.next = p2;
      p = p.next;
      p2 = p2.next;
    }
  }

  if (p && p1) p.next = p1;
  if (p && p2) p.next = p2;

  return dummy.next;
}

function mergeTwoListsV1(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoListsV1(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoListsV1(list1, list2.next);
    return list2;
  }
}
