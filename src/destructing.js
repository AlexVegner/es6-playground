let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

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


let user = {
  firstName: 'John',
  lastName: 'Doe',
  social: {
    facebook: 'jojo',
    twitter: 'tjo'
  }
}


// let {firstName: first, lastName: last, age = 25, social: { facebook: fb }} = user;
//
// console.log(first, last, age, fb);

function post(url, {data: {firstName, lastName}, cache}) {
  console.log(firstName, lastName, cache);
}

let result = post('api/user', {data: user, cache: false})

function getUserInfo() {
  return {
    firstName: 'John',
    lastName: 'Doe',
    social: {
      facebook: 'jojo',
      twitter: 'tjo'
    }
  }
}

let {firstName: first, lastName: last, age = 25, social: { twitter: tw }} = getUserInfo();

console.log(first, last, age, tw);
