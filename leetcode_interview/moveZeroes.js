// let nums = [0, 1, 0, 3, 12];
let nums = [1, 1, 0, 3, 12, 0];

moveZeroes = nums => {
  let start = 0;
  let end = -1;
  let i = 0;
  while (end !== nums.length - 1) {
    if (nums[i] === 0) {
      end += 1; //
    } else if (nums[i] !== 0) {
      let temp = nums[start];
      nums[start] = nums[i];
      start += 1;
      end += 1;
      nums[end] = temp;
    }
    i++;
  }
  console.log(nums);
};

moveZeroes(nums);
