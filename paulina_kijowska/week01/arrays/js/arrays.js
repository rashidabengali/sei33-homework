

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumber = function(num1, num2) {

if ( num1 > num2 ) {

console.log(num1 + + " is larger than " + num2);
}
  else {
console.log(num2 + " is larger than " + num1);
  }
  return;
}
maxOfTwoNumber(54, 89);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3)
{
    let max = Math.max(num1, num2, num3);
    return max;
}

console.log(maxOfThree(20,3,5));
console.log(maxOfThree(20342,343,51435));


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


const vowel = function(char) {


      if (char === 'a'||'e'||'i'||'o'||'u') {
          return "The character is a Vowel";
      }
      else {
      return "The character is a Consonant";
      }
  }

  console.log(vowel("y"));
  console.log(vowel("k"));


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.


//
const sumArray = function(num) {
  let total = 0;
for (let i=0; i < num.length; i++) {
   total += num[i];
   // or total = total + num[i];
}
return total;
}

console.log(sumArray([1,2,3,4]));

////////////////

const multiplyArray = function(num) {
  let total = 1;
for (let i=0; i < num.length; i++) {
   total *= num[i];
}
return total;

}
console.log(multiplyArray([1,2,3,4]));



// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(str) {
  let totals = "";
for (let i=str.length-1; i >= 0; i--) {
  totals += str[i];
// or totals = totals + str[i];
}
  return totals;

}
console.log(reverseString("party"));
console.log(reverseString("batman"));
console.log(reverseString("spongebob"));



///

// 6. Write a function findLongestWord that takes an array of words and returns the length of the longest one. ????

// const findLongestWord = function(arr) {
// for (let i=0; i < arr.length; i++)  {
//
//   let arrayLength = arr[i].length;
//
// }
//
// return arrayLength;
// }
// console.log(findLongestWord(["apple", "blackberry", "watermelon"]));


// 7. // Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.


const filterLongWords = function(arr, num) {
  const longestWords = [];
for (let i=0; i < arr.length; i++)  {
  if (arr[i].length > num) {
longestWords[longestWords.length] = arr[i];

  }
}

return longestWords;
}
filterLongWords(["late", "mystery", "whyamIhere"], 5);

//
// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// const lettersOfWord = ["B","R","E","A","K"];
// const currentLetters = [];
//
// const guessLetter = function(letter) {
//   for (let i=0; i < letters.length; i++) {
// const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// if (letters[i] === arg){
// currentLetters.push(letters[i]);
// }
// if lettersOfWord.lenght === currentLetters.lenght; {
//   console.log("you won!")
// }
// }
//
// }
