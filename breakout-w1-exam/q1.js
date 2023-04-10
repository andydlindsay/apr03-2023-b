/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // set aside space in memory to hold lowest seen so far
  let lowestValue = arr[0];

  // look at each element of the array (loop)
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    // is this the lowest value we've seen so far?
    if (element < lowestValue) {
      // if yes, replace the lowest value with the current value
      lowestValue = element;
    }
  }

  // return the lowest value seen
  return lowestValue;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // set aside space to hold highest value
  let highestValue = arr[0];

  // loop through provided array
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    // is the current element higher than our highest
    if (element > highestValue) {
      // if yes, replace the highest value with the current value
      highestValue = element;
    }
  }

  // return highest value
  return highestValue;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const lowest = min(arr);
  const highest = max(arr);
  
  const result = highest - lowest;
  return result;
};

// Don't change below:

module.exports = { min, max, range };
