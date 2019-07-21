// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 7,
  width: 4
};

const isSquare = function () {
if (rectangleA.length === rectangleA.width) {
  console.log (true);
} else {console.log (false)}
};

console.log (isSquare());


const area = function () {
console.log(rectangleA.length * rectangleA.width);
};

console.log (area());


const perimeter = function () {
console.log((rectangleA.length * 2) + (rectangleA.width * 2));
};

console.log (perimeter());

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not

const triangleA = {
  sideA: 5,
  sideB: 6,
  sideC: 7,
};

const isEquilateral = function () {
  if (triangleA.sideA === triangleA.sideB && triangleA.sideb === triangleA.sidec ) {
    console.log(true);
  } else {console.log (false)}
  };

  console.log (isEquilateral());

  // isIsosceles - Returns whether the triangle is isosceles or not

  const triangleType = function () {
    if (triangleA.sideA !== triangleA.sideB && triangleA.sideB !== triangleA.sideC ) {
      console.log("scalene");
    } else if (triangleA.sideA === triangleA.sideB && triangleA.sideB === triangleA.sideC ) {
      console.log("equilateral");
    } else if (triangleA.sideA === triangleA.sideB || triangleA.sideB === triangleA.sideC || triangleA.sideA === triangleA.sideC ) {
      console.log("isosceles"); }
    };

    console.log (triangleType());

  // area - Returns the area of the Triangle

const triangleArea = function() {
  let triPerimeter = (triangleA.sideA + triangleA.sideB + triangleA.sideC)/2;
  return Math.sqrt(triPerimeter*((triPerimeter-triangleA.sideA)*(triPerimeter-triangleA.sideB)*(triPerimeter - triangleA.sideC)));
};

console.log(triangleArea());

  // isObtuse - Returns whether the triangle is obtuse or not

const isObtuse = function (triangle) {
   return Math.pow(triangleA.sideA, 2) > Math.pow(triangleA.sideB, 2) + Math.pow(triangleA.sideC, 2);
  }

console.log( isObtuse ());


// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// const cashRegister = function (party) {
//   let total = 0;
//   for (let i = 0; i < party.length; i++) {
//   return (Number(Object.values(party[i])));


  const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };

  let sum = 0;

  const priceList = Object.values(cartForParty);

  console.log(priceList);
  for (var i = 0; i < priceList.length; i++) {
    sum = sum + Number(priceList[i]);
  }
  console.log(sum);




  // let totalCart = Number(Object.values(cartForParty)[i] + Number(Object.values(cartForParty)[i+1]))
  // console.log(totalCart);
  //   // i = i + 1;z
  // Object.values(cartForParty)[i];





// console.log(Object.keys(cartForParty));
// // expected output: Array ["a", "b", "c"]





// Output

// console.log(cartForParty.banana);

// const cashRegister = function () {
//   //add itemPrice to array
//
// }

// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
//
// let creditCard = [ '_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_',];
//
//
// const validateCreditCard = function (creditCard) {
//   for (let i = 0; i < Object.keys(creditCard).length; i++) {
//     return creditCard[i]
//   }
// };
// //   if (creditCard[i]===creditCard[i + 1]) { return false
// //   } else { return true }
// // }
//
// console.log(validateCreditCard());
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers

//FB Loop through each credit card number value
//FB


// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
