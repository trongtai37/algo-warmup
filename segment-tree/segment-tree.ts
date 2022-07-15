export class SegmentTree {
  private tree: number[];
  private originNums: number[];

  constructor(nums: number[]) {
    this.tree = [];
    this.originNums = nums;
    this.build(1, 0, nums.length - 1);
  }

  build(
    index = 1,
    left: number = 0,
    right: number = this.originNums.length - 1,
  ) {
    if (left === right) {
      this.tree[index] = this.originNums[left];
      return;
    }

    const mid = left + Math.floor((right - left) / 2);

    this.build(2 * index, left, mid);
    this.build(2 * index + 1, mid + 1, right);

    this.tree[index] = this.tree[2 * index] + this.tree[2 * index + 1];
  }

  query(
    start: number,
    end: number,
    index: number = 1,
    left: number = 0,
    right: number = this.originNums.length - 1,
  ): number {
    if (end < left || start > right) {
      return 0;
    }

    if (start <= left && end >= right) {
      return this.tree[index];
    }

    const mid = left + Math.floor((right - left) / 2);
    return (
      this.query(start, end, 2 * index, left, mid) +
      this.query(start, end, 2 * index + 1, mid + 1, right)
    );
  }

  update(
    arrayIndex: number,
    value: number,
    index: number = 1,
    left: number = 0,
    right: number = this.originNums.length - 1,
  ) {
    this.originNums[arrayIndex] = value;

    if (left === right) {
      this.tree[index] = value;
      return;
    }

    const mid = left + Math.floor((right - left) / 2);
    if (arrayIndex <= mid) {
      this.update(arrayIndex, value, 2 * index, left, mid);
    } else {
      this.update(arrayIndex, value, 2 * index + 1, mid + 1, right);
    }

    this.tree[index] = this.tree[2 * index] + this.tree[2 * index + 1];
  }
}

const segmentTree = new SegmentTree([1, 2, 3, 4, 5, 6, 7, 8]);
console.log('98093428023');
