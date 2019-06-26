
// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

var maxOfTwo = function ( num1, num2 ) {
  if ( num1 > num2 ) {
    return `${num1} is the largest item among ${num1} and ${num2}.`;
  } else {
     return `${num2} is the largest item among ${num1} and ${num2}.`;
  }
} 

console.log (maxOfTwo (4, 9) );
console.log (maxOfTwo (6, 3) );


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

//define function
//use array
//return the largest items

var maxOfThree = function (num1, num2, num3) {
  const max = Math.max(num1, num2, num3);
  return `The largest item among ${num1}, ${num2}, and ${num3} is ${max}`;
}

console.log(maxOfThree( 70, 25, 90));


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
 var word = function ( a ) {
  if ( a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u') {
    return true;
  } else {
    return false;
  }
 }

 console.log ( word ( 'e' ) );
 console.log ( word ( 'h' ) );
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

//The following is method to sum array up

const sumArray = function ( a, b) {
  return a + b;
} 
const array1 = [1, 2, 3, 4]; // create array

console.log(array1.reduce(sumArray));
// expected output: 10

const multiArray = function ( a, b ) {
  return a * b;

  }

const array2 = [1, 2, 3, 4];
console.log(array2.reduce(multiArray));

// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i