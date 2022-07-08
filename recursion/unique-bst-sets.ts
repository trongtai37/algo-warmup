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

function generateTrees(n: number): Array<TreeNode | null> {
  const cache = new Map<string, Array<TreeNode | null>>();

  function generateSubTrees(from: number, to: number): Array<TreeNode | null> {
    if (from > to) return [null];
    const cacheKey = `${from}-${to}`;
    if (cache.has(cacheKey)) return cache.get(cacheKey)!;

    const trees: TreeNode[] = [];
    for (let i = from; i <= to; i++) {
      const leftSubs = generateSubTrees(from, i - 1);
      const rightSubs = generateSubTrees(i + 1, to);
      leftSubs.forEach(left => {
        rightSubs.forEach(right => {
          trees.push(new TreeNode(i, left, right));
        })
      })
    }

    cache.set(cacheKey, trees);
    return trees;
  }

  return generateSubTrees(1, n);
};