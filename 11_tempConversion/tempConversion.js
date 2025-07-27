const convertToCelsius = function(temp) {
  let tempC = (temp-32)*(5/9);
  return Number(tempC.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let tempF = (9/5)*temp+32;
  return Number(tempF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
