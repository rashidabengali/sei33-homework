console.log('run');
/*
// version 1

const isIsogram = (word) => {

  word = word.toLowerCase();

  if (word.length === 0) {
    return true
  }

  for (let i = 0; i < word.length; i++) {
    for (var j = i+1; j < word.length; j++) {
      if (word[i] === word[j]) {
        console.log(`${word} is not an isogram`);
        return false
      }
    }
  }
  console.log(`${word} is an isogram`);
  return true
}

console.log(isIsogram("Dermatoglyphics")); //, true );
console.log(isIsogram("isogram")); //, true );
console.log(isIsogram("aba")); //, false, "same chars may not be adjacent" );
console.log(isIsogram("moOse")); //, false, "same chars may not be same case" );
console.log(isIsogram("isIsogram")); //, false );
console.log(isIsogram("") );//, true, "an empty string is a valid isogram" );
*/

// version 2
/*
const isIsogram = (word) => {

  if (word.length === 0) {
    return true
  }

  let array = word.toLowerCase().split("");

  let wordObject = array.reduce((letters, letter) => {
    if (letter in letters) {
      letters[letter] += 1
    } else {
      letters[letter] = 1
    }
    return letters
  }, {} )

  console.log(wordObject);

  // const count =
  return Object.values(wordObject).filter(value => value > 1).length === 0 ? true : false

  // console.log(count);
  //
  // if (count.length === 0) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
}

console.log(isIsogram("Dermatoglyphics")); //, true );
console.log(isIsogram("isogram")); //, true );
console.log(isIsogram("aba")); //, false, "same chars may not be adjacent" );
console.log(isIsogram("moOse")); //, false, "same chars may not be same case" );
console.log(isIsogram("isIsogram")); //, false );
console.log(isIsogram("") );//, true, "an empty string is a valid isogram" );
*/

// version 3

const isIsogram = (word) => {

  // let newWord = new Set (word.toLowerCase());

  // if (newWord.size === word.length) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }

  return new Set(word.toLowerCase()).size === word.length
}

console.log(isIsogram("Dermatoglyphics")); //, true );
console.log(isIsogram("isogram")); //, true );
console.log(isIsogram("aba")); //, false, "same chars may not be adjacent" );
console.log(isIsogram("moOse")); //, false, "same chars may not be same case" );
console.log(isIsogram("isIsogram")); //, false );
console.log(isIsogram("") );//, true, "an empty string is a valid isogram" );
