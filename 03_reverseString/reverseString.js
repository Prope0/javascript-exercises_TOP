const reverseString = function(input) {
    let result = "";
    for (let i = input.length - 1; i >= 0; i--) {
        result += input[i]
    }
return result
};

/*
input variable in teh func parameters 
variable where store result
for loop for iterate through the input and this iterates save in the result
return the result
*/

// Do not edit below this line
module.exports = reverseString;

/*
## Hints
 Strings in JavaScript cannot be reversed directly so
 you're going to have to split it into something else first.. 
 do the reversal and then join it back together into a string. */

 /*
FIRST WORKING SOLUTION FIND ON THE INTERNET:
const reverseString = function(input) {
    reversed = input.split("").reverse().join("");
    return reversed
};



 */
