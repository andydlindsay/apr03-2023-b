// single responsibility principle (SRP)

const names = ['Alice', 'Bob', 'Carol'];

// for (const username of names) {
//   console.log(`you are signed in as: ${username}`);
// }

const actionToPerform = (name) => {
  console.log(`today is a fabulous day for ${name}`);
};

// for (const username of names) {
//   actionToPerform(username)
// }

const loopThroughArray = (array, funcToRunOnEachLoop) => {
  for (const element of array) {
    funcToRunOnEachLoop(element);
  }
};

loopThroughArray(names, actionToPerform);
loopThroughArray(names, console.log);
