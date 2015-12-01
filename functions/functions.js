//write a function that takes an argument and returns that arugment

function printer(x) {
  return x;
}

var printer = function printer(x) {
  return x;
};

fart = printer('fart');
console.log(fart);

// write two binary functions add and mull, that take two numbers and return their sum and product

function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

// write a function that takes an argument and returns a function that returns that argument

function identityf(x) {
  return function () {
    return x;
  };
}

//write a function that adds from two invocations
function addf(x) {
  return function (y) {
    return x + y;
  };
}

/*
write a function that takes a binary function, and makes it callable with two invocations
  addf = applyf(add);
  addf(3)(4)
  applyf(mul)(5)(6)
*/

function applyf(binary) {
  return function (x) {
    return function (y) {
      return binary(x, y);
    };
  };
}



// var init = function init() {
//   printer(fart);
// };
//
// console.log(init);
