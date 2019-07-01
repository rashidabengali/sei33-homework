// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const wordToGuess = [`F`,`O`,`X`];
const playerGuess = [`_`,`_`,`_`];

// simple utility to print the letters
const displayWord = function ( word ) {
  str = "";

  for (let i = 0; i < word.length; i++) {
    str += word[i];
  }

  return str;
}

const guessLetter = function ( letter ) {

  let match = false;
  let msg = "Sorry Try Again";

  for (let i = 0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] === letter ) {
      match = true;
      playerGuess[i] = wordToGuess[i];
      msg = `Great you found a letter: ${letter}__`;

      if (!playerGuess.includes('_')) {
        msg += `\n \n \t Congratulation You Won the Game: ${displayWord(wordToGuess)}`;
        return msg;
      }
      return msg;
    }
  }

  if (!match) {
    return msg;
  }

};

// test guessLetter function
console.log("Test guessLetter function:");
console.log(`- guessLetter(\`A\`): ${guessLetter(`A`)}`);
console.log(`- guessLetter(\`F\`): ${guessLetter(`F`)}`);
console.log(`- guessLetter(\`O\`): ${guessLetter(`O`)}`);
console.log(`- guessLetter(\`C\`): ${guessLetter(`C`)}`);
console.log(`- guessLetter(\`X\`): ${guessLetter(`X`)}`);


//
// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// utility function to generate a random integer between zero and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

// utility function to count the occurrences in an array
function countOccurrences(word, letter) {
  let occ = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      occ++;
    }
  }

  return occ;
};

// variuables intialization
let reward = 0;
const playerGuess2 = [`_`,`_`,`_`];

const guessLetterReward = function ( letter ) {

  let match = false;
  let msg = "Sorry Try Again";

  for (let i = 0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] === letter ) {
      match = true;
      playerGuess2[i] = wordToGuess[i];

      // calculate reward
      let occurrences = countOccurrences(wordToGuess,letter);
      reward += getRandomInt(5)*occurrences + 1;

      msg = `Great you found a letter: ${letter}__ (${reward})`;


      if (!playerGuess2.includes('_')) {
        msg += `\n \n \t Congratulation You Won the Game: ${displayWord(wordToGuess)}`;
        msg += `\n \n \t Final Reward: ${reward}`;
        return msg;
      }
      return msg;
    }
  }

  if (!match) {
    reward -= getRandomInt(5);
    return `${msg} (${reward})`;
  }

};

// test guessLetterReward function
console.log("Test guessLetterReward function:");
console.log(`- guessLetterReward(\`A\`): ${guessLetterReward(`A`)}`);
console.log(`- guessLetterReward(\`F\`): ${guessLetterReward(`F`)}`);
console.log(`- guessLetterReward(\`O\`): ${guessLetterReward(`O`)}`);
console.log(`- guessLetterReward(\`C\`): ${guessLetterReward(`C`)}`);
console.log(`- guessLetterReward(\`X\`): ${guessLetterReward(`X`)}`);


// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

const playerGuess3 = [`_`,`_`,`_`];
const playerGuesses = [];
let hangManState = 0;

//utility function to display hangman

const displayHangMan = function () {
  let draw = ` ----`;
  draw+= `\n|    |`;
  draw+= `\n| \t /\\`;
  draw+= `\n| \t \\/`;
  draw+= `\n| \t /|\\`;
  draw+= `\n| \t  /\\`;
  draw+= `\n|`;
  draw+= `\n ________________`;
  return draw;
}
//console.log(displayHangMan());

const hangman = function ( letter ) {

  let match = false;
  let msg = "Sorry Try Again";

  for (let i = 0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] === letter ) {
      match = true;

      if (!playerGuesses.includes(letter)) {
        playerGuesses.push(letter);
        hangManState -= 1;
        msg = `Great you found a letter: ${letter}__`;
      } else {
        msg = `You've already guessed this letter`;
      }
      playerGuess3[i] = wordToGuess[i];

      if (!playerGuess3.includes('_')) {
        msg += `\n \n \t Congratulation You Won the Game: ${displayWord(wordToGuess)}`;
        return msg;
      }
      return `${msg} (${hangManState})`;
    }
  }

  if (!match) {
    playerGuesses.push(letter);
    hangManState += 1;

    if (hangManState === 6) {
      return `\n \n \t You Lost the Game \n  \t \t Try one more time \n ${displayHangMan()} `;
    }
    return `${msg} (${hangManState})`;
  }

};

// test hangman function
console.log("Test hangman function:");
console.log(`- hangman(\`F\`): ${hangman(`F`)}`);
console.log(`- hangman(\`F\`): ${hangman(`F`)}`);
console.log(`- hangman(\`Y\`): ${hangman(`Y`)}`);
console.log(`- hangman(\`W\`): ${hangman(`W`)}`);
console.log(`- hangman(\`Z\`): ${hangman(`Z`)}`);
console.log(`- hangman(\`K\`): ${hangman(`K`)}`);
console.log(`- hangman(\`Q\`): ${hangman(`Q`)}`);
console.log(`- hangman(\`T\`): ${hangman(`T`)}`);
console.log(`- hangman(\`C\`): ${hangman(`C`)}`);
