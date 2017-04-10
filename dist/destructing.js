'use strict';

var languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

// let js = languages[0];
// let php = languages[1];
// let py = languages[2];
// let rb = languages[3];

//let js, php, py, rb;
//[js, php, py, rb] = languages;

// let [js, php, py, rb] = languages;
//
// console.log(js, php, py, rb);
//
//
// //let scores = [3, 4, 5, 6, 7];
// let scores = [3, 4];
//
// //let [low, ...rest] = scores;
//
// let [low, mid, high = 5] = scores;
//
// console.log(low, mid, high );

// function computeScore([low, mid]) {
//   console.log(low, mid);
// }
//
// computeScore([3, 4]);
//
// function getsScores() {
//   return [3, 4, 5];
// }
//
// let [low, mid, high] = getsScores();
//
// console.log(low, mid, high);

// let person = {
//   firstName: 'John',
//   lastName: 'Doe'
// }
//
// let {firstName: first, lastName: last, age = 25} = person;


var user = {
  firstName: 'John',
  lastName: 'Doe',
  social: {
    facebook: 'jojo',
    twitter: 'tjo'
  }
};

// let {firstName: first, lastName: last, age = 25, social: { facebook: fb }} = user;
//
// console.log(first, last, age, fb);

function post(url, _ref) {
  var _ref$data = _ref.data,
      firstName = _ref$data.firstName,
      lastName = _ref$data.lastName,
      cache = _ref.cache;

  console.log(firstName, lastName, cache);
}

var result = post('api/user', { data: user, cache: false });

function getUserInfo() {
  return {
    firstName: 'John',
    lastName: 'Doe',
    social: {
      facebook: 'jojo',
      twitter: 'tjo'
    }
  };
}

var _getUserInfo = getUserInfo(),
    first = _getUserInfo.firstName,
    last = _getUserInfo.lastName,
    _getUserInfo$age = _getUserInfo.age,
    age = _getUserInfo$age === undefined ? 25 : _getUserInfo$age,
    tw = _getUserInfo.social.twitter;

console.log(first, last, age, tw);