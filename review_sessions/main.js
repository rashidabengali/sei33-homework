const mixMatch = function (mix, match) {
  if (mix.length > 2 && match.length > 2) {
    const mixMatch1 = match.substring(0,2) + mix.substring(2);
    const mixMatch2 = mix.substring(0,2) + match.substring(2);
    const result = `${mix} ${match} results to ${mixMatch1} ${mixMatch2}`;
    console.log(result);
  } else {
    console.log(`${mix} ${match} results to ${mix} ${match}`);
  }
};

mixMatch('mix', 'pad');


const fixStart = function (word) {
  let editedWord = word[0];
  for (let i = 1; i < word.length; i++) {
      if (word[i]===word[0]) {
        editedWord += '*';
      } else {
        editedWord += word[i]
      }
  }
  console.log('word', editedWord);
};

fixStart('babble');


const verbing = function (verb) {

  if (verb.length > 2) {
    if (verb.endsWith("ing")) {
      verb += "ly"
    } else {
      verb += "ing";
    }
  }
    console.log(verb);
}

verbing( 'swim' );
verbing( 'swiming' );


const notBad = function (sentence) {
  if (sentence.includes('not') && sentence.includes('bad')) {
    const notIndex = sentence.indexOf('not');
    const badIndex = sentence.indexOf('bad');
    if (badIndex > notIndex) {
      const beforeNot = sentence.substring(0,notIndex);
      //console.log('beforeNot', beforeNot);
      const afterBad = sentence.substring(badIndex+3, sentence.length);
      //console.log('afterBad', afterBad);
      const finalSentence = beforeNot + "good" + afterBad;
      console.log('finalSentence', finalSentence);
    }
  } else {
    console.log(sentence);
  }
}

notBad('The dinner is not that bad actually.');


// WORD GAME

const playWord = ['L','E','A','T','H','E','R'];

const guessWord = ['_','_','_','_','_','_','_'];

let maxWrongGuess = 6;

const guessedLetterList = [];


const guessLetter = function (letter) {

    if (guessedLetterList.includes(letter)) {
      console.log('Repeated letter:', letter);
      return;
    }

    guessedLetterList.push(letter);

    let correctGuess=false;

    for (let w=0; w<playWord.length; w++) {
        if (playWord[w]===letter) {
          correctGuess=true;
          guessWord[w]=playWord[w];
          console.log("Bravo! You have found a new letter");
          console.log(guessWord);
        }
    }
    if (correctGuess===false) {
      maxWrongGuess--;
      console.log("Sorry, wrong guess.");
      console.log(guessWord);
    }

    if (maxWrongGuess===0) {
      console.log("Badluck, you have lost this game.");
      console.log(guessWord);
      alert ("Badluck, you have lost this game.");
    }

    if (!guessWord.includes('_')) {
      console.log("Congratulations! You have won this game.");
      console.log(guessWord);
      alert ("Congratulations!You have won this game.");
    }

    return guessWord;

};

console.log(guessLetter('E'));
console.log(guessLetter('R'));
console.log(guessLetter('F'));
console.log(guessLetter('C'));
console.log(guessLetter('L'));
console.log(guessLetter('T'));
console.log(guessLetter('H'));
console.log(guessLetter('E'));
console.log(guessLetter('B'));
console.log(guessLetter('W'));
console.log(guessLetter('X'));
console.log(guessLetter('Y'));
