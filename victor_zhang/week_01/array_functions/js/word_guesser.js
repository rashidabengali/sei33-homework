// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
console.log('word_guesser.js is up and running');

console.log('You are playing Hangman! \n _______________________________________________ \n'
+ '\n' + 'Guess the Hidden words!');

// Initialising variables
let wordLetters = [];
let guessedLetters = [];
let wrongGuesses = [];
let maxReward = 5;
// let numCorrectGuesses = 0;
let reward = 0;
let rewardAmount = 0;
let hangmanState = 6;

// Create and save an array with the word that will be guessed
const createWordArrays = function(word) {
  for (i = 0; i < word.length; i++) {
    wordLetters.push(word.charAt(i));
  };
  createGuessedLetters(word); // function call createGuessedLetters
};

// Create and save an Array with # of empty space as word to be guessed
const createGuessedLetters = function(word) {
  for (i = 0; i< word.length; i++) {
    if (word.charAt(i) === ' ') {
      guessedLetters.push(word.charAt(i));
    }
    else {
      guessedLetters.push('_');
    };
  };
};

createWordArrays('jelly beans');


console.log(wordLetters);
console.log(guessedLetters);

// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
//

// call this function when a correctGuess has been made
const correctGuess = function( i,letter ) {
  guessedLetters[i] = letter;
  updateReward();
  console.log(guessedLetters);
  console.log('Congratulations, you found another letter!');
  // find elements in array with guessed letters
  // redeclare those (empty) elements with guessed letter
  // like so: guessedLetters[3] = 'e';
}

const updateReward = function() {
  reward = Math.ceil( Math.random() * maxReward ); // reward will update to round up a random number (0-1) * maxReward
  rewardAmount = rewardAmount + reward/* * numCorrectGuesses*/; //update current total rewardAmount
  console.log(reward);
  // return rewardAmount;
}

// check if player lost game, losing message
const checkLose = function() {
  if (hangmanState === 0) {
    console.log('Hangman died, You Lost..\n' +
                '      _______\n' +
                '     |/      |\n' +
                '     |      (_)\n' +
                '     |      \\|/\n');
    console.log('     |       |');
    console.log('     |      / \\');
    console.log('     |');
    console.log(' jgs_|___');

    console.log(`You still won $${ rewardAmount } for the right guesses`);
  }
};

// call function when player enters a guessedLetters
const guessLetter = function(letter) {
  if (guessedLetters.includes(letter) || wrongGuesses.includes(letter)){
    console.log(`You already guessed the letter '${ letter }'.`);
  }
  for (i = 0; i < guessedLetters.length; i++) {
    if (hangmanState === 0) {
      console.log('You already lost');
      return;
    }
    else if (wordLetters[i].includes(letter) && !guessedLetters[i].includes(letter)) { // OR wordLetters[i] === letter
      correctGuess( i,letter );
    }
  }
  if (!wrongGuesses.includes(letter) && !wordLetters.includes(letter)){
    wrongGuesses.push(letter);
    console.log(`Wrong guess, ${ wrongGuesses } is not part of the word`);
    hangmanState = hangmanState - 1;
    console.log(`Hangman has ${ hangmanState } limbs left`);
    console.log(guessedLetters);
    checkLose();
  }
  else if (wordLetters.join('') === guessedLetters.join('')) {
    console.log('Congratulation, You found the whole word! You Won!')
    console.log(`You won $${ rewardAmount }`);
  };
};

//Trial Win guesses
// guessLetter('a');
// guessLetter('e');
// guessLetter('y');
// guessLetter('y');
// guessLetter('l');
// guessLetter('l');
// guessLetter('n');
// guessLetter('j');
// guessLetter('b');
// guessLetter('s');

// Trial Dead guesses
      /**** TRY in CONSOLE for live testing! ***/
// guessLetter('a');
// guessLetter('e');
// guessLetter('y');
// guessLetter('y');
// guessLetter('l');
// guessLetter('l');
// guessLetter('t');
// guessLetter('n');
// guessLetter('s');
// guessLetter('x');
// guessLetter('z');
// guessLetter('r');
// guessLetter('f');
// guessLetter('v');
//
// guessLetter('j');
// guessLetter('b');




// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
    /**** ALREADY initialised at the top */

/* - Every time a letter is guessed, generate a random amount and reward the
user if they found a letter (multiplying the reward if multiple letters found),
 otherwise subtract from their reward.*/
    /**** ALREADY added statement at the top correctGuess() */


// - When they guess the word, log their final reward amount.
    /**** DONE **/
//

// ## Bonus: Make it like Hangman:
/* - Keep track of all the guessed letters (right and wrong) and only let
the user guess a letter once. If they guess a letter twice, do nothing.*/
    /**** DONE ***/

/* - Keep track of the state of the hangman as a number (starting at 0),
and subtract or add to that number every time they make a wrong guess.*/
    /*** DONE ***/

/* - Once the number reaches 6 (a reasonable number of body parts for a
hangman), inform the user that they lost and show a hangman on the log.*/
