// arrow funcs were added with ES6 in 2015 (ECMAScript v6)
// stolen from a language called CoffeeScript .coffee
// benefits of arrow functions:
// 1. no need for the function keyword
// 2. if only one arg, no need for parens
// 3. if only one line of code, no need for curly braces
// 4. if no curly braces, we have an implicit return
// 5. arrow functions DO NOT create `this` (W2D5) OOP

// const myFunc1 = function(age) {
//   return `you are ${age} years old`;
// };

// const myFunc2 = age => `you are ${age} years old`;


// if (someCondition) 
//   console.log('error')

const addTwo = num => num + 2;

// const addTwo = function (num) {
//   return num + 2;
// };

const result = addTwo(6);
console.log('result', result);
