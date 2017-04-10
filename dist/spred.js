'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var staticLanguages = ['C', 'C++', 'Java'];
var dinamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

var languages = [].concat(staticLanguages, ['C#'], dinamicLanguages, ['Python']);

//console.log(languages);


// function add(x, y, z) {
//   console.log(x + y + z)
// }

// let numbers = [1, 2, 3];
//
// add(...numbers);


var state = { a: 'test' };
var c = _extends({}, state, { visibilityFilter: 'action.filter' });

var style1 = {
  test1: { font: 'my' }
};

var style2 = {
  test2: _extends({}, style1.test1, { size: 'my' })
};

console.log(style2);