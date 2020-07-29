const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

selectionSort = nums => {
  for (let i = 0; i < nums.length; i++) {
    let smallest = nums[i];
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    nums[i] = nums[min];
    nums[min] = smallest;
  }
  return nums;
};
console.log(selectionSort(numbers));
