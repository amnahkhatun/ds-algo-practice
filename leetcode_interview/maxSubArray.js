let maxSubArray = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum, "currSum");
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
