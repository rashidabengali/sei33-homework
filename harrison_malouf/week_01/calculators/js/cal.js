// // Part 1
// //
// // Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// //
// // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// //
// // Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// //
// // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// //
// // Bonus: Round the result so there are only two digits after the decimal.
//
//
const squareNumber = function(aNumber) {
  const result = `The result of squaring the number ${ aNumber } is ${ aNumber * aNumber }.`;
  console.log(result);
   return result;
};

squareNumber(4);

const halfNumber = function(aNumber) {
  const result = `Half of ${aNumber} is ${aNumber/2}.`;
  console.log(result);
    return result;
};

halfNumber(4);

const percentOf = function(aNumber, anotherNumber) {
  const result = `${aNumber} is ${(aNumber/ anotherNumber)*100}% of ${anotherNumber} .`;
  console.log(result);
    return result;
};

percentOf( 2, 4 );
//
const areaOfCircle = function(aNumber) {
  const result = `The area for a circle with radius ${aNumber} is ${(aNumber*aNumber)*3.141}.`;
  console.log(result);
    return result;
};

areaOfCircle(4);

// need to add bonus later


// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.


const half = function(aNumber) {
  const number1 = aNumber/aNumber;
  const result = `The number is ${aNumber} so half of it is ${number1}`;
    console.log(result);

    const number2 = ( number1 * number1 ) * 3.141;
      console.log(`${number2} this the area of a circle`)
};


half(4);





// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).





// strings


// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.

const drEvil = function( argument ) {

}

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

const mixUp = function(x, y) {
  console.log(`${x + y}`)
};

mixUp('hey', ' there');
