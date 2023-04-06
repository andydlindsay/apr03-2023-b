const sayHello = function (name) {
  console.log(`hello there ${name}`);
};

const username = 'alice';

const runMyFunc = function (callback) { // someFunc is a callback
  // console.log('inside runMyFunc', someFunc.toString());
  callback('Elise'); // someFunc is known as a callback
};

runMyFunc(sayHello); // sayHello is a callback
