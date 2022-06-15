// i/p nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// o/p 5
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let nums = [1, 1, 2];
let nums = [1, 2, 3, 3, 4];
removeDuplicates = nums => {
  let set1 = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!set1.has(nums[i])) {
      set1.add(nums[i]);
    }
  }
  nums = [...set1.values()];
  console.log(nums.length);
  console.log(nums);
};

removeDuplicates(nums);

//using two pointer theorem
removeDuplicates1 = nums => {
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    // console.log("i", i, nums[i]);
    // console.log("j", j, nums[j]);

    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  console.log(i + 1);
};

// removeDuplicates1(nums);
// console.log(nums);

removeDuplicates2 = nums => {
  let nums2 = [];
  for (let j = 0; j < nums.length; j++) {
    if (!nums2.includes(nums[j])) {
      nums2.push(nums[j]);
    }
  }
  return nums2;
};

// console.log(removeDuplicates2(nums));
function removeDuplicate(arr) {
  return [...new Set(arr)];
}
function removeDuplicate(arr) {
  let temp = arr.filter((elem, index) => {
    return arr.indexOf(elem) === index;
  });
  return temp;
}
// console.log(removeDuplicate([6, 4, 6, 5, 8, 8, 10, 1]));

let arr = [1, 2, 2, 4, 5, 6, 6]


function removeDuplicateNew(arr) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log('true', arr[i])
        arr.splice(i, 1)
      }
    }
  }
  return arr
}

console.log(removeDuplicateNew(arr))