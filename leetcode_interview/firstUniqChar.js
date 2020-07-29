let s = "leetcode";
// let s = "aadadaad";

firstUniqChar1 = s => {
  let char = s.split("");
  let uniqueSet = new Set();
  let duplicateSet = new Set();

  for (let i = 0; i < char.length; i++) {
    if (uniqueSet.has(char[i])) {
      uniqueSet.delete(char[i]);
      duplicateSet.add(char[i]);
    } else if (!duplicateSet.has(char[i])) {
      uniqueSet.add(char[i]);
    }
  }

  for (let i = 0; i < char.length; i++) {
    if (uniqueSet.has(char[i])) {
      return i;
    }
  }
  return -1;
};

let index = firstUniqChar1(s);
console.log(index);
