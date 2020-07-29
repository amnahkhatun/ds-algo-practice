let arr = [12, 13, 1, 10, 34, 1];
let arr1 = [12, 13, 1, 10, 34, 2];
let arr2 = [-1, 0, 1, 2, 3, 4];
let arr3 = [12, 13];
let arr4 = [2, 2, 1, 3, 3, 1];

secondSmallest = arr => {
  let smallest = Number.MAX_VALUE;
  let secondSmallest = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest; //13
      smallest = arr[i]; //12 1
    } else if (arr[i] > smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i]; //13
    }
  }
  console.log("Output for ", arr, "-->", secondSmallest);
};

secondSmallest(arr);
// secondSmallest(arr1);
// secondSmallest(arr2);
// secondSmallest(arr3);
// secondSmallest(arr4);
// console.log(nums.map(String).sort((a, b) => (b + a) - (a + b)).join(''))
// console.log(nums.map(String).sort((a, b) => (b + a) - (a + b)).join(''))
