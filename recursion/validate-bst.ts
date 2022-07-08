class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

// function validateTree(root: TreeNode | null, min = -Infinity, max = Infinity): boolean {
//   if (root === null) return true;

//   if (root.val <= min || root.val >= max) {
//     return false;
//   }

//   return (
//     validateTree(root.left, min, root.val) &&
//     validateTree(root.right, root.val, max)
//   );

// }

function isValidBST(root: TreeNode | null): boolean {
  let prev: number = -Infinity;
  function visit(root: TreeNode | null) {
    if (root === null) return true;
    if (!visit(root.left)) return false;
    if (root.val <= prev) return false;
    prev = root.val;
    return visit(root.right);
  };

  return visit(root);
};