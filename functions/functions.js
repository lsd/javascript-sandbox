// 1. Write a function that takes an argument and returns that arugment

  function printer(x) {
    return x;
  }

  // Alt
  var printer = function printer(x) {
    return x;
  };

// 2. Write two binary functions add and mull, that take two numbers and return their sum and product

  function add(x, y) {
    return x + y;
  }


  function mul(x, y) {
    return x * y;
  }

// 3. Write a function that takes an argument and returns a function that returns that argument

function identityf(x) {
  return function () {
    return x;
  };
}

// 4. Write a function that adds from two invocations

  function addf(x) {
    return function (y) {
      return x + y;
    };
  }

/*
5. Write a function that takes a binary function, and makes it callable with two invocations

    addf = applyf(add);
    addf(3)(4)
    applyf(mul)(5)(6)
*/

  function applyf(binary) {
    return function test(x) {
      return function test2(y) {
        return binary(x, y);
      };
    };
  }

/*
6. Write a function that takes a function and an argument, and returns a function that can supply a second argument

    add3 = curry(add, 3);
    add3(4):                7
    curry(mul, 5)(6):       30

*/

  function curry(func, first) {
    return function(second) {
      return func(first, second);
    };
  }

  // Alt
  function curry(func, first) {
    return applyf(func)(first);
  }

/*
7. Without writing any new functions, show three ways to create the inc function

  inc(5): 6
  inc(inc(5)): 7
*/

  inc = addf(1);

  inc = applyf(add)(1);
  console.log(inc);
  console.log(inc(5));

  inc = curry(add, 1);
