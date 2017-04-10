'use strict';

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'bill.gates.gmail.com';

var person = {
  firstName: firstName,
  lastName: lastName,
  email: email,
  sayHello: function sayHello() {
    console.log('Hi, my name is ' + firstName + ' ' + lastName);
  },

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(value) {
    this.firstName = value;
  }
};

// Object.defineProperty(person, 'fullName', {
//   get: function() {
//     return this.firstName + ' ' + this.lastName;
//   },
//   set: function(value) {
//     this.firstName = value;
//   }
// })

console.log(person);

person.sayHello();

// function createCar(property, value) {
//   var car = {};
//
//   car[property] = value;
//
//   return car;
// }

// function createCar(property, value) {
//   return {
//     [property]: value,
//     ['_' + property]: value,
//     [property.toUpperCase()]: value,
//     ['get' + property]() {
//       return this[property];
//     }
//   };
// }
//
// console.log(createCar('engine', 'test'));