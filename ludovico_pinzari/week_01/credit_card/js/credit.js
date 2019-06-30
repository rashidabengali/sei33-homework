// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16 ( >16 )
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


// utility function to check if a string has a given number of characters

const checkLength = function ( str, size ) {

  if ( str.length === size ) {
    return true;
  }

  return false;
}

// utility function to verify if a character is a digit

const isDigit = function ( char ) {

  if ( char === '0' ) {
    return true;
  } else if ( char === '1' ) {
    return true;
  } else if ( char === '2' ) {
    return true;
  } else if ( char === '3' ) {
    return true;
  } else if ( char === '4' ) {
    return true;
  } else if ( char === '5' ) {
    return true;
  } else if ( char === '6' ) {
    return true;
  } else if ( char === '7' ) {
    return true;
  } else if ( char === '8' ) {
    return true;
  } else if ( char === '9' ) {
    return true;
  } else if ( char === '10' ) {
    return true;
  } else {
    return false;
  }

};

const areDigits = function ( str ) {

   for ( let i = 0; i < str.length; i++ ) {
     if ( !isDigit(str[i]) ) {
       return false;
     }
   }
   return true;
};

// if all the characters in the string are equal top the first one
// then the string is composed by the same characters
// Pre: the string has at least two characters

const areAllEquals = function ( str ) {

  const firstChar = str[0];

  for ( let i = 1; i < str.length; i++ ) {
    if ( firstChar !== str[i] ) {
      return false;
    }
  }

  return true;
};

// Pre: digits is a string of integers

const islastEven = function ( digits ) {

  let lastDigit = parseInt(digits[digits.length-1],10);

  if ( lastDigit % 2 === 0) {
    return true;
  }
  return false;
};

// check if the summ of all digits is greater than a given number (min)

const isSumGreater = function ( digits, min ) {

  let sum = 0;

  for ( let i = 0; i < digits.length; i++ ) {
    sum += parseInt(digits[i]);

    if ( sum > min) {
      return true;
    }
  }

  return false;
};

const validateCreditCard = function ( creditCard ) {

  // removes dashes
  let strReg = new RegExp("-",'g');
  const card = creditCard.replace(strReg,"");

  if ( !checkLength(card,16) ) {
    return false;
  } else if ( !areDigits(card) ) {
    return false;
  } else if ( areAllEquals(card) ) {
    return false;
  } else if ( !islastEven(card) ) {
    return false;
  } else if ( !isSumGreater(card,16)) {
    return false;
  } else {
    return true;
  }

};

//test validateCreditCard function:
//test valid cards
console.log("Test validateCreditCard function:");
console.log(`- validateCreditCard("9999-9999-8888-0000"): ${validateCreditCard("9999-9999-8888-0000")} `);
console.log(`- validateCreditCard("6666-6666-6666-1666"): ${validateCreditCard("6666-6666-6666-1666")} `);
//test invalid cards
console.log(`- validateCreditCard("a923-3211-9c01-1112"): ${validateCreditCard("a923-3211-9c01-1112")} `);
console.log(`- validateCreditCard("4444-4444-4444-4444"): ${validateCreditCard("4444-4444-4444-4444")} `);
console.log(`- validateCreditCard("1111-1111-1111-1110"): ${validateCreditCard("1111-1111-1111-1110")} `);
console.log(`- validateCreditCard("6666-6666-6666-6661"): ${validateCreditCard("6666-6666-6666-6661")} `);



// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
