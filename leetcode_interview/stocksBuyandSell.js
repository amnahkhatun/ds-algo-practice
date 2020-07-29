// let nums = [7, 6, 4, 3, 1];
let prices = [7, 1, 5, 3, 6, 4];

maxProfit = nums => {
  profit = 0;
  buy = 0;
  sell = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    buy = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sell = nums[j];
      if (sell - buy > profit) {
        profit = sell - buy;
      }
    }
  }
  return profit;
};

maxProfit1 = nums => {
  let minPrice = 2 ** 31;
  let profit = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minPrice) {
      minPrice = nums[i];
    } else if (nums[i] - minPrice > profit) {
      profit = nums[i] - minPrice;
    }
  }
  return profit;
};

// console.log(maxProfit1(nums));
// let arr = [7, 1, 5, 3, 6, 4];
// let arr = [1, 2, 3, 4, 5];
// let arr = [7, 6, 4, 3, 1];
// let arr = [7, 4, 1, 5, 4, 6, 1];

maxMultipleProfit = prices => {
  let profit = 0;
  let i = 0;
  while (i + 1 != prices.length) {
    if (prices[i + 1] > prices[i]) profit += prices[i + 1] - prices[i];
    i++; //1,2
  }
  console.log(profit);
};

maxMultipleProfit(arr);
