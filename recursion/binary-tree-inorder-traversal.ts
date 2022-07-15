// function inorderTraversal(root: TreeNode | null): number[] {
//   const res: number[] = [];
//   if (root === null) return res;

//   function traverse(node: TreeNode | null) {
//     if (node === null) return;
//     traverse(node.left);
//     res.push(node.val);
//     traverse(node.right);
//   }

//   traverse(root);
//   return res;
// };

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (root === null) return res;

  const stack: TreeNode[] = [root];
  while (root.left) {
    root = root.left;
    stack.push(root);
  }

  while (stack.length) {
    const top = stack.pop()!;
    res.push(top.val);
    let right = top.right;
    while (right) {
      stack.push(right);
      right = right.left;
    }
  }

  return res;
};
