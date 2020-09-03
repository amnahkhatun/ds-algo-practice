const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(numbers) {
  if (numbers.length <= 1) {
    return numbers;
  }
  let length = numbers.length;
  let middle = Math.floor(length / 2);
  let left = numbers.slice(0, middle);
  let right = numbers.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let resultArray = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

console.log(mergeSort(numbers));
