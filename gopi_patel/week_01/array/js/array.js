// console.log("test");
// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (num1 , num2) {
  if (num1 > num2) {
  return num1;
 }
 else {
   return num2;
 }
};

console.log(maxOfTwoNumbers(10,20));

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (num1 ,num2,num3) {
  if (maxOfTwoNumbers(num1,num2)> num3) {
    return maxOfTwoNumbers(num1,num2);
  }
    else {
      return num3;
    }
  };

  console.log(maxOfThree(10,30,5));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = function(str) {
  let vowel =['a','e','i','o','u'];
  for (let i =0; i < vowel.length ; i++){
    if(str.toLowerCase() === vowel[i]) {
      return true;
    }
  }
  return false;
};

console.log(isVowel('E'));

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray =function(arr) {
  console.log(arr);
  let sum = 0;
  for(let i = 0; i < arr.length ; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log (sumArray([1,2,3,4]));

// multiplyarray

const multiplyArray = function(arr) {
  console.log(arr);
  let mult = 1;
  for(let i = 0; i < arr.length ; i++) {
    mult = mult * arr[i];
  }
  return mult;
};
console.log (multiplyArray([1,2,3,4]));


//
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (str) {
  let newString = "";
  for(let i=str.length -1; i >=0 ; i--){
    newString +=str[i];
  }
  return newString;
};

console.log (reverseString ("jag testar"));


// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function(array) {
  let longestWord = 0;
  for(let i =0 ; i < array.length; i++) {
    if (longestWord < array[i].length) {
      longestWord = array[i].length;
    }
  }

  return longestWord;
};


console.log(findLongestWord (['Longest','Katherine','Adam']));


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function (array, num) {
  let result = [];
  for(let i =0; i< array.length; i++){
    if (array[i].length > num){
      result.push(array[i]);
    }
  }
  return result;
};

console.log(filterLongWords(['made','at','array'], 3));
