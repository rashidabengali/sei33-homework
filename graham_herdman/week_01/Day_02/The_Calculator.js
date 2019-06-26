console.log("Hello");
console.log("");


// THE CALCULATOR

// PART 1
console.log("PART 1: Exercises");

// 1) Write a function called squareNumber that will take one argument
// (a number), square that number, and return the result.
// It should also log a string like "The result of squaring the
// number 3 is 9."

console.log("1) squareNumber");

const squareNumber = function (number) {
  const numberSquared = number * number;
  console.log(`The result of squaring the number ${number} is ${numberSquared}.`);
  return numberSquared;
}

squareNumber(3);

// 2) Write a function called halfNumber that will take one argument
// (a number), divide it by 2, and return the result.
// It should also log a string like "Half of 5 is 2.5.".
console.log("");
console.log("2) halfNumber");

const halfNumber = function (number) {
  const numberHalved = number / 2;
  console.log(`Half of ${number} is ${numberHalved}.`);
  return numberHalved;
}

halfNumber(5);

// Write a function called percentOf that will take two numbers,
// figure out what percent the first number represents of
// the second number, and return the result.
// It should also log a string like "2 is 50% of 4."
console.log("");
console.log("3) percentOf");

const percentOf = function (num1, num2) {
  const num1PercentOfNum2 = (num1 / num2)*100;
  console.log(`${num1} is ${num1PercentOfNum2}% of ${num2}.`);
  return num1PercentOfNum2;
}

percentOf(2, 4)

// Write a function called areaOfCircle that will take one argument
// (the radius), calculate the area based on that, and return the result.
// It should also log a string like
// "The area for a circle with radius 2 is 12.566370614359172."
console.log("");
console.log("4) areaOfCircle");

const areaOfCircle = function (radius) {
  const area = Math.PI * radius * radius;
  console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}`);
  return area.toFixed(2);
}

areaOfCircle(2);

// PART 2

// Write a function that will take one argument
// (a number) and perform the following operations,
// using the functions you wrote earlier1:

// #1 Take half of the number and store the result.
// #2 Square the result of #1 and store that result.
// #3 Calculate the area of a circle with the result of #2 as the radius.
// #4 Calculate what percentage that area is of the squared result (#3).
console.log("");
console.log("PART 2: All Together");

const percentageOfAreaOfCircle = function (number) {
  numberHalved = halfNumber(number);
  squaredHalfNumber = squareNumber(numberHalved);
  circleArea = areaOfCircle(squaredHalfNumber);
  percentageAreaIsOfCircle = percentOf(circleArea, squaredHalfNumber);
  return [numberHalved, squaredHalfNumber, circleArea, percentageAreaIsOfCircle]
}

percentageOfAreaOfCircle(2)

console.log("");
console.log("STRINGS");

// 1) DrEvil
// Create a function called drEvil. It should
// take a single argument, an amount, and return
// ' dollars', except it will add '(pinky)' at the end
// if the amount is 1 million. For example:
console.log("");
console.log("1) drEvil");

const drEvil = function (amount) {
  if (amount == 1000000) {
    return amount + " dollars (pinky)";
  } else {
    return amount + " dollars";
  }
}

console.log(drEvil(10));
console.log(drEvil(1000000));

// 2) MixUp
// Create a function called mixUp. It should take in two strings,
// and return the concatenation of the two strings
// (separated by a space) slicing out and swapping the
// first 2 characters of each. You can assume that the strings
// are at least 2 characters long. For example:
console.log("");
console.log("2) MixUp");

const mixUp = function (str1, str2) {
    mixedStr1 = `${str2.slice(0, 2)}${str1.slice(2)}`;
    mixedStr2 = `${str1.slice(0,2)}${str2.slice(2)}`;
    concatenatedString = `${mixedStr1} ${mixedStr2}`;
    return concatenatedString;
  }

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));

// 3) FixStart
// Create a function called fixStart. It should take a single argument,
// a string, and return a version where all occurences of its
// first character have been replaced with '*', except for the first
// character itself. You can assume that the string is at least one
// character long. For example:
console.log("");
console.log("3) FixStart");

const fixStart = function (str) {
    const firstChar = str[0]

    // Convert firstChar into a regular expression
    const pattern = firstChar
    re = new RegExp(pattern, "g");

    const newString = str.replace(re, "*")
    const concatenatedString = firstChar + newString.slice(1, -1)

    return concatenatedString;
  }

console.log(fixStart('babble'));

// 4) Verbing
// Create a function called verbing. It should take a single argument,
// a string. If its length is at least 3, it should add 'ing'
// to its end, unless it already ends in 'ing', in which case it
// should add 'ly' instead. If the string length is less than 3, it
// should leave it unchanged. For example:
console.log("");
console.log("4) Verbing");

const verbing = function (str) {
  if (str.length >= 3) {
    if (str.endsWith("ing")) {
      return str + "ly"
    } else {
      return str + "ing"
    }
  } else {
    return str
  }
}


console.log(verbing('swim'));
console.log(verbing('swiming'));
console.log(verbing('go'));

// 4) Not Bad
// Create a function called notBad that takes a single argument,
// a string.
// It should find the first appearance of the substring 'not' and 'bad'
// If the 'bad' follows the 'not', then it should replace the whole
// 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence
// (or at all), just return the original sentence.
console.log("");
console.log("5) Not Bad");

const notBad = function (str) {
    const notIndex = str.indexOf("not");
    const badIndex = str.indexOf("bad");
    if ((badIndex > notIndex) && (notIndex !== -1) && (badIndex !== -1)) {
      const replacedString = str.slice(0, notIndex) + "good" + str.slice(badIndex+3);
      return replacedString;
    }
    return str;
  }

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
