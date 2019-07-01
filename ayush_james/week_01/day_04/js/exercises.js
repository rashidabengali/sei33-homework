// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//

const rectangleA = {
  length: 4,
  width: 4
};

// 1
const isSquare = function (length, width) {
  if (length === width) {
    console.log("The rectangle is a square");
  } else {
    console.log("The rectangle is not a square");
  }
};
isSquare(rectangleA.length, rectangleA.width); //this is calling the function.

// 2
const recArea = function (length, width) {
  console.log(length * width);
};
recArea(rectangleA.length, rectangleA.width); //this is calling the function.

// 3
const recPerimeter = function (length, width) {
  console.log((length + width) * 2);
};
recPerimeter(rectangleA.length, rectangleA.width); //this is calling the function.


// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//

const triangleA = {
  sideA: 5,
  sideB: 10,
  sideC: 14
};

//1
const isEquilateral = function (sideA, sideB, sideC) {
  if (sideA === sideB && sideB === sideC) {
    console.log("The triangle is an equilateral.");
  } else {
    console.log("The triangle is not an equilateral.");
  }
};
isEquilateral(triangleA.sideA, triangleA.sideB, triangleA.sideC);

//2
const isIsosceles = function (sideA, sideB, sideC) {
if (sideA === sideB && sideB === sideC) {
  console.log("The triangle is not an isosceles; it is an equilateral.");
} else if ((sideA === triangleA.sideB || triangleA.sideB === triangleA.sideC || triangleA.sideA === triangleA.sideC)) {
    console.log("The triangle is an isosceles.");
  } else {
    console.log("The triangle is not an isosceles.");
  }
};
isIsosceles(triangleA.sideA, triangleA.sideB, triangleA.sideC);

//3
const triArea = function (sideA, sideB, sideC) {
  let rootProblem = ((sideA + sideB + sideC) * (-sideA + sideB + sideC) * (sideA - sideB + sideC) * (sideA + sideB - sideC)); // Breakdown Heron's formula
  let areaOfTriangle = (1/4) * Math.sqrt(rootProblem); // Heron's formula continued.
  console.log(`The area of the triangle is ${areaOfTriangle.toFixed(2)}.`);
};
triArea(triangleA.sideA, triangleA.sideB, triangleA.sideC);


//4
const isObtuse = function (sideA, sideB, sideC) {
createArray = [sideA, sideB, sideC]; //breaking down the formula.
createArray.sort(function(a, b){return a - b});
 //built in in JS to sort the array into order.
if (Math.pow(createArray[2], 2) > (Math.pow(createArray[0], 2) + Math.pow(createArray[1], 2))) {
//formulA CALCULATION.c^2 > a^2 + b^2.
    console.log('The triangle is obtuse.');
  } else {
    console.log('The triangle is not obtuse.');
  }
};
isObtuse(triangleA.sideA, triangleA.sideB, triangleA.sideC);

//how to prove if obtuse source: https://www.ck12.org/geometry/pythagorean-theorem-to-classify-triangles/lesson/Pythagorean-Theorem-to-Classify-Triangles-TRIG/
//forumula for obstuse angle based on sides. c^2 > a^2 + b^2


//
// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55
// ```

let cartForParty = {
  banana: '1.25',
  handkerchief: '.99',
  Tshirt: '25.01',
  apple: '0.60',
  nalgene: '10.34',
  proteinShake: '22.36' //Note I changed these to numbers hence I don't have to do the parse float thing.
};

const cashRegister = function (cartForParty) {
const totalValues = Object.values(cartForParty); // creates an array from the values in the cart.
let valueSum = 0;
for (i = 0; i < totalValues.length; i++) {
valueSum += Number(totalValues[i]); //want to use parseFloat as otherwise it would be combinding the strings. if the values above were strings instead of numbers.
}
console.log(`Your total comes to $${valueSum}.`); //   trying to add all the values in a loop.
};
cashRegister(cartForParty);
