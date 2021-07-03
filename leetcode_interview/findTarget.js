function findTarget(arr, target) {
  let myMap = new Map();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let comp = target - arr[i];
    if (myMap.has(comp)) {
      console.log(arr[i], comp);
      count++;
      // console.log(myMap);
      // return true;
    } else {
      myMap.set(arr[i], 1);
    }
  }
  return count;
}

console.log(findTarget([1, 2, 3, 4, 5, 6, 7], 8));
