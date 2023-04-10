/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *     { "6": 2, "2": 1, "3": 1 }
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // 1. create the "piles"

  // set aside space in memory to hold our "piles"
  const piles = {};

  // loop through the provided array
  for (const num of arr) {
    // have we seen this element before?
    if (piles[num]) {
      // if yes, increment the number of times seen
      piles[num] += 1;
    } else {
      // if no, create a new "pile" for this element
      piles[num] = 1;
    }
  }
  
  // console.log our work so far
  // console.log(arr);
  // console.log(piles);

  // 2. compare the "piles"

  // set aside space for highest value and key assoc with highest value
  let highestValue = 0;
  let highestKey = null;

  // loop through our piles
  for (const key in piles) {
    // retrieve key and value from piles
    const value = piles[key];

    // is the value higher than our current highest?
    if (value > highestValue) {
      // if yes, replace the current highest AND the key assoc with current highest
      highestValue = value;
      highestKey = key;
    }
  }

  // return the highest key
  return Number(highestKey); // '5' => 5
};

// Don't change below:
module.exports = { mode };
