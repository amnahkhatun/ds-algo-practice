let arr = [3, 5, 2, 8, 6, 9, 4, 1];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// console.log(bubbleSort(arr));

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {

//   }
//   return arr;
// }

// console.log(selectionSort(arr));

let a = 10;
let b = 20;
console.log("before swap", a, b);
[a, b] = [b, a];
console.log("after swap", a, b);
