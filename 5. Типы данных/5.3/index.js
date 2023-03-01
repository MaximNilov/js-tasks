'use strict'

// 1 задание
// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }
// alert(ucFirst("игорь"));


// 2 задание
// function checkSpam(str) {
//     let lower = str.toLowerCase();
//     if (lower.includes('viagra') || str.includes('xxx')) {
//         return alert('yes'); //true
//     } else {
//         return alert('no'); //false
//     }
// }

// checkSpam('buy ViAgRA now');
// checkSpam('free xxxxx');
// checkSpam("innocent rabbit");


// 3 задание
// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.slice(0, maxlength - 1) + '…';
//     } else {
//         return str;
//     }
// }

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"


// 4 задание
// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }

// extractCurrencyValue('$120');