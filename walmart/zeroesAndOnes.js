let arr = [0, 1, 1, 1, 0, 0, 1, 0, 1];

zeroesAndOnes = arr => {
  arr.sort(function(a, b) {
    return b - a;
  });
  console.log(arr);
};

zeroesAndOnes(arr);
