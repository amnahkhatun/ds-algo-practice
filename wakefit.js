function sum(a) {
  return function inner(b) {
    return function third(c) {
      console.log(a + b + c);
    };
  };
}

let x = outer(2);
x(3);

outer(2)(3);

sum(5)(6)(7)(function(a) {
  //45
  return (function() {
    console.log(a); //45
    a = 23;
  })();
})(45);

function randomFunc() {
  for (var i = 0; i < 2; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}

randomFunc();

var x = 23;

(function() {
  var x = 43;
  (function random() {
    x++; //44
    console.log(x); //21
    var x = 21;
  })();
})();
