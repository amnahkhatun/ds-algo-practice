const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

bubbleSort = nums => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};
console.log(bubbleSort(numbers));
