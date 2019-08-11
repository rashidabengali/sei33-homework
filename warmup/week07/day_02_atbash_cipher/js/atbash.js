console.log('run');

const atbash = {
  alphabet: "abcdefghijklmnopqrstuvwxyz".split(""),

  encode: function (input) {

    output = "";

    for (let i = 0; i < input.length; i++) {
      const findIndex = this.alphabet.indexOf(input[i]);
      //console.log(findIndex);
      output += this.alphabet.reverse()[findIndex];
    }
    console.log(output);
  }
}

atbash.encode("test");


/*
// Ludovico's Solution

function encode ( msg ) {
 const alphabet = "abcdefghijklmnopqrstuvwxyz";
 const cipher = "zyxwvutsrqponmlkjihgfedcba";
 let encoded_string = "";
 for (i = 0; i < msg.length; i++) {
   let letter = msg.charAt(i);
   let letter_index = alphabet.indexOf(letter);
   let encoded_letter = cipher.charAt(letter_index);
   encoded_string += encoded_letter;
 }
 return encoded_string;
}
// console.log("abc");
console.log(encode("gvhg"));


// Victor's Solution

alphabet = 'abcdefghijklmnopqrstuvwxyz';

const cipherWord = function (word) {
  cipher = '';
  word.split('').forEach(function (letter) {
    letterIndex = alphabet.indexOf(letter);
    cipherAlphabet = alphabet.split('').reverse();
    cipher += cipherAlphabet[letterIndex];
  });
  console.log(cipher);
};

cipherWord('test');


// Graham's Solution

const atbash = {
 alphabet: "abcdefghijklmnopqrstuvwxyz".split(""),
 backwardsAlphabet: "zyxwvutsrqponmlkjihgfedcba".split(""),
 substitutions: function () {
   const backwardsAlphabet = this.backwardsAlphabet
   let substituions = this.alphabet.map(function(char, i) {
     return [char, backwardsAlphabet[i]]
   });
   substituions = Object.fromEntries(substituions)
   return substituions
 },
 cipher: function (word) {
   const substituions = this.substitutions()
   cipher = ""
   word.split("").forEach(function (char) {
     cipher += substituions[char]
   })
   return cipher
 },
}
console.log(atbash.cipher("test"))
console.log(atbash.cipher("gvhg"))
*/
