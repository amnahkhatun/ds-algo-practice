var minCostClimbingStairs = function(cost) {
  let first = cost[0]; // 0
  let second = cost[1]; // 2
  for (let i = 2; i < cost.length; i++) {
    cost[i] += min(first, second); // 2,
    first = second; // 2
    second = cost[i]; // 2
  }
  return min(cost[cost.length - 1], cost[cost.length - 2]);
};

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

var minCostClimbingStairs2 = function(cost) {
  let arr = [];
  arr[0] = cost[0];
  arr[1] = cost[1];
  for (let i = 2; i < cost.length; i++) {
    arr[i] = cost[i] + min(arr[i - 1], arr[i - 2]);
  }
  console.log(arr);
  return min(arr[arr.length - 1], arr[arr.length - 2]);
};
console.log(minCostClimbingStairs2([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs2([10, 15, 20]));
console.log(minCostClimbingStairs2([0, 2, 2, 1]));
