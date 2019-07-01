// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function ( a, b ) {

  if (a >= b) {
    return a;
  } else {
    return b;
  }

};

// test maxOfTwoNumbers function:
console.log("Test maxOfTwoNumbers function:");
console.log(` - maxOfTwoNumbers(4,2): ${maxOfTwoNumbers(4,2)}`);
console.log(` - maxOfTwoNumbers(5,7): ${maxOfTwoNumbers(5,7)}`);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function ( a, b, c) {

  if (a >= b && a >= c) {
    return a;
  } else if (b >= c) {
    return b;
  } else {
    return c;
  }

}

// test maxOfThree function:
console.log("Test maxOfThree function:");
console.log(` - maxOfThree(3,2,1): ${maxOfThree(3,2,1)}`);
console.log(` - maxOfThree(2,3,1): ${maxOfThree(2,3,1)}`);
console.log(` - maxOfThree(2,1,3): ${maxOfThree(2,1,3)}`);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = function ( char ) {

  const vowels = [`a`,`e`,`i`,`o`,`u`];

  // check if the char is a vowels
  for(let i = 0; i < vowels.length; i++) {
    if( char === vowels[i]) {
      return true;
    }
  }

  return false;

};

// test isVowel function:
console.log("Test isVowel function:");
console.log(" - isVowel(`a`): " + isVowel(`a`));
console.log(" - isVowel(`u`): " + isVowel(`u`));
console.log(" - isVowel(`c`): " + isVowel(`c`));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function ( numbers ) {

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

// test sumArray function:
console.log("Test sumArray function:");
console.log(" - sumArray([1,2,3,4]): " + sumArray([1,2,3,4]));

// function
const multiplyArray = function ( numbers ) {

  let totalProduct = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    totalProduct *= numbers[i];
  }

  return totalProduct;
}

// test multiplyArray function:
console.log("Test multiplyArray function:");
console.log(" - multiplyArray([1,2,3,4]): " + multiplyArray([1,2,3,4]));

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function ( str ) {

  let reverse = "";

  for (let i = str.length-1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}

// test reverseString function:
console.log("Test reverseString function:");
console.log(" - reverseString(\"jag testar \"): " + reverseString("jag testar"));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = function ( words ) {

  let posLongest = 0;

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > words[posLongest].length) {
      posLongest = i;
    }
  }

  return words[posLongest].length;

}

// test findLongestWord function:
console.log("Test findLongestWord function:");
let words = ["sea", "go", "hello"];
console.log(" - findLongestWord([\"sea\",\"go\",\"hello\"]): " + findLongestWord(words));


// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

const filterLongWords = function ( words, minSize ) {

  let longestWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > minSize) {
      longestWords.push(words[i]);
    }
  }

  return longestWords;
}

// test filterLongWords function:
console.log("Test filterLongWords function:");
let words2 = ["happy", "go", "hello"];
console.log(" - filterLongWords([\"happy\",\"go\",\"hello\"],2): " + filterLongWords(words2,2));
