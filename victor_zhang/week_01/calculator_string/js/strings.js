console.log('strings.js is up and running!');

// Strings

// DrEvil
/* Create a function called DrEvil. It should take a single argument,
an amount, and return ' dollars', except it will add '(pinky)' at the end
if the amount is 1 million. For example: */
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
const DrEvil = function(amount) {
  if (amount < 1000000) {
    console.log(amount + ' dollars');
    return;
  }
  console.log(amount + ' dollars (pinky)');
  return;
};


// MixUp
/* Create a function called mixUp. It should take in two strings, and return
the concatenation of the two strings (separated by a space) slicing out and
swapping the first 2 characters of each. You can assume that the strings are at
least 2 characters long. For example:*/
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

//   mixUp('fire', 'arm'): 'arre fim'

const mixUp = function(string1, string2) {
  word1 = swapLastLetter(string1, string2);
  word2 = swapLastLetter(string2, string1);
  console.log (word1 + ' ' + word2);
};

const swapLastLetter = function(string, string) {

  let newString = '';
  newString = arguments[1].slice(0,2); //slice(/*returns string from*/starting index, length)
  newString = newString.padEnd(arguments[0].length,arguments[0].slice(2)); //padEnd(newStringLength,whatToAdd)
  return newString;

  // let word = '';
  // for (let i = 0; i < string1.length-1; i++) {
  //   word = word + string1[i];
  //   if (i === string1.length-2) {
  //     word = word + string2[string2.length-1];
  //   };
  // };
  // return word;
};

mixUp('mix','pod');
mixUp('dog','dinner');
mixUp('fire','arm');
mixUp('nobody','perfect');

// USING string.slice & string.padEnd
// const mixUp = function(string1, string2) {
//   let newString = '';
//   let y = 1;
//   for (let x = 0; x < 2; x++) {
//       newString = arguments[x].slice(0,arguments[x].length-1);
//       newString = newString.padEnd(arguments[x].length,arguments[y][arguments[y].length-1]);
//   };
//   return newString;
// };

// USING string.slice & string.padEnd
// newString1 = string1.slice(0,string1.length-1);
// newString1.padEnd(string1.length,string2[string2.length-1]);



// FixStart
/* Create a function called fixStart. It should take a single argument, a string,
and return a version where all occurences of its first character have been replaced
with '*', except for the first character itself. You can assume that the string
is at least one character long. For example:*/
//
// fixStart('babble'): 'ba**le'
const fixStart = function(string) {
  newString = string.slice(0,1);
  newString = newString.padEnd(string.length,'*');
  return newString;
};

// Rashida version
const fixStart = function (word) {
  let editedWord = word[0];
  for (let i= 1; i < word.length; i++) {
    if (word[i] === word[0]) {
      editedWord += '*';
    } else {
      editedWord += word[i];
    }
  }
  console.log('word', editedWord);
}


// Verbing
/* Create a function called verbing. It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already
ends in 'ing', in which case it should add 'ly' instead. If the string length
is less than 3, it should leave it unchanged. For example:*/
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function(string) {
  if (string.slice(string.length-3) === 'ing') {
    newString = string.padEnd(string.length+2,'ly');
    return newString;
  }
  else if (string.length >= 3) {
    newString = string.padEnd(string.length+3,'ing');
    return newString;
  }
  else {
  return string;
  };
};


// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
/* If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
substring with 'good' and return the result.*/
/* If it doesn't find 'not' and 'bad' in the right sequence (or at all),
just return the original sentence.*/
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = function(string) {
  if (!string.includes('not') || !string.includes('bad')) {
    return string;
  }
  else if (string.indexOf('bad') > string.indexOf('not')) { // if index of 'not' comes before 'bad'
    let badString = string.indexOf('bad') + 3;
    newString = string.replace(string.substring(string.indexOf('not'),badString),'good');
    /* .replace(substr, newSubstr) // replace substring with a new substring
    .substring(indexStart, lastIndex) // return part of string between two indexes
        example: 'Hello World'.substring(2,6) --> 'llo W'*/
    return newString;
  }
  return string;
};


console.log(notBad('this is bad'));
