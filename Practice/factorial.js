
factorialIterative = n => {
  let fact = 1;
  if (n == 0) {
    return 1;
  }
  while (n > 1) {
    fact = fact * n;
    n--;
  }
  return fact;
};

console.log(factorialIterative(0));

factorialRecursive = n => {
  if (n < 2) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
};

let fact = factorialRecursive(0);
console.log(fact);
