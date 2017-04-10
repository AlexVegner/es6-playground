function multiply(x, y) {
  return x * y;
}

multiply(5, 3);
multiply.version = 'v1.1.1'
console.log(multiply.version);
console.log(multiply(5, 3));

function makeMultiplier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;
  }
  return myFunc;
}

var multiplierBy3 = makeMultiplier(3);
console.log(multiplierBy3(3));
console.log(multiplierBy3(10));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

function doOperationOn(x, operation) {
  return operation(x);
}

var result = doOperationOn(5, multiplierBy3);
console.log(result);


function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();
