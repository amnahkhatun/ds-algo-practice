// import { string } from "prop-types";

// let s = ["h", "e", "l", "l", "o"];
let s = "hello";

reverseString = s => {
  s = s.split("");
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left++], s[right--]] = [s[right], s[left]];
  }
  console.log(s.join(""));
};
reverseString(s);

// reverseString1 = s => {
//   for (let i = 0; i < s.length / 2; i++) {
//     let temp = s[i];
//     s[i] = s[s.length - i - 1];
//     s[s.length - i - 1] = temp;
//   }
//   console.log(s);
// };
// // reverseString1(s);

reverseStringRecursive = s => {
  // console.log(s);
  // return s === "" ? s : s.slice(-1) + reverseStringRecursive(s.slice(0, -1));
  return s === "" ? s : reverseStringRecursive(s.substr(1)) + s.charAt(0);
};

// console.log(reverseStringRecursive("hello"));

//using two pointer theorem

let x = 1534236469;
reverseDigit = x => {
  let isNegative = false;
  if (x < 0) {
    x = -1 * x;
    isNegative = true;
  }
  let temp = 0;
  let rev = 0;
  while (x > 0) {
    temp = x % 10;
    rev = rev * 10 + temp;
    x = Math.floor(x / 10);
  }
  if (isNegative) {
    rev = -1 * rev;
  }
  if (rev > 2147483647 || rev < -2147483648) {
    rev = 0;
  }
  // console.log(rev);
};
// reverseDigit(x);
