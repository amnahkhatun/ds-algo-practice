// let haystack = "hello";
// let needle = "ll";
// let haystack = "aaaaa";
// let needle = "bba";
// let haystack = "";
// let needle = ""; //o/p: 0
let haystack = "";
let needle = "a"; //o/p: -1

needleHaystack = (haystack, needle) => {
  if (haystack === "" && needle === "") {
    return 0;
  } else if (haystack === "" && needle !== "") {
    return -1;
  } else if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
};
console.log(needleHaystack(haystack, needle));
