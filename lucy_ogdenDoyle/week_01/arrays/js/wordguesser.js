// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).


// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.


// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
let word = ['F','O','X'];
let guessed = ['_','_','_'];
let correctGuess = 0;
let winnings = 0;

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
function guessLetter (guess) {
  // Iterate through the word letters and see if the guessed letter is in there.

for (var i = 0; i < word.length; i++) {
  if (guessed[i] === guess) {
    console.log(`Sorry, you've already tried that letter. Try again`);
    return;
  }
}
  for (var i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      //correct guess
      // If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
      guessed[i] = word[i];
      // It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
      correctGuess++;
      console.log(correctGuess);
      if (correctGuess === word.length) {
        console.log(`Congratulations! ${guess} is correct! You Won! The word is: ${guessed.join(" ")} and you have won $${winnings}!!!`);
      }
      else {
        let amount = reward();
        winnings += amount;
        console.log(`Congratulations! ${guess} is correct! The current word is: ${guessed.join(" ")}, and you gained $${amount}`);
      }
      return;
      }
      else {
        //incorrect guess
      }

    }


  // When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
  let amount = reward();
  winnings -= amount;
  console.log(`Sorry, try again. You have lost $${amount} this round.`);

}

function reward () {
  let amount = Math.random()*1000;
  amount = Math.round(amount);
  console.log(amount);
  return amount;
}
