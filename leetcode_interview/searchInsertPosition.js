let nums = [1,3,5,6], target = 7
// let nums = [1,3,5,6], target = 2

var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right){
          let mid = Math.floor((left + right)/2); // 1
          console.log({mid})
        if(target < nums[mid]){ // 7 < 3
            right = mid - 1;
            console.log({right})
        } else if(target > nums[mid]){ // 7 > 3
            left = mid + 1; // 2
            console.log({left})
        } else {
            return mid //returning when we have target
        }
    }
    return left // returning the nearesr value of target
};

console.log(searchInsert(nums,target))