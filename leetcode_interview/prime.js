function primeNumber() {
  for (let i = 2; i <= 200; i++) {
    let prime = false;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) {
        // prime = true;
        return i;
      }
    }
  }
}

function IsTrue() {
  if (true) {
    return true;
  }
}

const arr = ["1", "3", "4"];

Array.prototype.myMap = function(cb) {
  let newArr = [];
  for (let arr of this) {
    newArr.push(cb(arr));
  }
  return newArr;
};

// arr.myMap(item => console.log(item * 2));

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)
  console.log(result); // "done!"
}

f();

let obj1 = {
  fname: "amnah",
  lname: "khatun",
  address: {
    city: "Jamshedpur"
  }
};

let obj2 = { ...obj1 }; //shallow copy

obj2.fname = "elon";
obj2.address.city = "new york";
console.log(obj1, "obj1"); // { fname: 'amnah', lname: 'khatun', address: { city: 'new york' } }
console.log(obj2, "obj2"); // { fname: 'elon', lname: 'khatun', address: { city: 'new york' } }

/* (function(){
  b = 3;
  var a = b;
  
  console.log(a,b)
})();

console.log("a defined? " + (typeof a ));
console.log("b defined? " + (typeof b )); */
/* var foo = "xyz";

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); //bar
        console.log("outer func:  self.foo = " + self.foo); //undefined
        (function() {
            console.log("inner func:  this.foo = " + this.foo);// bar
            console.log("inner func:  self.foo = " + self.foo); //undefined
        }());
    }
};
myObject.func(); */

/* let c = 20;
function outer (){
  let a = 10;
  return function inner(){
  let b =100;
    console.log(a,b,c)
  }
}

let abc = outer();
abc();

outer()(); */

let str = "amnah";
let str1 = str.split("");
console.log(str1.reverse().join(""));

f; /* unction rev(){
  for(let i = str1.length; i > 0; i--){
    console.log(i)
  }
}
rev("amnah") */
