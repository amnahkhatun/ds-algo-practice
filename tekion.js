/* const arr1 = [1,2,3,4]


logArray = (arr) => {
  for(let i=0;i<arr.length;i++){
  console.log(arr[i])
  }
}

arr1.logArray();

function outer (a) {
  return function inner (b){
    console.log(a,b)
  }
}

outer(2)(3)

 compose(square, addTen)(20) = 900;
compose(f1,f2,…fn)(value); */

function addTen(a) {
  return a + 10;
}
function square(a) {
  return a * a;
}

function compose(...fn1) {
  let output;
  return function(value) {
    for (let i = 0; i < fn1.length; i++) {
      output = fn1[i](value);
    }
    return output;
  };
}

// console.log(compose(square, square, addTen)(20));

function addSum(a) {
  return function(b) {
    return function(c) {
      console.log(a + b + c);
    };
  };
}
addSum(2)(4)(5);
