function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const isOperator = (token: string) => ['+', '-', '*', '/'].includes(token);
  const evaluate = (first: number, op: string, second: number) => {
    if (op === '+') return first + second;
    if (op === '-') return first - second;
    if (op === '*') return first * second;
    if (op === '/') return Math.trunc(first / second);
  };

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (isOperator(token)) {
      const second = stack.pop()!;
      const first = stack.pop()!;

      const value = evaluate(first, token, second)!;
      stack.push(value);
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop()!;
}

console.log(
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])
);
