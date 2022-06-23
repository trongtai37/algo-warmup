function isValid(s: string): boolean {
  const stack: string[] = [];
  const opens = ['(', '[', '{'];
  const closes = [')', ']', '}'];

  const isMatch = (x: string, y: string) => {
    const openIndex = opens.findIndex((a) => a === x);
    const closeIndex = closes.findIndex((a) => a === y);
    return openIndex === closeIndex;
  };

  const isOpen = (c: string) => opens.includes(c);

  for (let c of s) {
    if (isOpen(c)) {
      stack.push(c);
    } else {
      if (stack.length === 0) return false;

      const top = stack.pop()!;
      if (isMatch(top, c)) continue;
      return false;
    }
  }

  return stack.length === 0;
}
