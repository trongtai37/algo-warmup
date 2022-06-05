class RandomListNode {
  val: number;
  next: RandomListNode | null;
  random: RandomListNode | null;
  constructor(val?: number, next?: RandomListNode, random?: RandomListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: RandomListNode | null): RandomListNode | null {
  if (head === null) return null;
  let currentNode = head;

  while (currentNode) {
    const cloneNode = new RandomListNode(
      currentNode.val,
      currentNode.next,
      currentNode.random
    );
    currentNode.next = cloneNode;
    currentNode = cloneNode.next;
  }

  currentNode = head.next;
  while (currentNode) {
    currentNode.random = currentNode.random?.next || null;
    currentNode = currentNode.next?.next;
  }

  let res = head.next,
    origin = head;
  while (origin) {
    const copy = origin.next;
    origin.next = copy.next;
    origin = origin.next;
    if (origin) {
      copy.next = origin.next;
    }
  }

  return res;
}
