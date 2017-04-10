'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var add = function add(x, y) {
  return x + y;
};

console.log(add(1, 2));
console.log(typeof add === 'undefined' ? 'undefined' : _typeof(add));

// let square = function(x) {
//   return x * x;
// }

var square = function square(x) {
  return x * x;
};

console.log(square(3));

// let giveMeAnswer = function() {
//   return 42;
// }

var giveMeAnswer = function giveMeAnswer() {
  return 42;
};

console.log(giveMeAnswer());

// let log = function() {
//   console.log('logging')
// }

var log = function log() {
  return console.log('logging');
};

log();

// let multiply = function(x, y) {
//   let result = x * y;
//   return result;
// }

var multiply = function multiply(x, y) {
  var result = x * y;
  return result;
};

console.log(multiply(2, 4));

// let getPerson = function() {
//   return {name: 'John'};
// }

var getPerson = function getPerson() {
  return { name: 'John' };
};

console.log(getPerson());

// (function() {
//   console.log('IIFE');
// })();

(function () {
  return console.log('IIFE');
})();

var numbers = [1, 2, 3, 4, 5, 6, 7, 10, 1];

var sum = 0;

// numbers.forEach(function(num) {
//   sum += num;
// });

numbers.forEach(function (num) {
  return sum += num;
});

console.log(sum);

var squared = numbers.map(function (n) {
  return n * n;
});
console.log(numbers);
console.log(squared);

// let person = {
//   name: 'Bob',
//   greet: function() {
//     let that = this;
//     setTimeout(function() {
//       console.log(`Hello, my name is ${that.name}`);
//       console.log('"this" is', this);
//       console.log('"that" is', that);
//     }, 2000);
//   },
// }

var person = {
  name: 'Bob',
  greet: function greet() {
    var _this = this;

    setTimeout(function () {
      console.log('Hello, my name is ' + _this.name);
      console.log('"this" is', _this);
    }, 2000);
  }
};

// let person = {
//   name: 'Bob',
//   greet: () => {
//     console.log(`Hello, my name is ${this.name}`);
//     console.log(this);
//   }
// }

person.greet();