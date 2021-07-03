var findDisappearedNumbers = function(nums) {
  let arr = new Array(nums.length + 1);
  let tempArr = [];
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] = nums[i];
  }
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] === undefined) {
      tempArr.push(j);
    }
  }
  return tempArr;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
