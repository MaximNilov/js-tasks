'use strict'

// 1 задание
// let user = {
//     name: "Василий Иванович",
//     age: 35
//   };

// let json = JSON.stringify(user);
// alert(json);

// let user_2 = JSON.parse(json);
// alert(user_2);


// 2 задание
// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
//   };
  
//   // цикличные ссылки
//   room.occupiedBy = meetup;
//   meetup.self = meetup;
  
//   alert( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value;
//   }));
  
//   /* в результате должно быть:
//   {
//     "title":"Совещание",
//     "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
//     "place":{"number":23}
//   }
//   */
 