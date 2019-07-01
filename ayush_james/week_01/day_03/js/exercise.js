// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
};

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
};

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const tester = function (letter) {
let vowelTest = ["a","e","i","o","u"];
    if (vowelTest.indexOf(letter) !== -1) {
      console.log('True');
    } else {
      console.log('False');
    }
};
// this was in reference to the IndexOf from the notes for day3 (https://bengali-rashida.gitbook.io/sei-33-gitbook/week-01/day-03) and the following https://stackoverflow.com/questions/5252650/test-for-value-in-javascript-array
//MDN doc for reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// The solution below also produces the same result, "Magically!". It uses the following: Array.prototype.includes()
//referenced MDN doc -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// let vowelTest = ["a","e","i","o","u"];
// const tester = function (letter) {
//   console.log(vowelTest.includes(letter));
// };

//My sketchy (pre-Googling) solution below was based on inspiration/reference to this https://stackoverflow.com/questions/19175063/multiply-all-elements-in-array;
// let vowelTest = ["a","e","i","o","u"];
// const tester = function (letter) {
//   for (let i=0; i < vowelTest.length; i++) {
//     if (letter === vowelTest[i]) {
//       console.log('Yes');
//       break;
//     } else {
//       console.log('No');
//     }
//   }
// };
//


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (a, b, c, d) {
let runTest = [];
runTest.push(a, b, c, d);
console.log(runTest.reduce((a,b) => a+b, 0));
};

//However this is specifically needs 4 values.

//alternative solution.
const sumArray = function (values) {

}

//pesudo code.
//the user must be able to submit numbers into the function, it shoud then use that to create an array, which is then multiplied together. But do we need the array?


// const multiplyArray = function (numberList) {
//   console.log(multiplyArray.reduce((a,b) => a * b);
// };

const multiplyArray = function (a, b, c, d) {
let runTest = [];
runTest.push(a, b, c, d);
console.log(runTest.reduce((a,b) => a * b));
};


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
