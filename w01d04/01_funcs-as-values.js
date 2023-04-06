// values are on the right-hand-side of the equals sign
// const myStr = 'hello';
// const myNum = 2 + 2;
// console.log(myNum);

// function sayHello () {}; // hoisting

// const sayHello = function(name) {
//   console.log(`hello there ${name}`);
// }; // function expression

// sayHello('Alice');
// sayHello('Bob');

// console.log(sayHello) // saying the function's name so we are getting the function
// console.log(sayHello.toString());
// console.log(sayHello()) // calling the function and getting the return value

// const a = 5;
// const b = a;
// const c = b;

// first-class; functions are objects 

const sayHello = function(name) {
  console.log(`hello there ${name}`);
}; 

// sayHello.mySecretKey = 'does this work?';
// console.log(sayHello);

// jQuery()
// jQuery.ajax()

const myFuncs = [];
myFuncs.push(sayHello);
myFuncs.push(console.log);
// console.log(myFuncs);

myFuncs[0]('Dean'); // sayHello('Dean')

const copy = sayHello;
copy('Dean');
const anotherCopy = copy;

// console.log(sayHello.toString());
// console.log(copy.toString());

// anotherCopy('Carol');
