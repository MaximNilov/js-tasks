'use strict'

// 1 задание
// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
//   console.log( user.ref.name ); // Каким будет результат? - undefined


// 2 задание
// let calculator = {
//     read() {
//         this.a = +prompt('Введите число A', 0);
//         this.b = +prompt('Введите число B', 0);
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );


// 3 задание
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//     return this;
//   }
// };

// ladder.up().up().down().showStep().down().showStep();