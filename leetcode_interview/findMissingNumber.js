// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2
// is the missing number in the range since it does not appear in nums.

var missingNumber = function(nums) {
  let mySet = new Set();
  for (let i = 0; i <= nums.length; i++) {
    mySet.add(i);
  }
  for (let i = 0; i < nums.length; i++) {
    mySet.delete(nums[i]);
  }
  console.log(mySet.values().next().value);
};
missingNumber([3, 0, 1]);
