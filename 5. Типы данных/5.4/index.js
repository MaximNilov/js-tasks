'use strict'

//  1 задание
// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// alert( fruits.length ); // 4



//  2 задание
// let styles = ['Джаз', 'Блюз']
// styles.push('Рок-н-ролл');
// styles[Math.floor( (styles.length - 1) / 2) ] = "Классика";
// alert( styles.shift() );
// styles.unshift('Рэп', 'Регги');


//  3 задание
// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2](); // Выведет a, b и саму функцию прописанную в push. Функция вызывается в качестве метода, получает в this объект и выводит его 


//  4 задание
// function sumInput() {

//     let num = [];
  
//     while (true) {
  
//       let value = prompt('Введите число', 0);
  
//       if (value === '' || value === null || !isFinite(value)) break;
  
//       num.push(+value);
//     }
  
//     let result = 0;
//     for (let number of num) {
//         result += number;
//     }
//     return result;
//   }
  
//   alert( sumInput() );


//  5 задание
// function getMaxSubSum(arr) {
//     let maxSum = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       let sumFixedStart = 0;
//       for (let j = i; j < arr.length; j++) {
//         sumFixedStart += arr[j];
//         maxSum = Math.max(maxSum, sumFixedStart);
//       }
//     }
  
//     return maxSum;
//   }

// alert( getMaxSubSum([-8, -6, 25, 6]) );  