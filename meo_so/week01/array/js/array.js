console.log('This is the answer of Arrays');

// 1. Define a function `maxOfTwoNumbers` that takes two
// numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
// You'll have to remember your pre-work, or do some 
// googling to figure this out.

const maxOfTwoNumbers = function (num1 , num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    };
};

console.log(maxOfTwoNumbers(4, 9)); //9
console.log(maxOfTwoNumbers(10, -2)); //10

// 2. Define a function `maxOfThree` that takes three numbers 
//as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    };
};

console.log(maxOfThree(3,7,9)); //9
console.log(maxOfThree(0,59,29)); //59
console.log(maxOfThree(90,-2,0)); //90

// 3. Write a function that takes a character (i.e. a 
// string of length 1) and returns true if it is a vowel,
// false otherwise.

const checkVowel = function (char) {
    let vowels = ['a','e','i','o','u'];
    if (vowels.includes(char)) {
        return true;
    } else {
        return false;
    };
};

console.log(checkVowel('a')); //true
console.log(checkVowel('w')); //false

// 4. Define a function `sumArray` and a function 
// `multiplyArray` that sums and multiplies (respectively) 
// all the numbers in an array of numbers. For example, 
// `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (array) {
    let sumOfArray = 0;
    for (let i = 0; i < array.length; i++) {
        sumOfArray += array[i];
    };
    return sumOfArray;
};

const multiplyArray = function (array) {
    let productOfArray = 1;
    for (let i = 0; i < array.length; i++) {
        productOfArray *= array[i];
    };
    return productOfArray;
};

arraySample = [1, 2, 3, 4];
console.log(`Answer of sumArray is ${ sumArray(arraySample) }.`);  //10
console.log(`Answer of multiplyArray is ${ multiplyArray(arraySample) }.`)  //24

// 5. Define a function `reverseString` that computes the reversal of a string. For example, 
// reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (string) {
    let newWord = '';
    for (let i = string.length-1; i >=0; i--) {
        newWord += string[i];
    };
    return newWord;
};

testString = 'jag testar';
console.log(`Reverse String of "${ testString }" is "${ reverseString(testString) }".`); //"ratset gaj"

// 6. Write a function `findLongestWord` that takes an array of words and returns the 
// length of the longest one.

const findLongestWord = function (array) {
    let longestLength = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestLength) {
            longestLength = array[i].length;
        };
    };
    return longestLength;
}
arrayLongWord = ['long', 'longer', 'longest', 'notlong', 'longeest', 'longeester'];
console.log(`Longest word in the array is ${ findLongestWord(arrayLongWord)} characters long.`) //10


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and 
// returns the array of words that are longer than i.

const filterLongWords = function (array, num) {
    newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > num) {
            newArray.push(array[i]);
        };
    };
    return newArray;
}

arrayWords = ['subway', 'maccas', 'kfc', 'finedining', 'longrestaurantname'];
console.log(`The strings with more than 6 characters are: ${ filterLongWords(arrayWords, 6)}.`); //'finedining', 'longrestaurantname'
