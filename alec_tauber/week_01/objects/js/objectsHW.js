console.log("Horray This Javascript works!")
// Section 1
// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

//Rectangle
const rectangle = {
  length: 4,
  width: 4,
  isSquare: function() {
    return(this.length == this.width); //this.length & this.width refer to length = 4 & width 4
  },
  area: function(){
    return(this.length * this.width);
  },
  perimeter: function(){
    return(this.length * 2 + this.width * 2);
  }
};
//In a function, this refers to the global object.
console.log("This Rectangle works");

//
// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral: function(){
    return(this.sideA === this.sideB === this.sideC);
  },
  isIsosceles: function(){ // 2 equal sides, A == B, B == C, C == A
    return(this.sideA === this.sideB || this.sideB === this.sideC || this.sideC == this.sideA);
  },
  area: function(){ //Area of Triangle is 1/2ab sin C BODMAS - (1 / 2 * this.sideA * this.sideB) * Math.sin(this.sideC);
    p = this.sideA + this.sideB + this.sideC;
    return math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
  },
  isObtuse: function(){
    max = Math.max(this.sideA, this.sideB, this.sideC);
    if (this.sideA === max) {
      return this.sideA > math.sqrt(this.sideB * this.sideB + this.sideC * this.sideC);
    }
    else if (this.sideB == max) {
      return this.sideB > Math.sqrt(this.sideA * this.sideA + this.sideC * this.sideC);
    }
    else{
      return this.sideC > Math.sqrt(this.sideB * this.sideB + this.sideA * this.sideA);
    }
    }
  };
console.log("Triangle works!");
console.log("Program works!");



/* ************************************************************************** *
***************************************************************************** *
*********************************** Section 2 ******************************* *
***************************************************************************** *
***************************************************************************** */
// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//

const cashRegister = function(cart) {
  var items = Object.keys(cart); // Returns an array containing the names of all of the given object's own enumerable string properties.
  var sum = 0;

  for (var i = 0; i < items.length; i++) {
    var itemName = items[i] // get the name of the key for the items
    var itemPrice = cart[itemName]; // get the price for the items
    sum += Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
  }
  return sum;
}

console.log("This cashRegister Function Works!");

/* ************************************************************************** *
***************************************************************************** *
*********************************** Section 3 ******************************* *
***************************************************************************** *
***************************************************************************** */
//
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



/*
Here are the rules for a valid number:
Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
*/

const validateCreditCard = function(creditCardNum){

  // The credit card number must be 16 digits in length
  if(creditCardNum.length !== 16) {
    return false;
  }

  // All of the digits must be numbers
  for (var i = 0; i < creditCardNum.length; i++) {
    // store the current digit
    var currentNumber = creditCardNum[i];

    // turn the digit from a string to an integer (if the digit is in face a digit and not another char)
    currentNumber = Number.pasreInt(currentNumber);

    // check that the digit is a number
    if( !Number.isInteger(currentNumber)) {
      return false;
    }
  }
  // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
  var obj = {};
  for (var i = 0; i < creditCardNum.length; i++) {
    obj[creditCardNum[i]] = true;
  }
  if(Object.keys(obj)).length < 2{
    return false;
  }


}

  }

  // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
  var obj = {};
  for(var i = 0; i < creditCardNum.length; i++){
    obj[creditCardNum[i]] = true;
  }
  if(Object.keys(obj).length < 2){
    return false;
  }

  // The final digit of the credit card number must be even
  if(creditCardNum[creditCardNum.length - 1] % 2 !== 0){
    return false;
  }

  // The sum of all the digits must be greater than 16
  var sum = 0;
  for(var i = 0; i < creditCardNum.length; i++){
    sum += Number(creditCardNum[i]);
  }
  if(sum <= 16){
    return false;
  }

  return true;
};

/**** tests *****/
console.log(validateCreditCard('9999777788880000')); //true
console.log(validateCreditCard('6666666666661666')); //true
console.log(validateCreditCard('a92332119c011112')); //false
console.log(validateCreditCard('4444444444444444')); //false
console.log(validateCreditCard('1211111111111112')); //true































/* ************************************************************************** *
***************************************************************************** *
*********************************** Section 4 ******************************* *
***************************************************************************** *
***************************************************************************** */

// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// ### Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// ## Bonus
//
// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//
// ## Additional
//
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.
