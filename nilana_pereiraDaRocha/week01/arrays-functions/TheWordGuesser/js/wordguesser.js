
// // // When it's done iterating, it should log the current guessed letters ('F__') and congratulate the 
// // user if they found a new letter.
// // // It should also figure out if there are any more letters that need to be guessed, and if not, it should 
// // congratulate the user for winning the game.
// // // Pretend you don't know the word, and call guessLetter multiple times with various letters to 
// // check that your program works.

let wordLetter = ['F', 'O', 'X'];
let guessedLetters = ['_', '_', '_'];
let maxGuess = 7;
let correctGuess;
let guessedLetters = [];

const wordGame = function (letter) {
    correctGuess = false;
    if (guessedLetters.includes(letter)) {
        console.log('you have already guessed this letter');

    }
}

// function guessLetter(letter) {
//     for (let i = 0; i < wordLetter.length; i++) {
//         if (wordLetter[i] === letter) {
//             guessedLetters[i] === letter
//         } else {
//             return
//         }

//     };

// console.log(wordLetter());
// console.log(guessedLetters());

