mergeSortedArray2 = (arr1, arr2) => {
  const mergedArr = [];
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
      mergedArr.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArr.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return mergedArr;
};

console.log(mergeSortedArray2([0, 3, 4, 31], [3, 4, 6, 30]));
console.log(mergeSortedArray2([1, 2], [4, 5, 6]));
