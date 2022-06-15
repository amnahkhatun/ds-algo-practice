 let nums = [1,2,3,4,5,6,7], k = 3
//  o/p:[5,6,7,1,2,3,4]
//  let nums = [-1,-100,3,99], k = 2
//  o/p:[3,99,-1,-100]


var rotate = function(nums, k) {
let pos = (k % nums.length)
console.log({pos})
let n = nums.splice(nums.length - pos)
console.log({n})
nums.splice(0, 0, ...n)
console.log({nums})
};

rotate(nums,k)