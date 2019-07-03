/*
# Array and Functions Bonus Material
1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
*/
const maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    console.log(`The greater number is ${num1}`);
  } else {
    console.log(`The greater number is ${num2}`);
  }

};

maxOfTwoNumbers(34, 65);
/*
2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
*/
const maxOfThree = function(num1, num2, num3) {
  if (num1 > num2) {
  }  else if (num1 > num3) {
     console.log(`The largest number is ${num1}`);
  }
    if (num2 > num1) {
    } else if (num2 > num3) {
      console.log(`The largest number is ${num2}`);
    }
    if (num3 > num1) {
    } else if (num3 > num2) {
      console.log(`The largest number is ${num3}`);
    }
};

maxOfThree(10,20,30);

/*
3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
//true A E I O U
const findVowel  = function (character) {
  character = character.toUpperCase();
  if (character === "A" || character === "E" ||character === "I" ||character === "O" ||character === "U" ) {
    //console.log("true");
    return true;

  } else {
    //console.log("false");
    return false;
  }
}
console.log(findVowel("a"));
console.log(findVowel("b"));
/*
4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
*/
const sumArray = function(arraySum) {
  let sum = 0;
  for (let i = 0; i < arraySum.length; i = i + 1) {
  sum = sum + arraySum[i];
};
  return sum;
};
const muliArray = function(arrayMulti) {
  let multi = 1;
  for (let i = 0; i < arrayMulti.length; i = i + 1) {
  multi = multi * arrayMulti[i];
};
  return multi;
};
arraySum = [1,2,3,4];
arrayMulti = [1,2,3,4];
/*
## Bonus
5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/
const reverseString = function reverse(s) {
  let o = " "
  for (let i = s.length - 1, o = ''; i >= 0; o += s[i--]) {
   }
  return o;
};
s = ("jag tester");
console.log(reverseString(s));

/*
6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
*/
arr = ['dog', 'cat', 'birds' ]
const findLongestWord = function longestString(arr) {
  let longest = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length)
        longest = arr[i];
      }
return longest;
};
console.log(findLongestWord(arr));

/*
7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
*/
words = ["Harold", "hen", "asdasda"];
i = 5;
const filterLongWords = function wordsSort(x, i) {
    for (let x = 0; x < words.length; x++) {
      if (words[x].length > i) {
        return words[x];
    }
    else {
        console.log("You have no words longer than the number " + i + ".");
    }
  }
};
console.log(filterLongWords(["Harold", "hen", "asdasda"], 5));
// console.log(filterLongWords([x], i));
