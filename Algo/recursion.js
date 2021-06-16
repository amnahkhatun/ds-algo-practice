let num = 5;
//5*4*3*2*1
function factorialIterative(num) {
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
// console.log(factorialIterative(num));

function factorialRecursive(num) {
  if (num < 2) {
    return num;
  }
  return num * factorialRecursive(num - 1);
}
// console.log(factorialRecursive(num));

//0,1,1,2,3,5,8,13
function fibonacciRecursive(n) {
  //O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
// console.log(fibonacciIterative(2));

function fibonacciIterative(n) {
  //O(n)
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}
console.log(fibonacciIterative(1));

function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
console.log(reverseString("amnah khatun"));
