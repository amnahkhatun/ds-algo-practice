// let strs = ["flower", "flow", "flight"];
let strs = ["dog", "racecar", "car"];

longestCommonPrefix = strs => {
  if (!strs.length) {
    return "";
  }
  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
      }
      // console.log("str[i]==> ", str[i], "strs[0][i]==> ", strs[0][i]);
    }
  }
  return strs[0];
};
console.log(longestCommonPrefix(strs));
