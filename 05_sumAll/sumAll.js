const sumAll = function (min, max) /*(4, 1)*/ {
  if ( typeof min != 'number' || typeof max != 'number') {return "ERROR" }
  if (min < 0 || max < 0) { return "ERROR" }
  if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

/*
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
write numbers in an array 
numsum

## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop
*/

// Do not edit below this line
module.exports = sumAll;
