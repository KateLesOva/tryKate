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


// let numberOfFilms;

// function start() {
//    numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");

// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genros: [],
//     privat: false
// };

// // function showMyDB() {

// //     for( let i = 0; i < 1; i++) {
// //         if (personalMovieDB.privat == false) {
// //             console.log(personalMovieDB);
// //         } else {
// //             console.log("error");
// //         }
// //    }
// // };

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }

// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {

//     for( let i = 1; i < 4; i++) {
//         // const c = prompt (`Ваш любимый жанр ${i}`, "");
//         // personalMovieDB.genros[i - 1] = c;

//         personalMovieDB.genros[i - 1] = prompt (`Ваш любимый жанр ${i}`, "");

//    }


// };

// writeYourGenres();
// console.log(personalMovieDB);

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

/////////////////!<!>!!!!!!!!!////////////////////////////////УРОК


// function first () {
//     //Do something
//     setTimeout(function() {
//           console.log(1);

//     }, 500);
// }


// function second () {
//     console.log(2);
// }

// first ();
// second ();


// function learnJS(lang, callback) {
//     console.log(`I learn ${lang}`);
//     callback();

// }

// learnJS('learnJS', function () {
//     console.log(`I have done this lesson!`);

// });


/////////////////!<!>!!!!!!!!!////////////////////////////////УРОК

// const options = {
//     name: 'test',
//     with: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//     console.log("Hello");

//     }
// };

// console.log(options.name);

// delete options.name;    
// // удалить ключ, но не значение

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]} `);
//             counter ++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]} `);
//         counter ++;
//     }
// }

// console.log(counter);

// options.makeTest();
// console.log(Object.keys(options).length);


// const options = {
//     name: 'test',
//     with: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//     console.log("Hello");

//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);


/////////////////!<!>!!!!!!!!!////////////////////////////////УРОК

// const arr = [1, 2, 3, 6, 8, 5];

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);


// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// item - номер по порядку
// i - значение єлемента
// arr - ссілка на массив, которій перебирается


// arr.pop();
// arr.push(7);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }   

// for (let value of arr) {
//     console.log(value);
// }
// const arr = [71, 2, 99, 6, 78, 5];

// // const str = prompt ("", "");
// // const products = str.split(", ");
// // console.log(products.join('; '));

// arr.sort(compareNum);
// console.log(arr)


// function compareNum (a, b) {
//     return a - b;
// }


/////////////////!<!>!!!!!!!!!////////////////////////////////УРОК


// let a = 5,
//     b = a;

//     b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //link in object! not copy!

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy (mainObj) {
//     let objCopy = {};

//     let key;

//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;

// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4

//     }
// };

// // const newNumbers = copy(numbers);

// // newNumbers.a = 10;

// // console.log(newNumbers);
// // console.log(numbers);


// const add = {
//     d:17,
//     e: 20
// };
// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'jghfggfghhjgh';

// console.log(newArray);
// console.log(oldArray);

// const video = ['yuotube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'lifejornal', 'blodger'],
//     internet = [...video, ...blogs, 'vk', 'fb'];

//     console.log(internet);


// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

    

// const array = ['a', 'b', 'c'];

// const newAarray = [...array];

// const addNew = {
//     d:17,
//     e: 20
// };

// const newObj = {...addNew};
// newObj.d = 44;
// console.log(newObj);


/////////////////!<!>!!!!!!!!!////////////////////////////////УРОК

let str = 'some';
let strObj = new String(str);

// console.log(typeof(strObj));
// console.log(typeof(str));


console.dir([1, 2, 3]);

const soldier = {
    helth: 400,
    armor: 100,
    sayHello: function () {
        console.dir("hELLO");

    }
};

const jonh = Object.create(soldier);

// const jonh = {
//     helth: 100
// };


// jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier);

// console.log(jonh.armor);
jonh.sayHello();