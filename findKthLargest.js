// let nums = [3, 2, 1, 5, 6, 4];
// let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let nums = [
  3,
  2,
  3,
  1,
  2,
  4,
  5,
  5,
  6,
  7,
  7,
  8,
  2,
  3,
  1,
  1,
  1,
  10,
  11,
  5,
  6,
  2,
  4,
  7,
  8,
  5,
  6
];

findKthLargest = (nums, k) => {
  let temp = [];
  temp = nums.sort(function(a, b) {
    return b - a;
  });
  console.log(temp[k - 1]);
  // console.log(temp.reverse()[k - 1]);
};
findKthLargest(nums, 2);
