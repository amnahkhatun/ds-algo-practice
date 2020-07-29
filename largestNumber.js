// let nums = [3, 30, 34, 5, 9];
// let nums = [40, 98, 90, 2, 7, 6, 9];
let nums = [76, 76, 78];

function largestNumber(nums) {
  console.log(
    nums
      .map(String)
      .sort((a, b) => b + a - (a + b))
      .join("")
  );
}
largestNumber(nums);
// let n = getGreaterNum(2281, 2);
// console.log(n);
// let greaterIndex = 0;
// for (let i = 0; i < nums.length - 1; i++) {
//   let greater = nums[i];
//   greaterIndex = i;
//   for (let j = i + 1; j < nums.length; j++) {
//     greater = getGreaterNum(greater, nums[j]);
//     console.log(greater);
//     if (greater === nums[j]) {
//       greaterIndex = j;
//     }
//   }
//   if (i !== greaterIndex) {
//     swap(i, greaterIndex, nums);
//   }
// }
// let str = "";
// nums.map(item => {
//   str += item;
// });
// if (Number(str) === 0) {
//   return "0";
// }
// console.log(str);
// }

// function getGreaterNum(str1, str2) {
//   let n1 = str1.toString();
//   let n2 = str2.toString();
//   let i = 0;
//   while (n1.length > i && n2.length > i) {
//     if (n1.charAt(i) > n2.charAt(i)) {
//       return str1;
//     } else if (n2.charAt(i) > n1.charAt(i)) {
//       return str2;
//     } else {
//       i++;
//     }
//   }
//   while (n1.length > i) {
//     if (n1.charAt(i) > n2.charAt(0)) {
//       return str1;
//     } else if (n1.charAt(i) < n2.charAt(0)) {
//       return str2;
//     } else {
//       i++;
//     }
//   }

//   while (n2.length > i) {
//     if (n2.charAt(i) > n1.charAt(0)) {
//       return str2;
//     } else if (n2.charAt(i) < n1.charAt(0)) {
//       return str1;
//     } else {
//       i++;
//     }
//   }

//   return str1;
// }

// function swap(i, j, nums) {
//   let temp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = temp;
// }

// function lNumber(nums) {
//   nums.sort((a, b) => a - b);
//   console.log(nums);

//   for (let i = 0; i < nums.length; i++) {}
// }
// lNumber(nums);
