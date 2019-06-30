console.log('is array_function.js working?');


// # Array and Functions Bonus Material
//
/* 1. Define a function `maxOfTwoNumbers` that takes two numbers as
arguments and returns the largest of them. Use the if-then-else construct
 available in Javascript. You'll have to remember your pre-work, or do
 some googling to figure this out.*/

const maxOfTwoNumbers = function( a,b ) {
  if ( a > b ) {
    return a;
  }
  return b;
};

console.log(maxOfTwoNumbers(12,3));

/* 2. Define a function `maxOfThree` that takes three numbers as
arguments and returns the largest of them.*/

const maxOfThree = function ( a, b, c ) {
  let greaterNum = 0;
  greaterNum = a > b ? a : b; // conditional logical operator or ternary logical operator
  greaterNum = greaterNum > c ? greaterNum : c; // if a > b, return biggest number and compare to c
  console.log(greaterNum);
  return greaterNum;
};

maxOfThree(8,3,6);

/* 3. Write a function that takes a character (i.e. a string of
length 1) and returns true if it is a vowel, false otherwise.*/

const isVowel = function ( char ) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ) {
    return true; // if char has any of the vowels above, return true
  }
  return false; // otherwise false
};

console.log(isVowel('a'));
console.log(isVowel('t'));
console.log(isVowel('z'));

/* 4. Define a function `sumArray` and a function `multiplyArray`
 that sums and multiplies (respectively) all the numbers in an array
 of numbers. For example, `sumArray([1,2,3,4])` should return 10, and
 `multiplyArray([1,2,3,4])` should return 24.*/

const numArray = [1,2,3,4];

const sumArray = function( numbers ) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result = result + numArray[i]; // result will equal previous result + next number in array
  };
  console.log(result);
};

const multiplyArray = function( numbers ) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result = result * numArray[i]; // result equal previous result * next number in array
  };
  console.log(result);
};

sumArray(numArray);
multiplyArray(numArray);
//
// ## Bonus
//
/* 5. Define a function `reverseString` that computes the reversal of
a string. For example, reverseString("jag testar") should return the
string "ratset gaj". */

const reverseString = function(string) {
  let newString = '';
  for (let i = string.length-1; i >= 0; i--) {
    newString = newString + string[i]; // add every char from string starting from the last one into newString
    /* newString = string.concat(string[0], string[1], etc) */
  };
  console.log(newString);
  return newString;
};

reverseString('jag testar');

/* 6. Write a function `findLongestWord` that takes an array of words
 and returns the length of the longest one.*/

const myWords = ['Timothy','television','onomatowhatever','egg','sandal','jamaica'];

const findLongestWord = function( arrayWords ) {
  let longestWord = ''; // initialise longestWord to none at the moment
  for (let i = 0; i < arrayWords.length; i ++) {
    if (arrayWords[i].length > longestWord.length) { // if currentword is longer than longestword
      longestWord = arrayWords[i]; // then currentword is now longestword
    }
  };
  console.log(longestWord);
};
//
findLongestWord(myWords);

/* 7. Write a function `filterLongWords` that takes an array of words
 and an number `i` and returns the array of words that are longer than i.*/

 const filterLongWords = function( arrayWords, wordLength ) {
   let resultArray = []; // create empty array
   for (i = 0; i < arrayWords.length; i++ ) {
     if (arrayWords[i].length > wordLength) { // if currentword in original array is longer than provided number
       resultArray.push(arrayWords[i]); // add currentword into newArray
     };
   };
   console.log(resultArray);
 };

 filterLongWords( myWords, 6);
