let staticLanguages = ['C', 'C++', 'Java'];
let dinamicLanguages = ['JavaScript',  'PHP', 'Ruby'];

let languages = [...staticLanguages, 'C#', ...dinamicLanguages, 'Python'];

//console.log(languages);


// function add(x, y, z) {
//   console.log(x + y + z)
// }

// let numbers = [1, 2, 3];
//
// add(...numbers);


let state = { a: 'test'}
let c = {...state, visibilityFilter: 'action.filter' }

let style1 = {
  test1: {font: 'my'}
}

let style2 = {
  test2: {...style1.test1, size: 'my'}
}



console.log(style2);
