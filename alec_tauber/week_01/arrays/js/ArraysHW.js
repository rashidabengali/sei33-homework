console.log("Horray This Javascript works!")

// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function max() that takes two numbers as
// arguments and returns the largest of them. Use the
// if-then-else construct available in Javascript.
// https://jsfiddle.net/ryjtyomv/

const maxOfTwoNumbers =  function(firstNum, secondNum){

    if (firstNum > secondNum) {
       console.log(firstNum + " is larger than " + secondNum);
    } else {
        console.log(firstNum + " is less than " + secondNum);
    }
    return;

}

// Lets set two numbers
maxOfTwoNumbers(142,234);


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3) {
        return Math.max (num1, num2, num3); // Using Math.max returns the  largest of zero or more numbers. essentially the lazy way of creating a function
    }

    console.log (maxOfThree (15,124,55));




// // 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Write a function that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.

const isVowel = function(argument){

	var text;
	var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue; // Jumps over one iteration loop
        }
        return true;
    }
    return false;
}

// See if "A" is a vowel
var char = "A";
if (isVowel(char)) {
	console.log(char + " is a vowel");
} else {
	console.log(char + " is not a vowel");
}


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.


var array1 = [1,2,3,4]
var array2 = [10,11,12,13]
var array3 = [15,16,17,18]

const sumArray = function(array) {
var sum = 0
 for (var i = 0; i < array.length; i++) {
   sum += array [i];   // sum = sum + array[i]
 }
 return sum;
}

sumArray(array3);


const multiplyArray = function (array) {
var multiply = 1
for (var i = 0; i < array.length; i++) {
 multiply *= array [i];
}
return multiply;
}

multiplyArray(array1);


//
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".


function reverse(str) {
    var text = '';

    for (var i = str.length - 1; i >= 0; i--) {
    	text += str[i];
    	continue
    }
    return text.toLowerCase();
}
console.log(reverse("Kosal"));






// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.








// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.


const findLongestWord = function(input, i) {
  longerI = []
  for (j=0; j<input.length-1; j++) {
    if (input[j].length>i) {
      longerI.push(input[j]);
    }
  }
  return longerI
}

console.log(findLongestWord(['hello','lol', 'deaths', 'Bob'], 5));






//
//
// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
//
//


var wordLetters = ['C', 'A', 'T', 'S'];
var guessedLetters = ['_', '_', '_', '_'];

const guessLetter = function(letter){ //

}
// var wordLetters     = ['G', 'O', 'A', 'T'];
// var guessedLetters  = ['_', '_', '_', '_'];
//
// function guessLetter(letter) {
//     var goodGuess = false;
//     var moreToGuess = false;
//     for (var i = 0; i < wordLetters.length; i++) {
//         if (wordLetters[i] == letter) {
//             guessedLetters[i] = letter;
//             goodGuess = true;
//         }
//         if (guessedLetters[i] == '_') {
//             moreToGuess = true;
//         }
//     }
//     if (goodGuess) {
//         console.log('Yay, you found a letter!');
//         console.log(guessedLetters.join(''));
//         if (!moreToGuess) {
//             console.log('YOU WON!');
//         }
//     } else {
//         console.log('Oh noes, thats not right!');
//     }
// }
//
// guessLetter('G');
// guessLetter('I');
// guessLetter('O');
// guessLetter('A');
// guessLetter('T');
//
//
//





























// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.
//
// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
