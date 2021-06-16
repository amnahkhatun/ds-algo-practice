import { Http2ServerRequest } from "http2";

// // var countSubstrings = function(s) {
// //   let len = s.length;
// //   let count = len;
// //   let dp = [];
// //   for (let i = 0; i < len; i++) {
// //     let temp = [];
// //     for (let j = 0; j < len; j++) {
// //       temp.push(j === i ? true : false);
// //     }
// //     dp.push(temp);
// //   }
// //   // w is the window length (from 1 till max possible window)
// //   let w = 1;
// //   while (w <= len - 1) {
// //     for (let i = 0; i < len; i++) {
// //       if (i + w < len) {
// //         dp[i][i + w] =
// //           w === 1
// //             ? s[i] === s[i + w]
// //             : s[i] === s[i + w] && dp[i + 1][i + w - 1];
// //         if (dp[i][i + w] === true) {
// //           count += 1;
// //         }
// //       }
// //     }
// //     w += 1;
// //   }
// //   return count;
// // };

// var countSubstrings = function(s) {
//   let dp = [Array(s.length).fill(false), Array(s.length).fill(false)];
//   let count = 0;
//   for (let i = s.length - 1; i >= 0; i--) {
//     for (let j = i; j < s.length; j++) {
//       if (i === j) dp[i % 2][j] = true;
//       else if (j - i === 1 && s[i] === s[j]) dp[i % 2][j] = true;
//       else if (s[i] === s[j] && dp[(i + 1) % 2][j - 1]) dp[i % 2][j] = true;
//       else dp[i % 2][j] = false;
//       if (dp[i % 2][j]) count++;
//     }
//   }
//   return count;
// };
// console.log(countSubstrings("aabaa"));
const https = require("https");

async function getMovieList(year) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/movies?Year=<year>
  https
    .get(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`)
    .then(response => {
      const data = response.data;
      console.log(data);
    });
}
getMovieList(2010);
