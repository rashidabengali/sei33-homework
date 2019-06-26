// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then -else construct available in Javascript.
// You'll have to remember your pre-work, or do some googling to figure this out.

function maxOfTwoNumbers(first, second) {
    if (first > second) {
        return first;
    } else {
        return second;
    }
}
console.log(maxOfTwoNumbers(1, 2));
console.log(maxOfTwoNumbers(4, 3));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}
console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(6, 5, 2));

// Write a function that takes a character 
// (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function vowel(n) {
    if (n === "a" || n === "e" || n === "i" || n === "o" || n === "u") {
        return true;
    } else {
        return false;
    }
}
console.log(vowel("n"));
console.log(vowel("a"));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) 
// all the numbers in an array of numbers. 
// For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

function sumArray(numbers) {
    // function reducer(accumulator, currentValue) {
    //     return accumulator + currentValue;
    // }
    // return numbers.reduce(reducer);
    let first = 0;

    for (let index = 0; index < numbers.length; index++) {
        first = first + numbers[index];

    }

    return first;

}

function multiplyArray(numbers) {
    let first = 0;

    for (let index = 0; index < numbers.length; index++) {
        if (index === 0) {
            first = numbers[index];
        } else {
            first = first * numbers[index];
        }
    }
    return first;

}
console.log(sumArray([1, 2, 3, 4])); // return 10 
console.log(multiplyArray([1, 2, 3, 4])); // return 24

// Define a function reverseString that computes the reversal of a string. For example, 
// reverseString("jag testar") should return the string "ratset gaj".

function reverseString(reversal) {
    let word = reversal.split(''); // [o,l,a]
    word = word.reverse(); // [a,l,o]
    word = word.join(''); // alo

    return word;
}
console.log(reverseString("ola")); //alo


// Write a function findLongestWord that takes an array of words and returns the 
// length of the longest one.

function findLongestWord(words) {
    let longest = 0;
    for (let index = 0; index < words.length; index++) {
        if (words[index].length > longest) {
            longest = words[index].length;
        }
    }
    return longest;
}

console.log(findLongestWord(['hi', 'hello']));

// Write a function filterLongWords that takes an array of words 
// and an number i and returns the array of words that are longer than i.

function filterLongWords(words, i) {
    let longest = [];
    for (let index = 0; index < words.length; index++) {
        if (words[index].length > i) {
            longest.push(words[index]);
        }
    }
    return longest;
}
console.log(filterLongWords(['hi', 'hello'], 3));
