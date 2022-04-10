// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.
//Filter
// var numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.filter(function(num){
//  return num < 25;
// });
// console.log(newNumber)

//Filter using forEach
// var numbers = [3, 56, 2, 48, 5];
// var newNumber=[];

// numbers.forEach(function(num){
//   if(num < 10){
//     newNumber.push(num);
//   }
// });
// console.log(newNumber)

//Reduce - Accumulate a value by doing something to each item in an array.
// var numbers = [3, 56, 2, 48, 5];

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });
// console.log(newNumber);

// var newNumber = 0
// numbers.forEach(function(currentNumber){
// newNumber +=currentNumber
// })
// console.log(newNumber)

//Find - find the first item that matches from an array.
// var numbers = [3, 56, 2, 48, 5];

// var newNumber = numbers.find(function(num){
//   return num >2
// });

// console.log(newNumber);

// //FindIndex - find the index of the first item that matches.
// var newNumber = numbers.findIndex(function(num){
//   return num >5
// });

// console.log(newNumber);

import emojipedia from "./emojipedia";

const emojiChar = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});

console.log(emojiChar);
