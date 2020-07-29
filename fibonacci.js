fibonacciIterative = num => {
  let n1 = 0;
  let n2 = 1;
  while (num > 1) {
    n3 = n1 + n2; // 1
    n1 = n2; //1
    n2 = n3; //1
    num--; //3
  }
  console.log(n3); //1
};
// fibonacciIterative(8);

let arr = [0, 1];
fibonacciRecursive = num => {
  if (num in arr) {
    return arr[num];
  }
  arr.push(fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2));
  return arr[num];
};

fibonacciRecursive1 = num => {
  if (num == 2 || num == 1) {
    return 1;
  }
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
};
// console.log(fibonacciRecursive(9000));
console.log(fibonacciRecursive1(9000));
