let s = "A man, a plan, a canal: Panama";
// let s = "race a car";

validPallindrome = s => {
  let str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  str = str.split("");
  console.log(str);
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    let temp = str[left];
    str[left++] = str[right];
    str[right--] = temp;
  }
  return str.join("") === s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
};

// console.log(validPallindrome(s));

validPallindrome1 = s => {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  console.log(s);
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left++] !== s[right--]) {
      return false;
    }
  }
  return true;
};
console.log(validPallindrome1(s));
