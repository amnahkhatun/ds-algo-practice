// // let nums = [9];
// // let nums = [1, 0,];
// let nums = [1, 9, 0];
// // let nums = [8, 8, 5, 0, 5, 1, 9, 7];
// // let nums = [9, 9, 9];
// // let nums = [8, 9, 9, 9];
// // let nums = [1, 2, 3];
// // let nums = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// // let nums = [3, 0, 9, 0, 9, 2, 8, 8, 8, 7, 1, 1, 6, 9, 0];

// plusOne = digits => {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] !== 9) {
//       digits[i]++;
//       return digits;
//     }
//     digits[i] = 0;
//   }
//   digits.unshift(1);
//   return digits;
// };
// console.log(plusOne(nums));

const arr = [4, 35, 4, 9];
const n = 4;

function minMemory(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(minMemory(arr, 4));
