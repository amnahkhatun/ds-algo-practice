// let s = "leetcode";
let s = "aadadaadh";
//return index
firstUniqChar1 = s => {
  let char = s.split("");
  let uniqueSet = new Set();
  let duplicateSet = new Set();

  for (let i = 0; i < char.length; i++) {
    if (uniqueSet.has(char[i])) {
      uniqueSet.delete(char[i]);
      duplicateSet.add(char[i]);
    } else if (!duplicateSet.has(char[i])) {
      uniqueSet.add(char[i]);
    }
  }

  for (let i = 0; i < char.length; i++) {
    if (uniqueSet.has(char[i])) {
      return i;
    }
  }
  return -1;
};

let index = firstUniqChar1(s);
console.log(index);

// Input: nums = [2, 2, 1]
// Output: 1
const nums = [2, 2, 1];

var singleNumber = function (nums) {
  let myMap = new Map();
  nums.forEach(num => {
    let count = myMap.get(num)
    if (myMap.has(num)) {
      myMap.set(num, count + 1)
    } else {
      myMap.set(num, 1)
    }
  })
  for (const [k, v] of myMap) {
    if (v === 1) {
      return k
    }
  }
  //to return the index of first non repeating
  // for (const [key, value] of myMap) {
  //   if (value === 1) {
  //     return s.indexOf(key)
  //   }
  // }
};

console.log(singleNumber(nums))

// var singleNumber = function (nums) {
//   var result = nums[0];
//   for (var i = 1; i < nums.length; i++) {
//     result = result ^ nums[i];
//   }
//   return result;
// };