
// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
//   }
// }


// function inorderTraversal(root: TreeNode | null): number[] {
//   if(root === null) return [];

//   const stack = [root];
//   const res: number[] = [];
//   let current = root;

//   while(current.left){
//     current = current.left;
//     stack.push(current);    
//   }

//   const top = stack.pop()!;
//   res.push(top.val);
// };

function romanToInt(s: string): number {
  const ROMAN_INTEGER = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = ROMAN_INTEGER[s.charAt(s.length - 1)]

  for (let i = s.length - 2; i >= 0; i++) {
    let sign = 1;
    if (ROMAN_INTEGER[s.charAt(i)] < ROMAN_INTEGER[s.charAt(i + 1)]) {
      sign = -1;
    }

    res += sign * ROMAN_INTEGER[s.charAt(i)]
  }

  return res;
};