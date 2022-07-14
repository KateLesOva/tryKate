(function () {
    'use strict';
 }());

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;

// console.log(number);


// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(named);
// var named = 'Ivah';

// {
//     let result = 50
// }

// console.log(result);


// ВТОРОЙ УРОК


// let number = 4.6;

// console.log(4/0);
// console.log('strinf' * 9);


// let person = "Alex";
// console.log(person);

// let bool = true;

// let unt;
// console.log(unt);

// const obj = {
//     name:'Name',
//     age: 25,
//     isMarried: false

// };

// console.log(obj.age);


// let arr = ['plum.png', 'apple.jpg', 'orange.bmp'];
// console.log(arr[0]);


// ТРЕТИЙ УРОК

// alert ('Hello');

// const result = confirm('are u here?');

// const result = prompt('are u here?', 'yes');
// console.log(typeof(result));

// const answers = [];

// answers[0] = prompt('are u here?', '');
// answers[1] = prompt('u name?', '');
// answers[2] = prompt('u age?', '');

// console.log(answers[0]);
// console.log(answers[1]);
// console.log(answers[2]);

// const category = 'toy';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';

// console.log(`hi, ${user}`);


// УРОК


// console.log('arr' + '-object');
// console.log(4 + '-object');
// console.log(4 + +'8');


// let incr = 10, 
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);


// console.log(5%2);

// console.log(2*4 === "8");

// const isChecked = false,
//       isClose = false;

// // console.log(isChecked && isClose);
// console.log(isChecked || !isClose);

// УРОК


// const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");

// const prrsonalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genros: [],
//     privat: false
// };


// const a = prompt ("One of have watched movie", ""),
//       b = prompt ("Marck it", ""),
//       c = prompt ("One of have watched movie", ""),
//       d = prompt ("Marck it", "");

// prrsonalMovieDB.movies[a] = b;
// prrsonalMovieDB.movies[c] = d;

// console.log(prrsonalMovieDB);


// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('error');
// }


// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('Too many');
// } else {
//     console.log('Everthing is ok');

// }

// const num = 66;

// // (num === 50) ? console.log('Everthing is ok'): console.log('error');

// switch (num) {
//     case 49:
//         console.log('error');
//         break;
//     case 100:
//         console.log('error');
//         break;
//     case 50:
//         console.log('ok');
//         break;
//     default:
//         console.log('not this time!');
//         break;

// }

// УРОК

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num <= 55);


for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
}
