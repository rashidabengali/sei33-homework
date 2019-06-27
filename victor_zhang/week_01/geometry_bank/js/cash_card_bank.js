// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
const cartForParty = {
  banana: '1.25',
  handkerchief: '.99',
  Tshirt: '25.01',
  apple: '0.60',
  nalgene: '10.34',
  proteinShake: '22.36'
};
//
const array = ['banana','handkerchief']
console.log( cartForParty[array[0]] );

const cashRegister = function ( shoppingList ) {
  let listValues = Object.values(shoppingList);
  let total = 0;
  for (i = 0; i < listValues.length; i++) {
    total = total + Number(listValues[i]);
  }
  console.log(`The total price is $${ total }`);
}
//
// const cashRegister = function ( shoppingList ) {
//   let a = Object.keys(shoppingList);
//   console.log ( a );
//   console.log ( a.length );
//   let total = 0;
//   for (i = 0; i < a.length; i++) {
//     let key = a[i];
//     console.log (key);
//     total = total + shoppingList[a[i]]; //shoppingList is Object, banana is key parameter, 1.25 is value parameter
//     /* why is it shoppingList[a[i]] instead of shoppingList.a[i]? */
//     /* its supposed to be at the end cartForParty.banana
//     where shoppingList is cartForParty
//     and a[i] is banana for first instance from Object.keys(shoppingList)
//       Object.keys(shoppingList) returns an array of keys ['banana',etc]
//       so if I want to get banana, i need to run array[0]
//       which in essence is Object.keys(shoppingList)[0] */
//         /*so if I turn it into what i had from above:
//               Objects.keys(shoppingList) = a
//           so */
//       // ]
//   }
//   console.log(`The total price is $${ total }`);
// }

// Output
cashRegister(cartForParty); // 60.55
// ```

// __________________________________________________________________________
//
// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//


const calculateCardTotal = function (creditCard) {
  let total = 0;
  const cardString = creditCard.toString()
  for (let i = 0; i < cardString.length; i++ ) {
    total = total + Number(cardString[i]);
  }
  return total;
}

const twoDigitsMinimum = function (creditCard) {
  const cardString = creditCard.toString()
  const digitOcurrance = [];
  for (i = 0; i < 10; i++) {
    digitOcurrance[i] = 0;
    for (j = 0; j < cardString.length; j++) { // something broken with code
      if (Number(cardString[j]) === i) {
        digitOcurrance[i] = digitOcurrance[i] + 1;
      }
    }
    if (typeof creditCard === 'string' || digitOcurrance[i] > 15) {
      return false;
    }
  }
  return true;
}

const validateCreditCard = function( creditCard ) {
  const cardString = creditCard.toString()
  const cardValue = Object.values(creditCard); // check does this work? since its a string
  let total = 0;
  // for loop // to check if sum of all digits is greater than 16
  // maybe put this in a function and add to list of conditional if function returns true or false
  if (calculateCardTotal(creditCard) <= 16) {
    console.log(`'${ creditCard }' is an INVALID Credit Card Number, \n   all digits do not add up to at least 16.`)
  }
  else if (!twoDigitsMinimum(creditCard)) { // broken
    console.log(`'${ creditCard }' is an INVALID Credit Card Number, \n   does not have at least two different digits.`)
  }
  else if ((Number(cardString[15]))%2 !== 0) { // something broken with this code
    console.log(`'${ creditCard }' is an INVALID Credit Card Number, \n   does not end with an even digit.`)
  }
  else if (cardString.length !== 16 && typeof creditCard !== 'number') {
    console.log(`'${ creditCard }' is an INVALID Credit Card Number, \n   does not have 16 numbered digits.`)
  }
  else {
    console.log(`'${ creditCard }' is a valid Credit Card Number`)     // exit conditional if crediCard does not meet rule.
  }
};

validateCreditCard('fsdfa');
validateCreditCard(1234567890123456);
validateCreditCard(1111111111111111);
validateCreditCard(9999999988880000);
validateCreditCard(6666666666661666);
validateCreditCard('a92332119c011112');
validateCreditCard(4444444444444444);
validateCreditCard(1111111111111110);
validateCreditCard(6666666666666661);


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
