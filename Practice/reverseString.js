let reverseString = str => {
  let s = str.split("");
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left++], s[right--]] = [s[right], s[left]];
  }
  return s.join("");
};
// console.log(reverseString("hello amnah"));

let reverseString2 = str => {
  let s = str.replace(/\W/g, "");
  return [...s].reverse().join("");
};
console.log(reverseString2("A car, a man, a maraca"));
console.log(reverseString2("amnah"));
