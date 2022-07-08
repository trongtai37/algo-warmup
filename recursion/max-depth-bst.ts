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

function maxDepth(root: TreeNode | null): number {
  function getMaxDepth(root: TreeNode | null, currentDepth: number): number {
    if (root === null) {
      return currentDepth;
    }

    return Math.max(getMaxDepth(root.left, currentDepth + 1), getMaxDepth(root.right, currentDepth + 1))
  }

  return getMaxDepth(root, 0)
};