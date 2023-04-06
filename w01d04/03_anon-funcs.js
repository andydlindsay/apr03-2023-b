// const favColour = 'green';

// console.log(favColour);
// console.log('purple'); // anonymous

const runMyFunc = function(otherFunc) {
  // otherFunc is a callback
  otherFunc('Bob');
};

const sayHello = function (name) {
  console.log(`hello there ${name}`);
};

// runMyFunc(sayHello);

// single-use function - hyper-specific functionality
runMyFunc(function (name) {
  console.log(`hello there ${name} (from the anon func)`);
}); // anonymous function; it has no name
