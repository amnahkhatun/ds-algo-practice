var checkIfExist = function(arr) {
  let mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(2 * arr[i]) || mySet.has(arr[i] / 2)) {
      return true;
    } else {
      mySet.add(arr[i]);
    }
  }
  return false;
};
console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([3, 1, 7, 11]));
console.log(checkIfExist([7, 1, 14, 11]));
