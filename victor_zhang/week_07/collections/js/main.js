// # Collections!

// Log out the answers to all of the following questions!

// Here is some data that you can work with. 

// ```js
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

const words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
]; // Random words from here... http://www.catb.org/jargon/html/go01.html
// ```

// ## Exercises

// - Sort the ` people ` by 'uid'
const uidSorted = _(people).sortBy('uid');
console.log(uidSorted);

// - Group the random words by the lower case version of their first letter
// const lowerCase = _(words).groupBy('first.toLowerCase');
// console.log(lowerCase);

// - Check to see if all the words have more than 3 characters
const moreThanThree = _(words).every(function (word) {
    return word.length > 3;
});
console.log(moreThanThree);
// - Check if some words are over twenty characters long
const overTwenty = _(words).some(function (word) {
    return word.length > 20;
});
console.log(overTwenty);

// - Get an array of all of the uids in ` people `
const peopleUids = _(people).pluck('uid');
console.log(peopleUids);

// - Find the person with the highest uid
const highestUid = _(people).max('uid');
console.log(highestUid);

// - Return an object that says how many even numbers and how many odd numbers there are in ` numbers `
const evenOdd = _(numbers).countBy(function (num) {
    return num % 2 === 0 ? 'even' : 'odd';
})
console.log(evenOdd);

// - Get three random numbers out of ` numbers `
const random = _(numbers).sample(3);
console.log(random);

// ## Remember!

// // You have the [documentation!](https://underscorejs.org/)