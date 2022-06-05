function isPalindrome(head: ListNode | null): boolean {
  const arr = [];
  let currentNode = head;

  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }

  let l = 0,
    r = arr.length - 1;

  while (l <= r) {
    if (arr[l] !== arr[r]) return false;
    l++;
    r--;
  }

  return true;
}
