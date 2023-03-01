'use strict'

// 1 задание
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;


// 2 задание
// let schedule = {};

// function isEmpty() {
//     for (let key in schedule) {
//         return false;
//     }
//     return true;
// }

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// 3 задание
// const user = {
//     name: "John"
//   };
  
//   // это будет работать?
//   user.name = "Pete"; 
//   //Да, т.к. меняется сам объект, а const user является ссылкой на объект и её нельзя поменять

// 4 задание
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// let sum = 0;

// for (let key in salaries) {
//     sum += salaries[key];
// }  

// alert(sum);


// 5 задание
// до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//             // alert(obj[key]);
//         }
//     }  
//   }

//  multiplyNumeric(menu);
  
  // после вызова функции
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };