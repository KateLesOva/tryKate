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

// УРОК TASK ABOUT MOVIES AND IF


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

// УРОК CECLES

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num <= 55);


// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }


// УРОК

// const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genros: [],
//     privat: false
// };

// do {
//     console.log(num);
//     num++;
// } while (num <= 55);

// let i = 0;

// do {
//     const a = prompt ("One of have watched movie", ""),
//           b = prompt ("Marck it", "");

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//         i--;
//     }
// } while (i < 2);

// while (i < 2) {
//     const a = prompt ("One of have watched movie", ""),
//     b = prompt ("Marck it", "");

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//         i--;
//     }

// }

// for( let i = 0; i < 2; i++) {
//     const a = prompt ("One of have watched movie", ""),
//           b = prompt ("Marck it", "");

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

// }

// if (personalMovieDB.count < 10) {
//     console.log('u are not cool!');

// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30)  {
//     console.log('not bad!');
// } else if (personalMovieDB.count >= 30)  {
//     console.log('u are awesome!');
// } else {
//     console.log('error');

// }



// console.log(personalMovieDB);

// УРОК FUNCTION

// let num = 20;

// function showFirstMassagge (text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);


// }

// showFirstMassagge("Hello world");
// console.log(num);

// function culc (a,b) {
//     return (a + b);

// }

// console.log(culc (4, 3));
// console.log(culc (7, 3));

// function ret () {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log (anotherNum);


// const logger = function () {

//     console.log("Hello world");

// };  

// logger();

// // const calc = (a, b) => a + b;

// const calc = (a, b) => {
//     console.log("1");
//     return a + b;
// };

// console.log(calc(5, 6));


// УРОК method

// const str = "text";
// const arr = [1, 2, 4];

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = "Some fruite";

// console.log(fruit.indexOf("fruite"));

// const logg = "Hello world";

// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


let numberOfFilms;

function start() {
   numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genros: [],
    privat: false
};

// function showMyDB() {

//     for( let i = 0; i < 1; i++) {
//         if (personalMovieDB.privat == false) {
//             console.log(personalMovieDB);
//         } else {
//             console.log("error");
//         }
//    }
// };

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }

}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {

    for( let i = 1; i < 4; i++) {
        const c = prompt (`Ваш любимый жанр ${i}`, "");
        personalMovieDB.genros[i - 1] = c;

   }


};

writeYourGenres();
console.log(personalMovieDB);

// showMyDB();

// function rememberMyFilms() {

//     for( let i = 0; i < 2; i++) {
//         const a = prompt ("One of have watched movie", ""),
//               b = prompt ("Marck it", "");
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
    
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('u are not cool!');
    
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30)  {
//         console.log('not bad!');
//     } else if (personalMovieDB.count >= 30)  {
//         console.log('u are awesome!');
//     } else {
//         console.log('error');
//     }

// }
// detectPersonalLevel();


// console.log(personalMovieDB);