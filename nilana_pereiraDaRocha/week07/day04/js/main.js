var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var people = [
  { id: 1, username: "A", active: true, age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true, age: 65, uid: 216 },
  { id: 5, username: "E", active: true, age: 80, uid: 18 },
  { id: 6, username: "E", active: true, age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death",
  "fandango on core", "Foonly", "goat file", "Halloween Documents",
  "I see no X here", "Imminent Death Of The Net Predicted!", "jibble",
  "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty",
  "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster",
  "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving",
  "Zero-One-Infinity Rule"
];


// Sort the people by 'uid'

console.table(_(people).sortBy('uid'));

// let peopleUdi = _.sortBy(people, "uid");
// console.log(peopleUdi);


// Group the random words by the lower case version of their first letter
const groupRandom = _(words).groupBy(function (w) {
  return w[0].toLowerCase();
});
console.log(groupRandom);

// Check to see if all the words have more than 3 characters

const characters = _(words).every(function (w) { return w.lenght > 3; });
console.log(characters);

// Check if some words are over twenty characters long

let someWords = function (words) { return words.lenght > 20; };

const over20 = _(words).lenght
console.log(someWords);


// Get an array of all of the uids in people
const uids = _(people).pluck('uid');
console.log(uids);



// Find the person with the highest uid
const highestUid = _(people).max('uid');
console.log(highestUid);


// Return an object that says how many even numbers and how many 
// odd numbers there are in numbers
const numbersEvens = _.filter(numbers, function (num) { return num % 2 == 0; });
const numbersOdds = _.filter(numbers, function (num) { return num % 2 != 0; });
console.log(numbersEvens);
console.log(numbersOdds);

// Get three random numbers out of numbers

let numbersRandomOne = _.random(1, 10);
let numbersRandomTwo = _.random(2, 10);
let numbersRandomThree = _.random(3, 10);

console.log(numbersRandomOne);
console.log(numbersRandomTwo);
console.log(numbersRandomThree);

// okay

// Here is some data that you can work with.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = ["hello", false, NaN, undefined, "quantom bogo-sort"];

var arrToTransform = [["age", "location"], [NaN, undefined]];

// Create an array of every five numbers between 30 and 101
console.log(_.range(30, 101, 5));


// Turn bumpyArr into one flat array (no nested arrays)
console.log(_(bumpyArr).flatten());

// Remove all of the falsey elements in the uncompactedArr
console.log(_(uncompactedArr).compact());


// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0

const uniques = _.unique(_.flatten[1, 25, 100], [1, 14, 25][24, Infinity, -0]);
console.log(uniques);
// Find the index of the first element in numbers that is over 7 and is even
const firstIndex = _(numbers).findIndex(function (n) {
  return (n > 7) && (n % 2 === 0);
});
console.log(firstIndex)
// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }



