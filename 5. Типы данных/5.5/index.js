'use strict'

//  1 задание
// function camelize(str) {
//     return str.split('-').map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) ).join('');
//   }

// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");

//  2 задание
// function filterRange(arr, a, b) {
//     return arr.filter( item => (a <= item && item <= b) );
//   }

// let arr = [5, 3, 8, 1]; 
// let filtered = filterRange(arr, 1, 4);
  
// alert(filtered);
// alert(arr);



//  3 задание
// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {
//       let value = arr[i];
  
//       // удалить, если за пределами интервала
//       if (value < a || value > b) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }
  
//   }
  
//   let arr = [5, 3, 8, 1];
  
//   filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
  
//   alert( arr ); // [3, 1]


//  4 задание
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr ); // 8, 5, 2, 1, -10


//  5 задание
// function copySorted(arr) {
//     return arr.slice().sort();
//   }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)


//  6 задание



//  7 задание
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша


//  8 задание
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
//   }));

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин



//  9 задание
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя


//  10 задание
// function sortByAge(arr) {
//     arr.sort((a, b) => a.age > b.age ? 1 : -1);
//   }


//  11 задание
// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//   }

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...


//  12 задание
// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//   }
  
//   let vasya = { name: "Вася", age: 25 };
//   let petya = { name: "Петя", age: 30 };
//   let masha = { name: "Маша", age: 29 };
  
//   let arr = [ vasya, petya, masha ];
  
//   alert( getAverageAge(arr) ); // 28



//  13 задание
// function unique(arr) {
//     let result = [];
  
//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }
  
//     return result;
//   }
  
//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
  
//   alert( unique(strings) ); // кришна, харе, :-O

// 14 задание
// function groupById(arr) {
//     return arr.reduce((obj, value) => {
//       obj[value.id] = value;
//       return obj;
//     }, {})
//   }