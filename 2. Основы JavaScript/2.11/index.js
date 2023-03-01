'use strict'

// 1 Задание
// alert( null || 2 || undefined ); // Выведет 2

// 2 Задание
// alert( alert(1) || 2 || alert(3) ); // Выведет 1, потом 2

// 3 Задание
// alert( 1 && null && 2 ); // Выведет null

// 4 Задание
// alert( alert(1) && alert(2) ); // Выведет 1, потом undefined

// 5 Задание
// alert( null || 2 && 3 || 4 ); // 3

// 6 Задание
// if (age >= 14 && age <= 90);

// 7 Задание
// if (!(age >= 14 && age <= 90));

// if (age < 14 || age > 90);

// 8 Задание
// if (-1 || 0) alert( 'first' ); // Выведется
// if (-1 && 0) alert( 'second' ); // Не выведется
// if (null || -1 && 1) alert( 'third' ); // Выведется

// 9 Задание
// let userName = prompt('Введите ваш логин');

// if (userLogin === 'Админ' ) {
//     let userPass = prompt('Введите пароль');
//     if (userPass === 'Я главный'){
//         alert('Здравствуйте!');
//     } else if ( userPass === '' || userPass === null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }
// } else if (userName === '' || userName === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( "Я вас не знаю" );
//   }



// // Вариант по блок-схеме
// if (userName === '' || userName === null) {
//     alert('Отменено');
// } else if (userName !== 'Админ') {
//     alert('Я вас не знаю', '');
// } else if (userName === 'Админ') {
//     let userPass = prompt('Введите пароль', '');
//     if (userPass === '' || userName === null) {
//         alert('Отменено');
//     } else if (userPass === 'Я главный') {
//         alert('Здравствуйте!');
//     } else {
//         alert('Неверный пароль');
//     }
// }  
    



