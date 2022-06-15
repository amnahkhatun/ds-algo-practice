let nums = [6, 4, 6, 5, 8, 10, 1];

duplicate = nums => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return nums[i];
      }
    }
  }
  return false;
};

// console.log(duplicate(nums));

duplicate1 = nums => {
  let set1 = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!set1.has(nums[i])) {
      set1.add(nums[i]);
    } else {
      return nums[i];
    }
  }
  return false;
};
// console.log(duplicate1(nums));


let a = 100;
var b = 200;
const c = 300;
{
  let a = 10;
  var b = 20;
  const c = 30;
  console.log(a)
  console.log(b)
  console.log(c)
}
console.log(a)
console.log(b)
console.log(c)
