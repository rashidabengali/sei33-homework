// # Geometry Function Lab
// ### Part 1, Rectangle
// Given the following a `rectangle` object like the one below, write the following functions:
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
const rectangleA = {
  length: 4,
  width: 4
};
  if (rectangleA.length === rectangleA.width) {
    console.log(`Squre`);
  } else {
    console.log(`Rectangle`);
  };

const area = rectangleA.length * rectangleA.width;
console.log(area);

const perimeter = 2 * (rectangleA.length + rectangleA.width);
console.log(perimeter);

// ### Part 2, Triangle
// Given the following a `triangle` object like the one below, write the following functions:
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
  if (triangleA[0] === triangleA[1] && triangleA[1] === triangleA[2]) {
    console.log(`Triangle is equilateral`);
  } else {
    console.log(`Triangle is not equilateral`);
  };

  if (triangleA[0] === triangleA[1] || triangleA[1] === triangleA[2] || triangleA[0] === triangleA[2]) {
    console.log(`Triangle is isosceles`);
  } else {
    console.log(`Triangle is not isosceles`);
  };

const areaOfTriangle = function (triangle) {
  const s = (triangleA.sideA + triangleA.sideB + triangleA.sideC)/2;
  const area = Math.sqrt(s*((s-triangleA.sideA)*(s-triangleA.sideB)*(s-triangleA.sideC)));
  return area;
};
console.log(`Area of Triangle is ${area}` );

const isObtuse = function (triangleA) {
  if ( Math.pow(triangleA.sideA, 2) > Math.pow(triangleA.sideB, 2) + Math.pow(triangleA.sideC, 2) ) {

    console.log(`The triangle is obtuse`);

  } else {
    console.log(`The triangle is not obtuse`);
  }
};
//  # The Cash Register

  // Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
  // Example

  // // Input
  const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };

for (let product in cartForParty) {
  console.log(`${cartForParty[product]} ${product}`);
};
  const sum = function(cartForParty) {
    let total = 0;
    const array = Object.values(cartForParty);
      for (let i = 0; i < array.length; i++) {
        total += parseFloat(array[i]);
    }
    return total;
  };
  console.log(sum(cartForParty));

  // const sum = function(cartForParty) {
  //   return Object.keys(cartForParty).reduce((sum,key)=>sum+parseFloat(cartForParty[key]||0),0);
  // };
  // console.log(`The total price of the shopping cart ${sum(cartForParty)}`);
  // // Output
  // cashRegister(cartForParty)); // 60.55
  // `

//   # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
//
// The following credit card numbers are valid:
//
// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
//
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
//
// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```
//
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.
//
const card1 ='9999-9999-8888-0000';
const cardNum = card1.replace(/-/g,'');
  console.log(cardNum);


// const validCard = function (v) {
//   if (cardNum.length === 16) {
//     if (isNaN(cardNum) === false) {
//       console.log(`${card1} invalid characters`);
//     } else if {
//         let c = 0;
//         for (i = 0; i < 16 ; i++) {
//           sumDigit =+
//         }
//
//     }
//
//   }
//
// }


// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
