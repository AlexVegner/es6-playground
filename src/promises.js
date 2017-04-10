// let movieList = document.getElementId('movies');
//
// addMovieToList(movie) {
//   let img = document.createElement('img');
//   img.src = movie.Poster;
//   movieList.appendChield(img);
// }

// Array.prototype.duplicator = function(){
//     return [...this, ...this];
// }
//
// console.log([1,2,3,4,5].duplicator());

var objectArray = [{a : 'a', b : 'b'}, {a : 'a'}, {a : 'a', b : 'b', c : 'c'}];
objectArray = objectArray.sort((a, b) => Object.keys(a).length > Object.keys(b).length ? 1 : -1);
console.log(objectArray);

function Person(){}
var person = Person()
var person = new Person()



// function applyForVisa(documents) {
//   console.log('Обработка визы');
//   let promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       Math.random() > .5 ? resolve({}) : reject('В визе отказано: Нехватка документов');
//     }, 2000);
//      resolve({});
//      resolve({})
//   });
//   return promise;
// }
//
// function getVisa(visa) {
//   console.info('Виза получена')
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(visa), 2000);
//   });
// }
//
// function bookHotel(visa) {
//   console.log(visa);
//   console.log('Бронируем отель');
//   return Promise.resolve(visa);
// }
//
// function bayTickets(booking) {
//   console.log('Покупаем билеты');
//   console.log('Бронь', booking);
// }
//
//
//
// applyForVisa({})
//     .then(getVisa)
//     .then(bookHotel)
//     .then(bayTickets)
//     .catch(error => console.error(error))
//     .then(() => console.log('Я еще тут'));

// applyForVisa({})
//   .then(visa => console.info('Виза получена'),
//         reason => console.error(reason);
//   .then(bookHotel)
//   .then(bayTickets)



// applyForVisa({})
//   .then(function(visa) {
//     console.info('Виза получена')
//   },
//   function(reason) {
//       console.error(reason)
//   });

// applyForVisa({}, function(visa) {
//   console.info('Виза получена')
//   bookHotel(visa, function(reservation) {
//     bayTickets(reservation, function() {
//
//     },
//     function(reason) {
//     })
//   },
//   function(reason) {
//   })
// },
// function(reason) {
//   console.error(reason)
// })
