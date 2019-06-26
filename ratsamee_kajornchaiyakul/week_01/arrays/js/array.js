// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function(num1, num2){
    const largest = num1;
    if (num1<num2){
        largest = num2;
    }
    return largest;
}
console.log(`maxOfTwoNumbers(3,1): ${maxOfTwoNumbers(3,1)}`);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function(num1, num2, num3){
    const arrNumber = [num1, num2, num3];
    let largest = arrNumber[0];
    let element = "";
    for (let index = 1; index < arrNumber.length; index++) {
        element = arrNumber[index];
        if (largest < element){
            largest = element;
        }
    }
    return largest;
}
console.log(`maxOfThree(10,3,50): ${maxOfThree(10,3,50)}`);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const findVowel = function(strCharacter){
    const arrayVowel = ['A', 'E', 'I', 'O','U', 'a', 'e', 'i', 'o', 'u'];
    const indexOfVowel = arrayVowel.findIndex((c)=>{
        return c === strCharacter;
    })
    return indexOfVowel !== -1;
}
console.log(`findVowel('R'): ${findVowel('R')}`);
console.log(`findVowel('a'): ${findVowel('a')}`);

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) 
// all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and 
// `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function(array){
    if (!array){
        return 0;
    }
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
console.log(`sumArray([1,2,3,4]) should return 10: ${sumArray([1,2,3,4])}`);

const multiplyArray = function(array){
    if (!array){
        return 0;
    }
    let total = 1;
    for (let i = 0; i < array.length; i++) {
        total = total * array[i];
    }
    return total;
}
console.log(`multiplyArray([1,2,3,4]) should return 24: ${multiplyArray([1,2,3,4])}`);
// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, 
// reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function(str){
    let reverse  = "";
    const arrayWord = str.split("");
    for (let index = arrayWord.length-1; index >=0; index--) {
        reverse += arrayWord[index];
    }
    return reverse;
}
console.log(`reverseString("jag testar") should return "ratset gaj": ${reverseString("jag testar")}`);

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function(arrayWord){
    let longest = arrayWord[0].length;
    let word = "";
    for (let index = 1; index < arrayWord.length; index++) {
        word = arrayWord[index];
        if (word.length>longest){
            longest = word.length;
        }
    }
    return longest;
}
console.log(`findLongestWord(["watch", "ipad", "ipod", "apple", "iphone"]) should return 6: ${findLongestWord(["watch", "ipad", "ipod", "apple", "iphone"])}`);

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and 
// returns the array of words that are longer than i.
const filterLongWords = function(arrayWord, i){
    const result =[]
    const filterWordLength = arrayWord[i].length;
    for (let index = 0; index < arrayWord.length; index++) {
        if (index !== i && arrayWord[index].length > filterWordLength){
            result.push(arrayWord[index]);
        }
    }
    return result;
}
const result = filterLongWords(["watch", "ipad", "ipod", "apple", "iphone"], 1);
result.forEach(element => {
    console.log(element);
});
