// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array) {
  if (array.length > 1) {
    if (array[0] < array[1]) {
      array.shift();
    } else {
      array.splice(1, 1);
    }
    findMax(array);
  }
  return array[0];
}

function factorial(num) {
  if (num > 1) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
}

function fibonacci(n, a = 1, b = 1) {
  if (n === 1 || n === 2) {
    return b;
  } else {
    return fibonacci(n - 1, b, a + b);
  }
}

function coinFlips(num) {
  let array = [];
  function runResult(num, string = "") {
    if (num <= 0) {
      array.push(string);
    } else {
      runResult(num - 1, string + "H");
      runResult(num - 1, string + "T");
    }
  }
  runResult(num);
  return array;
}

function letterCombinations() {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations
};
