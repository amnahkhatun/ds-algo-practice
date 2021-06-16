var generate = function(numRows) {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    let tempArr = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        tempArr[j] = 1;
      } else {
        tempArr[j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
    arr.push(tempArr);
  }
  return arr;
};
// console.log(generate(5));

let filterNonUnique = arr => {
  let myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!myMap.has(arr[i])) {
      myMap.set(arr[i], 1);
    } else {
      myMap.set(arr[i], myMap.get(arr[i]) + 1);
    }
  }
  let temp = [];
  myMap.forEach((value, key) => {
    if (value === 1) {
      temp.push(key);
    }
  });
  return temp;
};

console.log(filterNonUnique(["a", "c", "b", "d", "c", "b", "e", "c"])); //["a", "d", "e"]
