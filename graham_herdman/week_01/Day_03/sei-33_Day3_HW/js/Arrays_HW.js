console.log("Is this thing on?");

// HomeWork: Array and Functions Bonus Material

// 1) MaxOfTwoNumbers
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

console.log("1) MaxOfTwoNumbers");
console.log("");

const maxOfTwoNumbers = function (a, b) {
  if (a > b){
    return a;
  } else {
    return b;
  }
}

console.log(maxOfTwoNumbers(1, 2));
console.log(maxOfTwoNumbers(2, 1));
console.log(maxOfTwoNumbers(1000, 999));

// 1) MaxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

console.log("2) MaxOfThree");
console.log("");

const maxOfThree = function (a, b, c) {
  const numbers = [a, b, c];
  let max = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]
    }
  }
  return max
}

console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(2, 1, 3));
console.log(maxOfThree(1000, 999, 998));

// 3) vowels
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
console.log("3) vowels");
console.log("");

const vowels = function (vowel) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(vowel)) {
    return true;
  }
  return false;
}

console.log(vowels("a"));
console.log(vowels("b"));
console.log(vowels("i"));

// 4) sumArray
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
console.log("4) sumArray");
console.log("");

const sumArray = function (array) {
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

console.log(sumArray([1, 1, 1]));
console.log(sumArray([1, 2, 3]));
console.log(sumArray([2, 2, 2]));

console.log("");
console.log("4) multiplyArray");

const multiplyArray = function (array) {
  product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i]
  }
  return product
}

console.log(multiplyArray([1, 1, 1]));
console.log(multiplyArray([1, 2, 3]));
console.log(multiplyArray([2, 2, 2]));

// BONUS
// 5) Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
console.log("5) reverseString");
console.log("");

const reverseString = function (string) {
  reversedString = ""
  for (let i = string.length-1; i > -1; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

console.log(reverseString('Graham'));
console.log(reverseString('Dog'));
console.log(reverseString('Break'));

// 6) findLongestWord
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
console.log("");
console.log("6) findLongestWord");
console.log("");

const findLongestWord = function (words) {
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord(['Graham', 'cat']));
console.log(findLongestWord(['Dog']));
console.log(findLongestWord(['Break', 'me']));


// 7) filterLongWords
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
console.log("7) filterLongWords");
console.log("");

const filterLongWords = function (words, i) {
  longerThanI = []
  for (let j = 0; j < words.length; j++) {
    if (words[j].length > i) {
      longerThanI.push(words[j]);
    }
  }
  return longerThanI;
}

console.log(filterLongWords(['Graham', 'cat'], 4));
console.log(filterLongWords(['Dog'], 1));
console.log(filterLongWords(['Break', 'me'], 6));

/*
// Homework: The Word Guesser
// 1HW) You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
console.log("");
console.log("HomeWork The Word Guesser");
console.log("");

lettersOfWord = ['F', 'O', 'X'];
currentGuess = [];

const guessLetter = function (guess) {

  let found = false;

  // Check to see if they found a letter
  for (let i = 0; i < lettersOfWord.length; i++) {
    if (lettersOfWord[i] === guess) {
      currentGuess[i] = lettersOfWord.splice(i, 1);
      found = true;
    }
  }

  // log the current guessed letters
  str = ""
  for (let i = 0; i < currentGuess.length; i++) {
    str += String(currentGuess[i]);
  }
  console.log(str);

  // output for if they found a letter or not
  if (found === true) {
    console.log(`Congratulations you found the letter ${guess}`)
  } else {
    console.log("Sorry you didn't find any letters this guess.")
  }

  // winning the game
  if (lettersOfWord.length === 0) {
    console.log("Congratulations! You have won the game!");
  }
}

guessLetter('F');
guessLetter('O');
guessLetter('x');
*/

/*
// Homework: Wheel of Fortune
// 2HW) Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

// TERRIBLY WRITTEN WHEEL OF FORTUNE. HONESTLY I AM EMBARRASSED TO HAVE WRITTEN CODE THIS BAD

console.log("");
console.log("HomeWork BONUS Wheel of Fortune");
console.log("");

lettersOfWord = ['F', 'O', 'X'];
currentGuess = [];
correctGuesses = 0;
reward = 0;

const guessLetter = function (guess) {

  // Check to see if they found a letter
  let found = false;
  for (let i = 0; i < lettersOfWord.length; i++) {
    if (lettersOfWord[i] === guess) {
      currentGuess[i] = lettersOfWord.splice(i, 1);
      correctGuesses++;
      found = true;
    }
  }
  if (!found) {
    correctGuesses = 0;
  }

  // log the current guessed letters
  str = ""
  for (let i = 0; i < currentGuess.length; i++) {
    str += String(currentGuess[i]);
  }
  console.log(str);

  // output for if they found a letter or not
  if (correctGuesses > 0) {
    currentReward = 10 * correctGuesses;
    reward += currentReward;
    console.log(`Congratulations you found the letter ${guess} and received a reward of ${currentReward}$`);
  } else {
    reward -= 10;
    console.log(`Sorry you didn't find any letters this guess and were fined ${10}$.`)
  }

  // winning the game
  if (lettersOfWord.length === 0) {
    console.log(`Congratulations! You have won the game and received a total reward of ${reward}$`);
  }
}

while (lettersOfWord.length > 0){
  let guess = prompt("Please enter your guess", "i.e. A");
  guessLetter(guess);
}
*/

// Homework: Make it like Hangman
// 3HW) Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

// TERRIBLY WRITTEN WHEEL OF FORTUNE. HONESTLY I AM EMBARRASSED TO HAVE WRITTEN CODE THIS BAD
/*
console.log("");
console.log("HomeWork BONUS Hangman");
console.log("");

// wait helper function
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

// draw hang man helper function
const drawHangMan = function (stage) {
  if (stage === 1){
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("___")
  } else if (stage === 2) {
    console.log("")
    console.log(" | ")
    console.log(" | ")
    console.log(" | ")
    console.log("___")
  } else if (stage === 3) {
    console.log("  ___ ")
    console.log(" | ")
    console.log(" | ")
    console.log(" | ")
    console.log("___")
  } else if (stage === 4) {
    console.log("  ___ ")
    console.log(" |   O")
    console.log(" | ")
    console.log(" | ")
    console.log("___")
  } else if (stage === 5) {
    console.log("  ___ ")
    console.log(" |   O")
    console.log(" |   |")
    console.log(" | ")
    console.log("___")
  } else if (stage === 6) {
    console.log("  ___ ")
    console.log(" |   O")
    console.log(" |  -|-")
    console.log(" | ")
    console.log("___")
  } else if (stage === 7) {
    console.log("  ___ ")
    console.log(" |   O")
    console.log(" |  -|-  YOU ARE DEAD. HAVE FUN BEING DEAD YOU DEAD PERSON.")
    console.log(" |  J L")
    console.log("___")
  }
}

lettersOfWord = ['F', 'O', 'X'];
correctLetters = []
guessedLetters = [];
numGuesses = 0;

const guessLetter = function (guess) {



  if (!guessedLetters.includes(guess)){
    guessedLetters.push(guess);
  } else {
    numGuesses ++
    console.log(`Sorry you already chose that letter! Try again. You only have ${7 - numGuesses} left.`)
    return;
  }

  // Check to see if they found a letter
  let found = false;
  for (let i = 0; i < lettersOfWord.length; i++) {
    if (lettersOfWord[i] === guess) {
      correctLetters[i] = lettersOfWord.splice(i, 1);
      found = true;
    }
  }

  // output for if they found a letter or if they did not
  if (found) {
    console.log(`Congratulations you found the letter ${guess}`);
    // console.log(`you are up to ${correctLetters}`);
  } else {
    numGuesses ++
    console.log(`Sorry you didn't find any letters this guess. You only have ${7 - numGuesses} guesses left.`)
    console.log(`Here's you getting ready to be hung`)
    drawHangMan(numGuesses)
  }

  // winning the game
  if (lettersOfWord.length === 0) {
    console.log(`Congratulations! You have won the game and are not dead. Have fun being not dead.`);
  } else if (numGuesses >= 7){
    console.log("Sorry you lost the game (and your life)!")
    drawHangMan(7)
  }
}

while (lettersOfWord.length > 0 && numGuesses < 7){
  console.log("Please enter your guess");
  let guess = prompt("Please enter your guess", "i.e. A");
  guessLetter(guess);
  wait(2000);
}
*/
