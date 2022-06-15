let arr = ["aaa", "ccc", "bbb", "bbb", "aaa", "aaa"];
let arr1 = ["aaa", "bbb", "ccc", "bbb", "bbb", "bbb", "aaa", "aaa", "ccc"];
let arr2 = ["aaa", "bbb", "aaa", "aaa", "aaa"];

repeatedString = arr => {
  let repeatedStringMap = new Map();

  // keeping count of each element in a Map
  for (let i = 0; i < arr.length; i++) {
    if (repeatedStringMap.has(arr[i])) {
      let count = repeatedStringMap.get(arr[i]);
      repeatedStringMap.set(arr[i], count + 1);
    } else {
      repeatedStringMap.set(arr[i], 1);
    }
  }

  console.log(repeatedStringMap);
  //counting second most repeated key in map
  let mostRepeatedValue = Number.MIN_VALUE;
  let secondmostRepeatedValue = Number.MIN_VALUE;
  let mostRepeatedKey = "";
  let secondmostRepeatedKey = "";

  for (let [k, v] of repeatedStringMap) {
    if (v > mostRepeatedValue) {
      secondmostRepeatedKey = mostRepeatedKey;
      secondmostRepeatedValue = mostRepeatedValue;
      mostRepeatedValue = v;
    } else if (v < mostRepeatedValue && v > secondmostRepeatedValue) {
      secondmostRepeatedKey = k;
      secondmostRepeatedValue = v;
    }
  }
  console.log("Output for ", arr, "-->", secondmostRepeatedKey);
};
repeatedString(arr);
// repeatedString(arr1);
// repeatedString(arr2);
