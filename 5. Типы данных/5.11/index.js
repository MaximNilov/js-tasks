'use strict'

// 1 задание
// let date = new Date(2012, 1, 20, 3, 12);
// alert(date);

// 2 задание
// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//     return days[ date.getDay() ];
// }

// let date = new Date(2008, 0, 3);
// alert( getWeekDay(date) );


// 2 задание
// function getLocalDay(date) {
//     let day = date.getDay();
//     if (day == 0) {
//         day = 7;
//     }
//     return day;
// }

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2


// 3 задание
// function getDateAgo(date, days) {
//     let newDate = new Date(date);
//     newDate.setDate(date.getDate() - days);
//     return newDate.getDate();
// }

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


// 4 задание
// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }
// alert( getLastDayOfMonth(2017, 1) );

// 5 задание
// function getSecondsToday() {
//     let now = new Date();

//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//     let res = now - today;

//     return Math.round(res / 1000);
// }

// alert( getSecondsToday() );


// 6 задание
// function getSecondsToTomorrow() {
//     let now = new Date();

//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

//     let res = tomorrow - now;

//     return Math.round(res / 1000);
// }

// alert( getSecondsToTomorrow() );



// 7 задание
// function formatDate(date) {

// }

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );