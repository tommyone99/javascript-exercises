const add = function(a, b) {
	let c = a + b;
  return c;
};

const subtract = function(a, b) {
	let c = a - b;
  return c;
};

const sum = function(arr) {
	let adder = arr.reduce((total, num) => {
    return total + num;
  }, 0);

  return adder;
};

const multiply = function(arr) {
  let multiplier = arr.reduce((total, num) => {
    return total * num;
  });

  return multiplier;
};

const power = function(a, b) {
	let c = a ** b;
  return c;
};

const factorial = function(num) {
  if (num == 0) {
    return 1;
  }
  else if (num == 1) {
    return 1;
  }
  else if (num > 1){
    let total = num;
    for (let i = 1; i < num - 1; i++){
      let add = i * total;
      total += add;
    }
    return total;
  }
	
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
