var countAndSay = function(n) {
  if (n === 1) {
    return 1;
  }
  return say(n);
};
function say(n) {
  // if (n === 1) {
  //   return 1;
  // } else {
  //   // let m = count(n);
  //   return count(n - 1);
  // }
  let m = "";
  for (let i = 1; i <= n; i++) {
    m += count(i);
  }
  return m;
}
function count(n) {
  let countN = n.toString().split("");
  console.log(countN, "countN");
  let m = "";
  let count = 1;

  for (let i = 0; i < countN.length; i++) {
    if (countN[i] === countN[i + 1]) {
      count++;
    } else {
      m += count + countN[i];
      count = 1;
    }
  }
  console.log(m, "m");
  return m;
}

console.log(say(4));
