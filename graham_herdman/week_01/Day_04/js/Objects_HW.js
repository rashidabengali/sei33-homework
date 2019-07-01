console.log("Is this thing on?");

// HomeWork:  Geometry Function Lab

// Part 1) Rectangle
// Given the following a rectangle object like the one below, write the following functions:
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
console.log("Part 1) Rectangle");
console.log("");

const square = {
  length: 4,
  width: 4
};

const isSquare = function (rectangle) {
  return rectangle.length === rectangle.width;
}

const area = function (rectangle) {
  return rectangle.length * rectangle.width;
}

const perimeter = function (rectangle) {
  return (2 * rectangle.length) + (2 * rectangle.width);
}

console.log(isSquare(square));
console.log(area(square));
console.log(perimeter(square));

// Part 2) Triangle
// Given the following a triangle object like the one below, write the following functions:
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
console.log("Part 2) Triangle");
console.log("");

const triangleE = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};
const triangleI = {
  sideA: 4,
  sideB: 4,
  sideC: 2
};
const triangleO = {
  sideA: 5,
  sideB: 8,
  sideC: 7
};

const isEquilateral = function (triangle) {
  return triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC;
}

const isIsosceles = function (triangle) {
  return triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideC === triangle.sideA;
}

// Heron's Formula
const areaOfTriangle = function (triangle) {
  const s = (triangle.sideA + triangle.sideB + triangle.sideC)/2;
  const area = Math.sqrt(s*((s-triangle.sideA)*(s-triangle.sideB)*(s-triangle.sideC)));
  return area;
}

const isObtuse = function (triangle) {
  return Math.pow(triangle.sideA, 2) > Math.pow(triangle.sideB, 2) + Math.pow(triangle.sideC, 2);
}

console.log(isEquilateral(triangleE));
console.log(isIsosceles(triangleI));
console.log(areaOfTriangle(triangleE));
console.log(isObtuse(triangleO));

// Part 3) The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
console.log("3) The Cash Register");
console.log("");

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function (cart) {
  prices = Object.values(cart);
  sum = 0;
  for (var i = 0; i < prices.length; i++) {
    sum += Number(prices[i]);
  }
  return sum
};

console.log(cashRegister(cartForParty));

/*
// Part 4) Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
// Here are the rules for a valid number:
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
console.log("4) Credit Card Validation");
console.log("");

// helper function 1: check input is all equal
const allEqual = function (input) {
    return input.split('').every(char => char === input[0]);
}

// Sum Array
const sumArray = function (string) {
  sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i]);
  }
  return sum;
}

const validateCreditCard = function (cardNumber) {
  numberStr = cardNumber.split('-').join('');
  condition1 = numberStr.length === 16 && !/\D/.test(numberStr)
  condition2 = !allEqual(numberStr);
  condition3 = parseInt(numberStr[numberStr.length - 1]) % 2 === 0;
  condition4 = sumArray(numberStr) > 16;
  return condition1 && condition2 && condition3 && condition4;
  }

const creditCardNumValid1 = "9999-9999-8888-0000";
const creditCardNumValid2 = "6666-6666-6666-1666";
const creditCardNumInvalid1 = "a923-3211-9c01-1112";
const creditCardNumInvalid2 = "4444-4444-4444-4444";
const creditCardNumInvalid3 = "1111-1111-1111-1110";
const creditCardNumInvalid4 = "6666-6666-6666-6661";


console.log(validateCreditCard(creditCardNumValid1));
console.log(validateCreditCard(creditCardNumValid2));
console.log(validateCreditCard(creditCardNumInvalid1));
console.log(validateCreditCard(creditCardNumInvalid2));
console.log(validateCreditCard(creditCardNumInvalid3));
console.log(validateCreditCard(creditCardNumInvalid4));
*/

// Part 4) BONUS Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
// Here are the rules for a valid number:
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
console.log("4) BONUS Credit Card Validation");
console.log("");

// helper function 1: check input is all equal
const allEqual = function (input) {
    return input.split('').every(char => char === input[0]);
}

// Sum Array
const sumArray = function (string) {
  sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i]);
  }
  return sum;
}

const validateCreditCard = function (cardNumber) {

  let numberObject = {
    valid: false,
    number: cardNumber
  }

  // pass conditions
  numberStr = cardNumber.split('-').join('');
  condition1 = numberStr.length === 16
  condition2 =  !/\D/.test(numberStr)
  condition3 = !allEqual(numberStr);
  condition4 = parseInt(numberStr[numberStr.length - 1]) % 2 === 0;
  condition5 = sumArray(numberStr) > 16;

  if (!condition1){
    numberObject.error = "wrong_length"
    return numberObject;
  } else if (!condition2) {
    numberObject.error = "characters_are_not_all_numbers"
    return numberObject;
  } else if (!condition3) {
    numberObject.error = "two_different_digits_required"
    return numberObject;
  } else if (!condition4) {
    numberObject.error = "final_digit_must_be_even"
    return numberObject;
  } else if (!condition5) {
    numberObject.error = "incorrect_sum_of_all_digits"
    return numberObject;
  } else {
    numberObject.valid = true;
    return numberObject;
  }
}

const creditCardNumValid1 = "9999-9999-8888-0000";
const creditCardNumValid2 = "6666-6666-6666-1666";
const creditCardNumInvalid1 = "a923-3211-9c01-1112";
const creditCardNumInvalid2 = "4444-4444-4444-4444";
const creditCardNumInvalid3 = "1111-1111-1111-1110";
const creditCardNumInvalid4 = "6666-6666-6666-6661";


console.log(validateCreditCard(creditCardNumValid1));
console.log(validateCreditCard(creditCardNumValid2));
console.log(validateCreditCard(creditCardNumInvalid1));
console.log(validateCreditCard(creditCardNumInvalid2));
console.log(validateCreditCard(creditCardNumInvalid3));
console.log(validateCreditCard(creditCardNumInvalid4));

// Part 5) JavaScript Bank
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
// Here are the rules for a valid number:
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
console.log("5) JavaScript Bank");
console.log("");

// initiate balances and account functions
const currentBalances = [0, 0, 0, 1000, 1000]
const ownersNames = ['Graham', 'Sam', 'John', 'Heather', 'Mark']

const deposit = function (amount) {
  this.currentBalance += amount
}

const withdraw = function (amount) {
  this.currentBalance -= amount
}

// create 6 accounts
const accounts = []
for (let i = 0; i < 5; i++) {
  const account = {currentBalance: currentBalances[i], ownersName: ownersNames[i], deposit: deposit, withdraw: withdraw};
  accounts.push(account);
}

// helper function 1: totalSumOfMoney
const totalSumOfMoney = function () {
  sum = 0;
  for (let i = 0; i < accounts.length; i++) {
    sum += accounts[i].currentBalance;
  }
  return sum;
}

// helper function 2: addAccount
const addAccount = function (currentBalance, ownersName) {
  const account = {currentBalance: currentBalance, ownersName: ownersName, deposit: deposit, withdraw: withdraw};
  accounts.push(account);
};

// create a bank
const bank = {accounts: accounts, totalSumOfMoney: totalSumOfMoney, addAccount: addAccount};

// view accounts
console.log("accounts");
console.log(accounts);
console.log("");

// view the bank
console.log("bank");
console.log(bank);
console.log("");

// add an account
console.log("adding an account for Amber");
bank.addAccount(1000, "Amber");
console.log(`This worked: ${bank.accounts[5].ownersName === "Amber"}`);
console.log(`Ambers account:`);
console.log(bank.accounts[5]);
console.log(``);

// show total balance
console.log(`What's the total blance for the bank?`)
console.log(`The total balance for the account is: ${bank.totalSumOfMoney()}`);
console.log('');

// make a deposit
console.log(`Make a deposit of $10 into Ambers account.`);
console.log(`Ambers account before deposit: ${bank.accounts[5].currentBalance}`);
bank.accounts[5].deposit(10);
console.log(`Ambers account after deposit: ${bank.accounts[5].currentBalance}`);
console.log('');

// make a withdrawal
console.log(`Make a withdrawl of $10 out of Ambers account.`);
console.log(`Ambers account before withdrawl: ${bank.accounts[5].currentBalance}`);
bank.accounts[5].withdraw(10);
console.log(`Ambers account after withdrawl: ${bank.accounts[5].currentBalance}`);


/*
class account  {
  constructor(currentBalance, ownersName) {
    this.currentBalance = name;
  }
}
var e = new myObject("hello");
*/
