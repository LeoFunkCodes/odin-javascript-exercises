const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if(arr.length == 0) {
    return 0;
  }
	return arr.reduce((acc, current) => acc + current)
};

const multiply = function(arr) {
  return arr.reduce((acc, current) => acc * current);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let factorial = 1;
  for(let i = 1; i <= a; i++) {
    factorial = factorial * i;
  }
  return factorial;
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
