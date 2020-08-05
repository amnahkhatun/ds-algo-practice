let arr = [1, 2, 4, 1, 3, 5, 1, 6, 1, 8, 2, 8];

repeatedNumberCount = arr => {
  let myMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (myMap.has(arr[i])) {
      let sum = myMap.get(arr[i]); //1, 2
      myMap.set(arr[i], sum + arr[i]); //1-> 2
    } else {
      myMap.set(arr[i], arr[i]);
    }
  }
  return myMap;
};

console.log(repeatedNumberCount(arr));

// 1->4,
// 2->4,
// 3->3
