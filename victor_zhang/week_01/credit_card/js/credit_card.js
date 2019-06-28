
// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
const cardDetails = [];
let cardInfo = {};
let cardId = 0;

/*TEST
// cardInfo.number = 1257823904737;
// cardInfo.validity = 'invalid';
// cardInfo.error = 'no_even_last_number';
//
// cardDetails.push(cardInfo); */

const inputToNumber = function ( input ) {
  const regex =/-/gi;
  let cardNumber = Number(input.replace(regex,''));
  return cardNumber;
}

const calculateCardTotal = function (cardNumber) {
  let total = 0;
  const cardString = cardNumber.toString()
  for (let i = 0; i < cardString.length; i++ ) {
    total = total + Number(cardString[i]);
  }
  return total;
}

const twoDigitsMinimum = function (cardNumber) {
  const cardString = cardNumber.toString()
  const digitOcurrance = [];
  for (i = 0; i < 10; i++) {
    digitOcurrance[i] = 0;
    for (j = 0; j < cardString.length; j++) {
      if (Number(cardString[j]) === i) {
        digitOcurrance[i] = digitOcurrance[i] + 1;
      }
    }
    if (typeof cardNumber === 'string' || digitOcurrance[i] > 15) {
      return false;
    }
  }
  return true;
}

const validateCreditCard = function( creditCard ) {
  const cardNumber = inputToNumber( creditCard );
  const cardString = cardNumber.toString()
  const cardValue = Object.values(cardNumber); // check does this work? since its a string
  let total = 0;
  // for loop // to check if sum of all digits is greater than 16
  // maybe put this in a function and add to list of conditional if function returns true or false
  cardInfo.number = creditCard;

  if (cardString.length !== 16 || typeof cardNumber !== 'number') {
    console.log(`'${ cardNumber }' is an INVALID Credit Card Number, \n   does not have 16 numbered digits.`)
    cardInfo.validity = 'invalid';
    cardInfo.error = 'no_16_num_digits'
  }
  else if (calculateCardTotal(cardNumber) <= 16) {
    console.log(`'${ cardNumber }' is an INVALID Credit Card Number, \n   all digits do not add up to at least 16.`)
    cardInfo.validity = 'invalid';
    cardInfo.error = 'sum_not_16'
  }
  else if (!twoDigitsMinimum(cardNumber)) { // broken
    console.log(`'${ cardNumber }' is an INVALID Credit Card Number, \n   does not have at least two different digits.`)
    cardInfo.validity = 'invalid';
    cardInfo.error = 'no_2_digits_min'
  }
  else if ((Number(cardString[15]))%2 !== 0) { // something broken with this code
    console.log(`'${ cardNumber }' is an INVALID Credit Card Number, \n   does not end with an even digit.`)
    cardInfo.validity = 'invalid';
    cardInfo.error = 'no_even_last_number'
  }
  else {
    console.log(`'${ cardNumber }' is a valid Credit Card Number`)     // exit conditional if crediCard does not meet rule.
    cardInfo.validity = 'valid';
  }
  cardDetails[cardId] = cardInfo;
};

const cardInserted = function ( card ) {
  cardInfo = {};
  validateCreditCard( card );
  cardId = cardId + 1;
}


cardInserted('fsdfa');
cardInserted('1234-5678-9012-3456');
cardInserted('1111-1111-1111-1111');
cardInserted('9999-9999-8888-0000');
cardInserted('6666-6666-6666-1666');
cardInserted('a923-3211-9c01-1112');
cardInserted('4444-4444-4444-4444');
cardInserted('1111-1111-1111-1110');


console.log(cardDetails);
// cardInserted('6666-6666-6666-6661');


/* TEST FOR inputToNumber
// inputToNumber('9999-9999-8888-0000');
// const testNum = '9999-9999-8888-0000'
// const regex =/-/gi
//
// console.log(testNum.replace(regex,''));
//
// const testResult = testNum.replace(regex,'');
//
// console.log(Number(testResult));
// console.log(typeof Number(testResult));
*/



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
