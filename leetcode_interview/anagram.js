let s = "cat";
let t = "act";

isAnagram = (s, t) => {
  let myMap = new Map();
  let sArr = s.split("");
  let tArr = t.split("");

  if (sArr.length !== tArr.length) {
    return false;
  }

  for (let i = 0; i < sArr.length; i++) {
    if (myMap.has(sArr[i])) {
      let count = myMap.get(sArr[i]);
      myMap.set(sArr[i], count + 1);
    } else {
      myMap.set(sArr[i], 1);
    }
  }
  for (let i = 0; i < tArr.length; i++) {
    if (myMap.has(tArr[i])) {
      let count = myMap.get(tArr[i]);
      if (count === 1) {
        myMap.delete(tArr[i]);
      } else {
        myMap.set(tArr[i], count - 1);
      }
    } else {
      return false;
    }
  }

  return true;
};

// console.log(isAnagram(s, t));

function anagrams(stringA, stringB) {
  /*First, we remove any non-alphabet character using regex and convert       
        convert the strings to lowercase. */
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

  /*Next, we check if the lengths of the strings are equal. 
        If they are anagrams, they will have the same length. */
  if (stringA.length !== stringB.length) {
    return false;
  }

  let arrB = stringB.split("");

  for (let char of stringA) {
    if (!arrB.includes(char)) {
      return false;
      break;
    } else {
      arrB.splice(arrB.indexOf(char), 1);
    }
  }

  return true;
}

// console.log(anagrams(s, t));

anagrams1 = (s, t) => {
  if (s.split("").length !== t.split("").length) {
    return false;
  }
  return (
    s
      .split("")
      .sort()
      .join("") ===
    t
      .split("")
      .sort()
      .join("")
  );
};
console.log(anagrams1(s, t));
