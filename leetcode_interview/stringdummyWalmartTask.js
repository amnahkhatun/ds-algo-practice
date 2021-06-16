let str =
  "Sam's club net sales over plan by $166.7M (9%) which is 2% less than last year";

let arrPositive = new Set([
  "more",
  "high",
  "increase",
  "increased",
  "higher",
  "positive"
]);

function isPositive(str) {
  let a = str.split(" ");
  for (let i = 0; i < a.length; i++) {
    if (arrPositive.has(a[i])) {
      return true;
    }
  }
  return false;
}

console.log(isPositive(str));
