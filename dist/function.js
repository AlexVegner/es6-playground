"use strict";

var count = 0;
function f(n) {
  count++;
  console.log("count = " + count + ", n = " + n);
  if (n < 3) return 1;
  return f(n - 1) + f(n - 2);
}
f(8);
console.log("Result " + count);