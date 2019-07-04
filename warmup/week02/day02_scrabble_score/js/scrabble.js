console.log('run');

// Version 1 (this way)
/*
const scrabbleScore = {
  letterValues: {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T" ],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
  },

  wordScore: function (word) {
    word = word.toUpperCase();
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      for (let score in this.letterValues) {
        if (this.letterValues[score].includes(word[i])) {
          sum += Number(score);
        }
      }
    }
    return sum;
  }
};

console.log(scrabbleScore.wordScore("cAbbAge"));
*/

/*
const letterValues = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T" ],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]
};

const letterScore = function (letter) {
  let points = 0;
  for (let score in letterValues) {
    if (letterValues[score].indexOf(letter) > -1) {
      points += Number(score);
    }
  }
  return points;
}

const scrabbleScore = function (word) {
  word = word.toUpperCase();
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += letterScore(word[i]);
  }
  return sum;
}

console.log(scrabbleScore("cAbbAge"));

*/

//Version 3
/*
const scrabbleScore = {
  letterValues: {
      'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1,
      'u' : 1, 'l' : 1, 'n' : 1, 'r' : 1,
      's' : 1, 't' : 1, 'd' : 2, 'g' : 2,
      'b' : 3, 'c' : 3, 'm' : 3, 'p' : 3,
      'f' : 4, 'h' : 4, 'v' : 4, 'w' : 4,
      'y' : 4, 'k' : 5, 'j' : 8, 'x' : 8,
      'q' : 10, 'z' : 10
    },

  wordScore: function (word) {
    word = word.toLowerCase();
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      sum += this.letterValues[word[i]];
    }
    return sum;
  }
};

console.log(scrabbleScore.wordScore("cabbage"));
*/

letterValues = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T" ],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]
  };

  const invert = function (input) {

    let invertedObject = {};

    for (let keys in input) {
      console.log('keys', keys);
      console.log('values', input[keys]);
      invertedObject[input[keys]] = keys
      console.log('invertedObject', invertedObject);
    }
    //return invertedObject;
  };

  invert(letterValues);
