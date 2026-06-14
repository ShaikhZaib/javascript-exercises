const convertToCelsius = function(temp) {
    const tempInCelsius = (temp - 32) * (5 / 9);
    let rounded = Number(tempInCelsius.toFixed(1));
    return rounded;
};

const convertToFahrenheit = function(temp) {
   const tempInFahrenheit = (temp * (9 / 5)) + 32;
   let rounded = Number(tempInFahrenheit.toFixed(1));
   return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
