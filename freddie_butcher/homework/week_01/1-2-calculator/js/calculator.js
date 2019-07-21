// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (number) {
  const result = number * number;
  console.log("The result of squaring the number " + number + " is " + result);
  return result;
}
squareNumber (6);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (number) {
  const result = number / 2;
  console.log("Half of " + number + " is " + result);
  return result;
}
halfNumber (10);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2) {
  const result = (num1 / num2) * 100;
  console.log(num1 + " is " + result + "% of " + num2);
  return result;
}
percentOf (2, 4)

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function (radius) {
  const result = Math.round(Math.PI) * (radius * radius);
  console.log("The area for a circle with radius " + radius + " is " + result);
  return result;

}
areaOfCircle (2);

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.

var number = 9
const resultHalf = halfNumber (number);

// Square the result of #1 and store that result.

const resultSquare = squareNumber (resultHalf);

// Calculate the area of a circle with the result of #2 as the radius.

const resultCircleArea = areaOfCircle (resultSquare);

// Calculate what percentage that area is of the squared result (#3).

const resultAreaPercentage = percentOf (resultSquare, resultCircleArea);

// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function (amount) {
    if (amount > 999999) {
      console.log(amount + " dollars (pinky)") }
    else {
      console.log(amount + " dollars") }
      }

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function (string1, string2) {
//Take the first two letters of each word
  const string1FirstTwoLetters = string1.substring(0,2);
  const string2FirstTwoLetters = string2.substring(0,2);
//Display the remaining letters from letter 3 onwards
  const string1RemainingLetters = string1.substring(2);
  const string2RemainingLetters = string2.substring(2);
  console.log(string1FirstTwoLetters + string2RemainingLetters + " " + string2FirstTwoLetters + string1RemainingLetters);
  }

// FixStart
// Create a function called fixStart. It should take a single argument, a string,
// and return a version where all occurences of its first character have been replaced
// with '*', except for the first character itself. You can assume that the string
// is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

const fixStart = function (string1) {
  const firstLetter = string1.substring(0,1);
  console.log(firstLetter);
}
//console.log()
//take first letter
//search and replace first letter

//   const string1FirstTwoLetters = string1.substring(0,2);
//   console.log(string1.replace(string1FirstTwoLetters,"*"));
// }


// Verbing
// Create a function called verbing. It should take a single argument, a string.
//If its length is at least 3, it should add 'ing' to its end,
//unless it already ends in 'ing', in which case it should add 'ly' instead.
//If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

// const verbing = function (word) {
//   if word.length >= 3 {
//     console.log(word + "ing");
//   } else {
//
//   }
// }
//
//
//
//
// // Not Bad
// // Create a function called notBad that takes a single argument, a string.
// //
// // It should find the first appearance of the substring 'not' and 'bad'.
// // If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// // If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// // For example:
// //
// //   notBad('This dinner is not that bad!'): 'This dinner is good!'
// //   notBad('This movie is not so bad!'): 'This movie is good!'
// //   notBad('This dinner is bad!'): 'This dinner is bad!'
//
// const notBad = function ()

// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

const factor3 = function (factor) {
  if (factor % 3 == 0) {console.log("Pling")}
  if (factor % 5 == 0) {console.log("Plang")}
  if (factor % 7 == 0) {console.log("Plong")}
  if (factor % 3 != 0 && factor %5 != 0  && factor % 7 != 0) {console.log(factor)}
      }

// Examples
// 28 has 7 as a factor.
// In raindrop-speak, this would be a simple "Plong".
// 1755 has 3 and 5 as factors.
// In raindrop-speak, this would be a "PlingPlang".
// 34 has neither 3, 5 nor 7 as a factor.
// Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
