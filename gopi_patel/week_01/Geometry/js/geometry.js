// console.log("test");
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
// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```



const isSquare = function(rectangle) {

  if (rectangle.length === rectangle.width) {
      console.log("square");
  }
      else {
        console.log("rectangle");
      }
};

const rectangleA ={
  length:2,
  width:2
};
isSquare(rectangleA);

const rectangleB = {
  length:3,
  width:2
};


const getArea = function(rectangle) {
  let a= rectangle.length * rectangle.width;
  console.log(`Area:${a}`);
}

getArea(rectangleA);

const getPerimeter= function(rectangle) {
let a= rectangle.length*2 +rectangle.width*2;
console.log(`perimeter:${a}`);
}

getPerimeter(rectangleA);
//
// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
const triangleA = {
sideA: 3,
sideB: 4,
sideC: 4
};

const isEquilateral = function(triangle){
  if(triangle.sideA === triangle.sideB ===triangle.sidec){
    return true;
  }
  else {
    return false;
  }
};
console.log(isEquilateral(triangleA));



const isIsosceles = function(triangle) {
  if (triangle.sideA === triangle.sideB){
  return true;
} else if(triangle.sideB === triangle.sideC) {
  return true;
} else if (triangle. sideC ===triangle.sideA){
  return true;
} else {
  return false;
}
}

console.log(isIsosceles(triangleA));


const isObtuse = function(triangle) {
  let a= Math.pow(triangle.sideA,2) + Math.pow(triangle.sideB,2);
 if(Math.pow(triangle.sideC,2)> a ){
   return true;
 }
 else{
   return false;
 }
};
 console.log(isObtuse (triangleA));


 // # The Cash Register
 //
 // Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
 // Example
 //
 // ```
 // // Input


 //
 // // Output
 // cashRegister(cartForParty)); // 60.55
 // ```

 const cartForParty = {
 banana: "1.25",
 handkerchief: ".99",
 Tshirt: "25.01",
 apple: "0.60",
 nalgene: "10.34",
 proteinShake: "22.36"
 };

 const cashRegister = function(cart) {
   const value = Object.values(cartForParty);
   let result =0;
   for(i=0; i < value.length; i++) {
     console.log(`${value[i]} = ${parseFloat(value[i])}`);
     result += parseFloat(value[i]);
   }
return result;
 }
console.log(cashRegister(cartForParty));


// # Credit Card Validation
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
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
const mustBe16Digits = function(num) {
    return num.length === 16;
}

const twoDifferentDigits = function(num) {
  //TODO
  return true;
}

const finalDigitMustBeEven = function(num) {
  const a = num.charAt(num.length -1);
  return a%2 === 0;
}

const sumGreaterThan16 = function(num) {

    let result = 0;
    for(let i=0;i<num.length;i++) {
    result += parseInt(num.charAt(i));
  }
  return result > 16;
}

const validateCreditCard = function (number){

// console.log(`${mustBe16Digits(number)} ${twoDifferentDigits(number)} ${finalDigitMustBeEven(number)} ${sumGreaterThan16(number)};
// `);

return mustBe16Digits(number) &&
    twoDifferentDigits(number) &&
    finalDigitMustBeEven(number) &&
    sumGreaterThan16(number);

};
// console.log(validateCreditCard('9999-9999-8888-0000')); //true
// console.log(validateCreditCard('6666-6666-6666-1666')); //true
// console.log(validateCreditCard('a923-3211-9c01-1112')); //false
// console.log(validateCreditCard('4444-4444-4444-4444')); //false
// console.log(validateCreditCard('4444-4444-4444-4444')); //false
// console.log(validateCreditCard('1111-1111-1111-1110')); //false
// console.log(validateCreditCard('6666-6666-6666-6661')); //false
console.log(validateCreditCard('9999999988880000')); //true
console.log(validateCreditCard('6666666666661666')); //true
console.log(validateCreditCard('a92332119c011112')); //false
console.log(validateCreditCard('4444444444444444')); //false
console.log(validateCreditCard('4444444444444444')); //false
console.log(validateCreditCard('1111111111111110')); //false
console.log(validateCreditCard('6666666666666661')); //false
