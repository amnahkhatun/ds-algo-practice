import Logger from './Logger';

const custom = new Logger

custom.log()

// var firstName = "John";

// function printName(firstName) {
//   var lastName = "Doe";
//   return firstName + " " + lastName;
// }

// var displayName1 = printName(firstName);
// console.log(displayName1);

// // higher order function and closure

// function greet(greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//   };
// }

// // greet("hello")("amnah");
// // greet("hello")("khatun");

// //using arrow function

// greetArr = greeting => name => console.log(`${greeting} ${name}`);
// // greetArr("hello")("roshni");

// // call bind and apply
// //property name for all object should be same
// const object1 = {
//   fname: "amnah",
//   lname: "khatun",
//   printFullName(greeting) {
//     console.log(`${greeting} ${this.fname} ${this.lname}`);
//   }
// };

// const object2 = {
//   fname: "John",
//   lname: "Doe"
// };
// object1.printFullName("hello");

// const printFullName = object1.printFullName;

// printFullName.call(object2, "Hi");

// //Memoization example

// function memoizeAddition() {
//   let cache = {};
//   return value => {
//     if (value in cache) {
//       console.log("fetching from cache");
//       return cache[value];
//     } else {
//       console.log("calculating");
//       let result = value + 10;
//       cache[value] = result;
//       return result;
//     }
//   };
// }
// let add = memoizeAddition();
// // console.log(add(20));
// // console.log(add(20));

// var a = 10;

// function outer() {
//   var b = 20;
//   function inner() {
//     console.log(a, b);
//   }
//   inner();
// }

// outer();

// var x = 1;
// a();
// b();
// console.log(x, "x1");
// function a() {
//   x = 10;
//   console.log(x, "x2");
// }

// function b() {
//   x = 100;
//   console.log(x, "x3");
// }

// var a = 10;
// let b = 100;
// const c = 1000;
// var a = 20;
// b = 200;
// console.log(a);
// console.log(b);
// console.log(c);

// console.log(a);
// var a = 10;
// var b = null;

// let user = {
//   fname: "amnah"
// };
// let user2 = user;
// user.fname = "rosh";

// let displayName2 = printName("Nikon Tesla");


