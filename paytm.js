// // 1.

class Person {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log(this.name, "line 8");
  }
}

function User(name) {
  this.name = name;
}

User.prototype.print = print;
console.log(name, "line 17"); // output:
var name = "Ashok";

function print() {
  console.log(this.name, "line 21");
}

let person = new Person("Ajay");
let user = new User("Mohan");

// print(); // Output:
// user.print(); // Output:
// person.printName(); // Output:
// person.print(); // Output:

// print.call(Person)

// // 2.

for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i, "i inside var"); // 5 5 5 5 5
  }, 5);
}
console.log(i, "first i"); // error

// for (let i = 1; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i, "i inside let"); // 1 2 3 4
//   }, 5);
// }
// console.log(i, "i second"); // error

// // let a = 1;[
// var a = 2;
// let a = 1;

// [1,2,3,4].filter(function(a,b){

// })

// [1,2,3,4].map((item)=>(
//   console.log(item+2)
// ))
// 3,4,5,6

// //3. Find the largest duplicate in an array of numbers
// // i/p - [1, 7, 1, 3, 1, 3] - o/p - 3
// // [1,2,1]
// // find the duplicate values
// // compare and find the largest

// function largestDuplicate(arr){
//   let arrNew = []
// 	for(let i=0;i<arr.length;i++){ // i=0 [1] // i=1 [2]
//     for(let j = i+1;j<arr.length;i++){// j=1 [2,1] // j=2 [1] // j=2 [1]
//       if(arr[i] === arr[j]){
//       	arrNew.push(arr[i]) // arrNew = [1]
//         i++;
//         break;
//       }

//     }
//     //[7,3]
//     let max = 0
//     for(let i = 0;i<arrNew.length;i++){
//     	if(arr[i] > arr[max] && arr[i] === arr[max]){
//       	max = arr[i]
//       }
//     }
//     console.log(max)

//     if(arrNew.length === 1){
//     	arrNew[0]
//     }

//   }

// }

// let converted = [1, 2].map(item => {
//   return {
//     number: item
//   };
// });

// console.log(converted);
