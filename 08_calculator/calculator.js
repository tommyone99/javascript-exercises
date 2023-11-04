const add = function(a, b) {
	c = a + b;
  return c;
};

const subtract = function(a, b) {
	c = a - b;
  return c;
};

const sum = function(arr) {
	let sum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  return sum;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
