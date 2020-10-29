let nums = [3, 2, 2, 3],
  val = 3;

var removeElement = function(nums, val) {
  let counter = 0;
  let temp;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      counter++;
    } else {
      nums.splice(i, 1);
      i--;
    }
  }
  return counter;
};
console.log(removeElement(nums, val));
