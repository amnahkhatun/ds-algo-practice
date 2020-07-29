let str = "aabbcc";

repetitiveStringCount = str => {
  let s = str.split("");
  let s1 = "";
  let myMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (myMap.has(s[i])) {
      let count = myMap.get(s[i]);
      myMap.set(s[i], count + 1);
    } else {
      myMap.set(s[i], 1);
    }
  }
  // console.log(myMap);
  for (let [k, v] of myMap) {
    s1 += k + v;
  }
  console.log(s1);
};
repetitiveStringCount(str);
