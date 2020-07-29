let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

rotate = (nums, k) => {
  k = k % nums.length;
  console.log(k);
  let count = 0;
  let i = 0;
  while (count != nums.length) {
    swap(i, k);
    count++;
  }
};

function swap(i, k) {
  let s = i + k;
  let lastIndex = nums.length - 1;
  if (s > lastIndex) {
    s = s - lastIndex;
  }
  let temp = nums[i];
  nums[i] = nums[s];
  nums[s] = temp  
}
rotate(nums, k);
