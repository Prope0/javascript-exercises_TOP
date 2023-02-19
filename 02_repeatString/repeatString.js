const repeatString = function(string ; numOfTimes) {
    string = prompt('Please neter the string You want repeated: ');
    numOfTimes = prompt('please enter the number of times You want to repeat it: ');
    result = '' ;
    for (let i = 0; i < numOfTimes ; i++ ) {
        result += string
    }

};


// Do not edit below this line
module.exports = repeatString;
