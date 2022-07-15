function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  const part: string[] = [];
  const length = n * 2;

  function isValid(c: '(' | ')') {
    const balance = part.reduce((a, b) => b === '(' ? a + 1 : a - 1, 0);
    if (c === ')') {
      return balance > 0;
    }

    const remain = length - part.length;
    return remain > balance;
  }

  function backtrack() {
    if (part.length === length) {
      res.push(part.join(''));
      return;
    }

    for (let c of ['(', ')']) {
      if (isValid(c as '(' | ')')) {
        part.push(c);
        backtrack();
        part.pop();
      }
    }
  }

  backtrack();
  return res;
};