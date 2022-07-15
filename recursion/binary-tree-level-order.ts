function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = []
  if (root === null) return res;

  let level = 0;
  const queue: { level: number; node: TreeNode }[] = [{ level, node: root }];
  while (queue.length) {
    const { level: nodeLevel, node } = queue.shift()!;
    if (!res[nodeLevel]) res[nodeLevel] = [];
    res[nodeLevel].push(node.val);

    if (node.left) {
      queue.push({
        node: node.left,
        level: nodeLevel + 1,
      })
    }

    if (node.right) {
      queue.push({
        node: node.right,
        level: nodeLevel + 1,
      })
    }
  }

  return res;
};