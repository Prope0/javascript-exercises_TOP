const convertToCelsius = function(inF) {
let toC = (inF - 32) * (5/9);
return Math.round(toC * 10) / 10;
};

const convertToFahrenheit = function(inC) {
  let toF = inC * 9/5 +32;
  return Math.round(toF * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
