'use strict'

// 1 задание
// let object = {};
// function A() {
//     return object;
// }
// function B() {
//     return object;
// }

// let a = new A();
// let b = new B();

// alert( a == b ); // true


// 2 задание
// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('Введите число А');
//         this.b = +prompt('Введите число В');
//     },
//     this.sum = function() {
//         return this.a + this.b;
//     },
//     this.mul = function() {
//         return this.a * this.b;
//     }
// }


// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// 3 задание
// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function() {
//         this.num = +prompt('Введите число', 0);
//         return this.value += this.num;
//     }
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value); // выведет сумму этих значений