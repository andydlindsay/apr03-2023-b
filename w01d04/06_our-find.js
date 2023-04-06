const array1 = [5, 12, 8, 130, 44];

const testFunc = (num) => {
  if (num > 10) {
    return true;
  }
};

const result = array1.find(testFunc);
console.log('result', result);

const ourFind = (array, callback) => {
  // iterate through the provided array
  for (const element of array) {
    // call the provided callback with each element AND capture the return value
    const result = callback(element);

    // if the callback returned true/truthy, return the current element
    if (result) {
      return element;
    }
  }
};

const ourResult = ourFind(array1, testFunc);
console.log('ourResult', ourResult);
