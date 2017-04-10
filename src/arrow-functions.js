let add = (x, y) => x + y;

console.log(add(1, 2));
console.log(typeof add);

// let square = function(x) {
//   return x * x;
// }

 let square = x => x * x;

console.log(square(3));


// let giveMeAnswer = function() {
//   return 42;
// }

let giveMeAnswer = () => 42;

console.log(giveMeAnswer());

// let log = function() {
//   console.log('logging')
// }

let log = () => console.log('logging');

log();

// let multiply = function(x, y) {
//   let result = x * y;
//   return result;
// }

let multiply = (x, y) => {
  let result = x * y;
  return result;
}

console.log(multiply(2, 4));

// let getPerson = function() {
//   return {name: 'John'};
// }

let getPerson = () => ({ name: 'John' });

console.log(getPerson());

// (function() {
//   console.log('IIFE');
// })();

(() => console.log('IIFE'))();

let numbers = [1, 2, 3, 4, 5, 6, 7, 10, 1];

let sum = 0;

// numbers.forEach(function(num) {
//   sum += num;
// });

numbers.forEach(num => sum += num);

console.log(sum);

let squared = numbers.map(n => n * n)
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

let person = {
  name: 'Bob',
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`);
      console.log('"this" is', this);
    }, 2000);
  },
}


// let person = {
//   name: 'Bob',
//   greet: () => {
//     console.log(`Hello, my name is ${this.name}`);
//     console.log(this);
//   }
// }

person.greet();
