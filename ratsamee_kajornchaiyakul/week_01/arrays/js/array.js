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

// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word 
// (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), 
// and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
const arrLetters = ['F', 'O', 'X'];
const arrGuessLetters = [];
let rewards = 0;

// initial value (empty) to array guess letter
for (let index = 0; index < arrLetters.length; index++) {
    arrGuessLetters[index] = "";
}

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user 
// if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.
const getRewards = function(isAddReward){
    if (isAddReward){
        rewards += (rewards < 1? 1: rewards) * arrGuessLetters.join("").length;
    }else{
        rewards = rewards - 1;
    }
}

// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
const guessLetter = function(letter){
    // search guess letter in array letter
    const indexOfLetter = arrLetters.findIndex((x)=>{
        return x === letter.toUpperCase(); 
    });

    // the guess letter exist in array letters
    if (indexOfLetter > -1){
        // insert the guess letters into array guess letter
        arrGuessLetters[indexOfLetter] = letter.toUpperCase();
        // check guess letter
        let result = arrGuessLetters.join("");

        if (result.length === arrLetters.length){
            // guess letters and answer are match
            console.log("You are winner!!!");
        }else{
            // clear result data, get answer from array guess to display on console
            result = "";
            for (let i = 0; i < arrGuessLetters.length; i++) {
                result = result + (arrGuessLetters[i]===""? "_ ": arrGuessLetters[i]);
            }
            console.log(`Congratulation! you found a new letter: ${ letter.toUpperCase() }`);
            console.log(`The result is ${result}`);
        }
    }

    //get rewards
    getRewards(indexOfLetter > -1);
    console.log(`Your reward is ${rewards}`);
}
guessLetter('R');
guessLetter('x');
guessLetter('b');
guessLetter('f');
guessLetter('g');
guessLetter('0');
guessLetter('o');



// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.