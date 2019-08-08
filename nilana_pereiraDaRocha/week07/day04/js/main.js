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
let peopleUdi = _.sortBy(people, "uid");
console.log(peopleUdi);

// okay

// Group the random words by the lower case version of their first letter
let groupRandom = _.groupBy(words, "lowerCase");
console.log(groupRandom);




// Check to see if all the words have more than 3 characters

let characters = _.every(words, function () { return words > 3; });
console.log(characters);

// okay

// Check if some words are over twenty characters long

let someWords = _.some(words, function () { return words > 20; });
console.log(someWords);

// okay

// Get an array of all of the uids in people





// Find the person with the highest uid
const highestUid = _.max(people, function (person) { return person.uid; });
console.log(highestUid);


// Return an object that says how many even numbers and how many 
// odd numbers there are in numbers
let numbersEvens = _.filter(numbers, function (num) { return num % 2 == 0; });
let numbersOdds = _.filter(numbers, function (num) { return num % 2 != 0; });
console.log(numbersEvens);
console.log(numbersOdds);

// okay

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


// Turn bumpyArr into one flat array (no nested arrays)

// Remove all of the falsey elements in the uncompactedArr
var filtered = _.filter(uncompactedArr, function (element) {
  return element !== 0
});
console.log(filtered);


// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0

// Find the index of the first element in numbers that is over 7 and is even

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }



