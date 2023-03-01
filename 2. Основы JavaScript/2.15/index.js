'use strict'

// 1 задание

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Родители разрешили?');
//     }
//   }
// checkAge(16);  


//Работает также как и 1. Отличий в поведении нет.
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     // ...
//     return confirm('Родители разрешили?');
//   }

// checkAge(19);  

// 2 задание
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

// 1. Вариант
// function checkAge (age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }
// checkAge(16);  

// 2. Вариант
// function checkAge (age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }
// checkAge(16);

// 3 задание
// function min (a, b) {
//     return (a <= b) ? alert(a) : alert(b);
// }
// min(2, 5);
// min(3, -1);
// min(1, 1);
// min(368, 666);

// 4 задание
//Костыль конечно, но работает
// function pow (x, n) {
//     if (n < 1) {
//         alert(`Степень ${n} недопустима!`);
//         throw new Error(); // этот параметр загуглил
//     }
//     let result = x**n;
//     return alert(result);
// }

// let x = prompt('x', '');
// let n = prompt('n', '');

// pow(x, n);
