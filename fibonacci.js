let fibCalculations = 0;
let memoCalculations = 0;

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
  fibCalculations ++;
  if (num < 2) {
    return num;
  }
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
};
// console.log(fibonacciRecursive(9000));

//Recursion using Memoization

function fibMemo() {
  let cache = {};
  return function fib(n) {
    memoCalculations++;
    if (n in cache) {
      return cache[n]
    } else {
      if (n < 2) {
        return n
      } else {
        cache[n] = fib(n - 1) + fib(n - 2)
        return cache[n]
      }
    }
  }
}

function fibDP2(n){
  let answer = [0,1];
  for(let i=2;i<=n;i++){
    answer.push(answer[i-2] + answer[i-1])
  }
  return answer.pop()
}
console.log(fibonacciRecursive1(100));
console.log(fibMemo()(100))
console.log(fibDP2(100));


// console.log('slow', fibCalculations)
// console.log('fast', memoCalculations)