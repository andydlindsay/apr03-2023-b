/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
// const round = function(number) {
//   return Math.round(number * 100) / 100;
// };

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// 6,2,3,4,9,7
// 0 1 2 3 4 5

// 6 / 2 = 3 - 1 = 2

const median = function(arr) {
  arr.sort();

  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    // is even-length

    const rightValue = arr[middleIndex];
    const leftValue = arr[middleIndex - 1];

    const average = (rightValue + leftValue) / 2; // BEDMAS PEMDAS

    return average;

  } else {
    // must be odd-length
    const middleValue = arr[middleIndex];

    return middleValue;
  }


};

// Don't change below:
module.exports = { median };
