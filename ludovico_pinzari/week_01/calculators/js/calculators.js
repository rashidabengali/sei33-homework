/*
Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
It should also log a string like "The result of squaring the number 3 is 9."
*/

const squareNumber = function ( n ) {
  const square = n*n;
  console.log(`The result of squaring the number ${n} is ${square}`);
  return square;
};

// test cases
console.log('Testing squareNumber function:')
squareNumber(2);
squareNumber(3);

/*
Write a function called halfNumber that will take one argument (a number),
 divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
*/

const halfNumber = function ( n ) {
  const division = n/2;
  console.log(`The half of ${n} is ${division}`);
  return division;
}

// test cases

console.log('Testing halfNumber function:')
halfNumber(4);
halfNumber(8);

/*
Write a function called percentOf that will take two numbers, figure out what percent the
first number represents of the second number,
and return the result. It should also log a string like "2 is 50% of 4."
*/

const percentOf = function ( n1, n2 ) {
  const percent = (100 * n1)/n2;
  console.log(`${n1} is ${percent}% of ${n2}`);
  return percent;
}

// test cases

console.log('Testing percentOf function:')
percentOf(2,4);
percentOf(4,2);

/*
Write a function called areaOfCircle that will take one argument (the radius),
calculate the area based on that, and return the result.
It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
*/

const areaOfCircle = function (radius) {
  const area = (Math.PI * radius * radius).toFixed(2);
  console.log(`The area of the Circle with radius ${radius} is ${area}`);
  return area;
}

// test cases

console.log('Testing areaOfCircle function:')
areaOfCircle(2);

/******************************************
*      PART 2 HOMEWORK                    *
*******************************************/

/*
Write a function that will take one argument (a number)
and perform the following operations, using the functions you wrote earlier1:

- Take half of the number and store the result.
- Square the result of #1 and store that result.
- Calculate the area of a circle with the result of #2 as the radius.
- Calculate what percentage that area is of the squared result (#3).

*/

const longCalculation = function (n){
  let result1 = halfNumber(5);
  let result2 = squareNumber(result1);
  let result3 = areaOfCircle(result2);
  let result4 = percentOf(result3,squareNumber(result3));

}

// test case
console.log('Testing longCalculation function:')
longCalculation(8);
