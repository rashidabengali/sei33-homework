console.log("This is the second part of homework!");

// ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', 
// except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```

const DrEvil = function (num) {
    if (num === 1000000) {
        console.log(num + " dollars (pinky)");
    } else {
        console.log(num + " dollars");
    };
};

DrEvil(10);
DrEvil(1000000);


// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the
// two strings (separated by a space) slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
const MixUp = function (stringA, stringB) {
    const firstWord = stringB.substring(0,2) + stringA.substring(2);
    const secondWord = stringA.substring(0,2) + stringB.substring(2);
    const answer = firstWord + " " +secondWord;
    console.log(firstWord + " " +secondWord);
    return answer;
};

MixUp('dog', 'dinner');

// ## FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a 
// version where all occurences of its first character have been replaced with '*', except for the first 
// character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

const fixStart = function(string) {
    let newWord = string[0];
    for (let i = 1; i < string.length; i++) {
        if (string[i] === string[0]) {
            newWord = newWord + "*";
        } else {
            newWord = newWord + string[i];
        };
    };
    console.log(newWord);
    return newWord;
}

fixStart('bubble');

// ## Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3,
// it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing = function (string) {
    let newWord = string;
    if (string.length >= 3) {
        if (string.slice(string.length-3) === "ing") {
            newWord = newWord + "ly";
        } else {
            newWord = newWord + "ing";
        };
    };
    console.log(newWord); 
    return newWord
}
verbing('swimming');
verbing('skin');
verbing('hi');

// ## Not Bad

// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' 
// and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```

const notBad = function (string) {
    const indexNot = string.indexOf("not");
    const indexBad = string.indexOf("bad");
    if (indexNot > 1 && indexBad > 1 && indexBad > indexNot) {
        let newWord = string.replace(string.substring(indexNot, indexBad + 3), "good");
        console.log(newWord);
        return newWord;
    } else {
        console.log(string);
        return string;
    };
};

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
