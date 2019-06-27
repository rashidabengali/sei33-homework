// Create a function called DrEvil. It should take a single argument, an amount, 
// and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million.
const DrEvil = function(amount){
    const result = amount + " dollars " + ((amount === 1000000)?"(pinky)":"");
    console.log(result);
}
DrEvil(43);
DrEvil(1000000);

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) 
// slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long
const mixUp = function(str1, str2){
    const result = str2.slice(0,2) + str1.slice(2) + " " + str1.slice(0,2) + str2.slice(2);
    console.log("mixUp: " + result);
    return result;
}
mixUp('mix', 'pod');

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its 
// first character have been replaced with '*', except for the first character itself. 
// You can assume that the string is at least one character long
// fixStart('babble'): 'ba**le'
const fixStart = function(word){
    // select first charactor
    const firstChar = word.slice(0,1);
    // [a, b, b, l, e]
    const replaceString = word.substring(1, word.length).split(firstChar).join("*");
    const result = firstChar+replaceString;
    console.log("fixStart: " + result);
    return result;
}
fixStart('babble');
//fixStart('ettReeWqqeeg');

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, 
// it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. 
// If the string length is less than 3, it should leave it unchanged. 
const verbing = function(word){
    if (word.length < 3){
        console.log("verbing: " + word);
        return word;
    }
    
    let result = "";
    if (word.slice(-3)==="ing"){
        result = word + "ly";
    }else{
        result = word + "ing";
    }
    
    console.log("verbing: " + result);
    return result;
}
verbing("go");
verbing("swim");
verbing("swiming");

// Create a function called notBad that takes a single argument, a string.
//     It should find the first appearance of the substring 'not' and 'bad'.
//     If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//     If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
const notBad = function(sentence){
    const indexNot = sentence.indexOf("not");
    const indexBad = sentence.indexOf("bad");
    let result = sentence;

    if (indexBad > 0 && indexNot > 0){
        if (indexBad > indexNot){
            result = sentence.substring(0, indexNot-1) + " good" + sentence.substring(indexBad+3, sentence.length);
        }
    }
    console.log("notBad: " + result);
}
notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
