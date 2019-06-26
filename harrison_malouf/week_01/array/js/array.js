// // Array and Functions Bonus Material
// // Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// // Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
//
//
//
const maxOfTwoNumbers = function( x, y) {
  if ( x > y ) {
    console.log( x );
  } else {
    console.log( y );
  }
};


maxOfTwoNumbers(5 , 10)
//
//
//
// // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
//
const maxOfThreeNumbers = function ( x, y, z) {
  if ( x > y && x > z) {
    console.log(x);
  } else if ( y > x && y > z) {
    cosole.log(y);
  } else {
    console.log(z);
  }
};

maxOfThreeNumbers( 10, 5, 8)


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
//
// const trueVowel = function ()

// const isWeekend = function (day) {
//   if ('Saturday' === day) {
//     return true;
//   } else if ('Sunday' === day) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// console.log( isWeekend('Saturday') );
// console.log( isWeekend('Friday') );



const trueVowel = function (x) {
  if ( 'a' === x ) {
    return true;
  } else if ('e' === x ) {
      return true;
  } else if ('i' === x ) {
      return true;
  } else if ('o' === x ) {
      return true;
  } else if ('u' === x ) {
      return true;
  } else {
    return false;
  }
};

//console.log was forgotten and making 'a' a string whilst in console.log

console.log(trueVowel('a'));
console.log(trueVowel('b'));




// const isWeekend = function (day) {
//   if ('Saturday' === day || 'Sunday' === day) {
//     return true;
//   } else {
//     return false;
//   }
// };



// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const num = [3, 2, 4, 6]

const sumArray = function( x , y, z , v ) {
  for ( let i = 0; i < greatPeople.length; i++
}
















// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// let globalArray1 = ['F', 'O', 'X']
//
// let globalArray2 = ['A', 'B', 'C', 'D','E', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S','T', 'U', 'F', 'O', 'X']
//
// let guessedLetter = function
