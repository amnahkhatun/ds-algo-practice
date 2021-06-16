// let A = [1, 2, 5, 4, 0, 2];
// let B = [2, 4, 5, 0, 1, 2];
let A = [1, 2, 5];
let B = [2, 4, 5];

function arrayEqualOrNot(A, B) {
  let map1 = new Map();
  let count;
  for (let i = 0; i < A.length; i++) {
    if (map1.has(A[i])) {
      count = map1.get(A[i]);
      map1.set(A[i], count + 1);
    } else {
      map1.set(A[i], 1);
    }
  }

  for (let j = 0; j < B.length; j++) {
    count = map1.get(B[j]);
    if (count === 1) {
      map1.delete(B[j]);
    } else {
      map1.set(B[j], count - 1);
    }
  }

  console.log(map1.size);
  if (map1.size !== 0) {
    console.log("not same");
  } else {
    console.log("same");
  }
}

arrayEqualOrNot(A, B);
