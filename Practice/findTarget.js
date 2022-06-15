function findTarget(arr, target) {
  let mySet = new Set();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let comp = target - arr[i];
    if (mySet.has(comp)) {
      console.log(arr[i], comp);
      count++;
      // console.log(mySet);
      // return true;
    } else {
      mySet.add(arr[i]);
    }
  }
  return count;
}

console.log(findTarget([1, 2, 3, 4, 5, 6, 7], 8));

var twoSum = function (nums, target) {
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i]
    if (myMap.has(comp)) {
      console.log(myMap.get(comp), i)
      // return [myMap.get(comp), i]

    } else {
      myMap.set(nums[i], i)

    }
  }

};
console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 8));


// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

let nums = [2, 7, 11, 15], target = 9
function findTargerTwoPointer(nums, target){
  //pseudo code
  let left = 0, right = nums.length - 1 // 0,3
  while(left < right){ // 0 < 2, 0<1
    if(nums[left] + nums[right] > target){//17>9 true, 13>9, 9>9
      right --; // 2, 1
    }else if(nums[left]+nums[right] === target){
      return [left,right]
    }else {
      left ++
    }
  }
}

// console.log(findTargerTwoPointer([1, 2, 3, 4, 5, 6, 7], 8))