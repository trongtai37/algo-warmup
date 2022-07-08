function merge(left: number[], right: number[]) {
  let i = 0, j = 0;
  const ans: number[] = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      ans.push(left[i]);
      i++;
    }
    else {
      ans.push(right[j]);
      j++;
    }
  }

  return ans.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(nums: number[]) {
  if (nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  return merge(mergeSort(left), mergeSort(right))
}

function sortArray(nums: number[]): number[] {
  return mergeSort(nums)
};