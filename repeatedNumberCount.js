let arr = [1, 2, 4, 1, 5, 1, 6, 1, 8];
let number = 1;

repeatedNumberCount = (arr, number) => {
  let indexArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      indexArr.push(i);
    }
  }
  return indexArr;
};

console.log(repeatedNumberCount(arr, number));
