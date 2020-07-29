let nums = [2, 1, 2];

singleNumber = nums => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};

const singleNumber1 = nums =>
  nums.reduce((a, b) => {
    // console.log("a: ", a, "--- b: ", b); //0,1,3,2,0
    return a ^ b;
  }, 0);

console.log(singleNumber1(nums));
