// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
//
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
//
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
//
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//
// Bonus: Round the result so there are only two digits after the decimal.

const aNumber = 4
const anotherNumber = 2

const squareNumber = function(aNumber) {
  const result = `The result of squaring the number ${ aNumber } is ${ aNumber * aNumber }.`;
  console.log(result);
   return result;
};

squareNumber();

const halfNumber = function(aNumber) {
  const result = `Half of ${aNumber} is ${aNumber/2}.`;
  console.log(result);
    return result;
};

halfNumber();

const percentOf = function(aNumber, anotherNumber) {
  const result = `${(aNumber/anotherNumber)*100} is 50% of ${aNumber} .`;
  console.log(result);
    return result;
};

percentOf();

const areaOfCircle(aNumber) {
  const result = `The area for a circle with radius ${aNumber} is ${aNumber*3.141}.`
  console.log(result);
    return result;

    areaOfCircle();
};
