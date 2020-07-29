//failing in let nums1 = [2, 1];
// let nums2 = [1, 2];
intersect = (nums1, nums2) => {
  let smallArray = nums1.length < nums2.length ? nums1 : nums2;
  let largeArray = nums1.length > nums2.length ? nums1 : nums2;
  let result = [];
  for (let i = 0; i < smallArray.length; i++) {
    if (largeArray.includes(smallArray[i])) {
      result.push(smallArray[i]);
      let index = largeArray.indexOf(smallArray[i]);
      largeArray.splice(index, 1);
      // console.log("result --> ", result, i);
      // console.log("small -->", smallArray, i);
      // console.log("large -->", largeArray, i);
    }
  }
  console.log(result);
};

// intersect(nums1, nums2);
let nums1 = [4, 9, 5];
let nums2 = [9, 4, 5, 8, 4];
intersect = (nums1, nums2) => {
  let myMap = new Map();
  for (let i of nums1) {
    if (myMap.has(i)) {
      let count = myMap.get(i);
      myMap.set(i, count + 1);
    } else {
      myMap.set(i, 1);
    }
  }
  console.log(myMap, "myMap 1");
  let result = [];
  for (let i of nums2) {
    if (myMap.has(i) && myMap.get(i) > 0) {
      console.log(myMap, "myMap 2", myMap.get(i));
      let count = myMap.get(i);
      result.push(i);
      myMap.set(i, count - 1);
    }
  }
  return result;

  // return result;
};
console.log(intersect(nums1, nums2));
