let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;

mergeSortedArray = (nums1, nums2, m, n) => {
  let currMergeIndex = nums1.length - 1; //curr correct position of merged array

  let currNums2 = n - 1; //curr idx of second array
  let currNums1 = m - 1; //curr idx of first array (not zero elements)

  //going only once through whole nums1 array
  while (currMergeIndex >= 0) {
    const first = nums1[currNums1];
    const second = nums2[currNums2];

    if (second >= first) {
      //if el from second array is bigger => put into curr correct position of merged array
      nums1[currMergeIndex] = second;
      currNums2 -= 1;
    } else if (second >= first) {
      ////if el from first array is bigger => put into curr correct position of merged array
      nums1[currMergeIndex] = first;
      currNums1 -= 1;
    } else if (typeof first === "undefined") {
      //when we went through all elements in first array - attach only from second
      nums1[currMergeIndex] = second;
      currNums2 -= 1;
    } else {
      nums1[currMergeIndex] = first; //when we went through all elements in second array - attach only from first
      currNums1 -= 1;
    }

    currMergeIndex -= 1;
  }

  return nums1;
};

// console.log(mergeSortedArray(nums1, nums2, m, n));

let mergeSortedArray2 = (arr1, arr2) => {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length < 2) {
    return arr1;
  }
  if (arr2.length < 2) {
    return arr2;
  }

  while (arr1Item || arr2Item) {
    if (arr2Item === undefined || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return mergedArray;
};
// console.log(mergeSortedArray2([0, 3, 4, 31], [3, 4, 6, 30]));
// console.log(mergeSortedArray2([1, 2], [4, 5, 6]));

let merge = function (nums1, m, nums2, n) {
console.log(nums1.length)
  nums1.splice(m, nums1.length, ...nums2)
  return nums1.sort((a, b) => a - b)
};
console.log(merge(nums1, m, nums2, n))