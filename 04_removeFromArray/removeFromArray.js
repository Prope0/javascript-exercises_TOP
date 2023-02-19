const removeFromArray = function (array, ...args) {
    // create a new empty array
    const result = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        result.push(item);
      }
    });
    // and return that array
    return result;
  };

/* OWN WORKING SOLUTION FOR TEST 1
const removeFromArray = function (inputArray, ...args) {
const removeFromArray = function (inputArray, ...args) {
  const result = [];
  for (let i = 0; i < inputArray.length; i++) {
    // push items from inputArray to result except, the ...args
    if (inputArray[i] != args) {
      result.push(inputArray[i]);
    }
  }
  return result;
};
*/

// Do not edit below this line
module.exports = removeFromArray;
