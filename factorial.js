let n = 0;

factorialIterative = n => {
  let fact = 1;
  if (n == 0) {
    return 1;
  }
  while (n > 1) {
    fact = fact * n;
    n--;
  }
  console.log(fact);
};

// factorialIterative(n);

factorialRecursive = n => {
  if (n == 1 || n == 0) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
};

let fact = factorialRecursive(0);
console.log(fact);
