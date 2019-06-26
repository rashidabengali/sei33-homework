/*

Create a function called DrEvil. It should take a single argument, an amount,
and return ' dollars',
except it will add '(pinky)' at the end if the amount is 1 million. For example:
DrEvil(10): 10 dollars
DrEvil(1000000): 1000000 dollars (pinky)
*/

const drEvil = function (amount) {

  let message = amount + " dollars";
  if(amount === 1000000) {
    return message + " (pinky)";
  }
  return message;
}

// test DrEvil
console.log("Test drEvil function:");
console.log(`drEvil(10): ${drEvil(10)}`);
console.log(`drEvil(1000000) : ${drEvil(1000000)}`);

/*
Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out and
swapping the first 2 characters of each.
You can assume that the strings are at least 2 characters long. For example:
mixUp('mix', 'pod'): 'pox mid'
mixUp('dog', 'dinner'): 'dig donner'
*/

const mixUp = function (str1, str2) {

  let word_1 = str2.substring(0,2) + str1.substring(2,str1.length);
  let word_2 = str1.substring(0,2) + str2.substring(2,str2.length);
  return word_1 + " " + word_2;

}

// test mixUp
console.log("Test mixUp function:");
console.log("mixUp(`mix`,`pod`): " + mixUp(`mix`,`pod`) );
console.log("mixUp(`dog`,`dinner`): " + mixUp(`dog`,`dinner`) );


/*
Create a function called fixStart. It should take a single argument, a string, and
return a version where all occurences of its first character have been replaced with '*',
except for the first character itself.
You can assume that the string is at least one character long. For example:
fixStart('babble'): 'ba**le'
*/

const fixStart = function (str) {

  let firstLetter = str.charAt(0);
  let word = str.substring(1,str.length);
  let strReg = new RegExp(firstLetter,'g');
  return firstLetter + word.replace(strReg,`*`);

}

// test fixStart
console.log("Test fixStart function:");
console.log("fixStart(`babble`): " + fixStart(`babble`));


/*
Create a function called verbing. It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged. For example:
verbing('swim'): 'swimming'
verbing('swimming'): 'swimmingly'
verbing('go'): 'go'
*/

const verbing = function (str) {

  if(str.length < 3) {
    return str;
  }

  const ends = str.substring(str.length-3,str.length);

  if(ends === "ing") {
    return str + "ly";
  } else {
    return str + "ing";
  }

}

// test verbing

console.log("Test verbing function:");
console.log("verbing('swimm'): " + verbing(`swimm`));
console.log("verbing(`swimming`): " + verbing(`swimming`));
console.log("verbing(`go`): " + verbing(`go`));


/*

Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not',
then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all),
just return the original sentence.
For example:
notBad('This dinner is not that bad!'): 'This dinner is good!'
notBad('This movie is not so bad!'): 'This movie is good!'
notBad('This dinner is bad!'): 'This dinner is bad!'
*/

const notBad = function (str) {

  const searchTerm_1 = "not";
  const searchTerm_2 = "bad";
  const indexOfFirst_1 = str.indexOf(searchTerm_1);
  const indexOfFirst_2 = str.indexOf(searchTerm_2);

  if(indexOfFirst_1 === -1 || indexOfFirst_2 === -1){
    return str;
  }

  const word = str.substring(indexOfFirst_1,indexOfFirst_2+3);
  const sentence = str.replace(word,"good");
  return sentence;
}

//test notBad
console.log("Test notBad function:");
console.log("notBad('This dinner is not that bad!'): " + notBad(`This dinner is not that bad!`));
console.log("notBad('This movie is not so bad!'): " + notBad(`This movie is not so bad!`));
console.log("notBad('This dinner is bad!'): " + notBad(`This dinner is bad!`));
