let maxSubArray = arr => {
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

var maxSubArray2 = function(nums) {
  let currentSum = nums[0];
  let largestSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + currentSum < nums[i]) {
      currentSum = nums[i];
      // console.log(currentSum, "curr");
    } else {
      currentSum = currentSum + nums[i];
      // console.log(currentSum, "curr else");
    }
    if (currentSum > largestSum) {
      largestSum = currentSum;
      // console.log(largestSum, "largestSum");
    }
  }
  return largestSum;
};
console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray2([5, 4, -1, 7, 8]));


var maxSubArray3 = function (nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
    max = Math.max(max, nums[i])
  }
  return max
};