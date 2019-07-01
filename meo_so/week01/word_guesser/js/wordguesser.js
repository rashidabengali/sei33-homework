console.log('This is the Word Guesser, Please make a guess for the word');

let wordAns = ['F', 'O', 'O'];
let guessedLetter = ['_', '_', '_'];

const guessLetter = function (letter) {
    for (let i = 0; i < wordAns.length; i++) {
        if (wordAns[i] === letter) {
            guessedLetter[i] = letter;
            console.log(`Congratulations! you found a letter. The word is (${ guessedLetter }).`);
        };
    };
    console.log(wordAns, guessedLetter)
    if (wordAns.join() === guessedLetter.join()) {
        console.log(`WOW!! you found the word, it is ${ wordAns.join() }!`);
    } else {
        console.log('Please make another guess.');
    };
};



