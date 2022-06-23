function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const answer = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    if (stack.length) {
      while (
        stack.length &&
        temperatures[i] > temperatures[stack[stack.length - 1]]
      ) {
        const top = stack[stack.length - 1];
        answer[top] = i - top;
        stack.pop();
      }
    }

    stack.push(i);
  }

  return answer;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
