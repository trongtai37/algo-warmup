/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const times = k % nums.length;
  const ans = nums.slice(-times).concat(nums.slice(0, -times));
  for (let i = 0; i < nums.length; i++) {
    nums[i] = ans[i];
  }
};

function reverseRange(nums: number[], l: number, r: number) {
  while (l < r) {
    const temp = nums[r];
    nums[r] = nums[l];
    nums[l] = temp;
    l++;
    r--;
  }
}

function rotateV1(nums: number[], k: number): void {
  const n = nums.length;
  const times = k % nums.length;

  reverseRange(nums, 0, n - times - 1);
  reverseRange(nums, n - times, n - 1);
  reverseRange(nums, 0, n - 1);
};


function rotateV2(nums: number[], k: number): void {
  const flag = new Map();

  for (let i = 0; i < nums.length; i++) {
    let currentIndex = i, currentValue = nums[i];
    while (!flag.has(i)) {
      const nextIndex = (currentIndex + k) % nums.length;
      flag.set(nextIndex, true);

      const temp = nums[nextIndex];
      nums[nextIndex] = currentValue;
      currentValue = temp;
      currentIndex = nextIndex;
    }
  }
};