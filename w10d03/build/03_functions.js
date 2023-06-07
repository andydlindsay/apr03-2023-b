"use strict";
// arguments, return value, name of the function
const sayHello = (name, age = 100) => {
    return false;
};
sayHello('alice', 42);
sayHello('alice');
const returningPromise = (num) => {
    return new Promise((resolve) => {
        resolve(num);
    });
};
returningPromise(42).then((data) => { });
const returningNothing = () => {
    console.log('hello');
};
