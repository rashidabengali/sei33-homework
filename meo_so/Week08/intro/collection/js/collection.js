console.log(_.VERSION);

// // const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// // const people = [
// //   { id: 1, username: "A", active: true,  age: 20 },
// //   { id: 2, username: "B", active: false, age: 35 },
// //   { id: 3, username: "C", active: false, age: 50 },
// //   { id: 4, username: "D", active: true,  age: 65 },
// //   { id: 5, username: "E", active: true,  age: 80 },
// //   { id: 6, username: "E", active: true,  age: 95 },
// // ];

// // Iterate through numbers and log each number to the console
// _(numbers).each(function(n) {
//   console.log(n);
// });
// // Iterate through numbers and multiply each one of them by 5
// _(numbers).each(function(n) {
//   console.log(n * 5);
// });
// // Iterate through numbers and reduce it by adding them together

// const add = function(a, b) {
//   return a + b;
// };
// const sum = _(numbers).reduce(add);
// console.log(sum);

// // Get an array of all of the people in people that have the username "E"

// // const eUsers = _(people).filter(function (person) {
// //     return person.username === "E"
// // })

// const eUsers = _(people).where({ username: "E" });
// console.log(eUsers);

// // Find the first object in people that has the id of 3

// const user3 = _(people).findWhere({ id: 3 });
// console.log(user3);

// // Find the first person who has an age of less than 50

// const youngPerson = _(people).find(function(person) {
//   return person.age < 50;
// });

// // Get an array of all of the people with an age of over 60

// const oldPeople = _(people).filter(function(person) {
//   return person.age >= 60;
// });

// // Remove all of the people with an age less than 40

// const adults = _(people).reject(function(person) {
//   return person.age < 40;
// });

// const sum =  _(numbers).reduce(function (runningTotal, n) {
//     return runningTotal + n;
// })
// console.log(sum)

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var people = [
  { id: 1, username: "A", active: true, age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true, age: 65, uid: 216 },
  { id: 5, username: "E", active: true, age: 80, uid: 18 },
  { id: 6, username: "E", active: true, age: 95, uid: 1000 }
];

var words = [
  "attoparsec",
  "batch",
  "Cinderalla Book",
  "Dr. Fred Mbogo",
  "eat flaming death",
  "fandango on core",
  "Foonly",
  "goat file",
  "Halloween Documents",
  "I see no X here",
  "Imminent Death Of The Net Predicted!",
  "jibble",
  "kilogoogle",
  "larval stage",
  "maximum Maytag mode",
  "nybble",
  "octal forty",
  "pico-",
  "quantum bogodynamics",
  "rubber-hose cryptanalysis",
  "sigmonster",
  "tail recursion",
  "unswizzle",
  "VAXen",
  "webmaster",
  "XEROX PARC",
  "yak shaving",
  "Zero-One-Infinity Rule"
]; // Random words from here... http://www.catb.org/jargon/html/go01.html

// Exercises
// Sort the people by 'uid'
console.table(_(people).sortBy("uid"));

// Group the random words by the lower case version of their first letter
const groupWords = _(words).groupBy(function(w) {
  return w[0].toLowerCase();
});
console.log(groupWords);

// Check to see if all the words have more than 3 characters
const allLongwords = _(words).every(function() {
  return w.length > 3;
});
console.log(allLongwords);

// Check if some words are over twenty characters long
const over20 = function(w) {
  return w.length > 20;
};
const someHugeWords = _(words).some(over20);
console.log(someHugeWords);

// Get an array of all of the uids in people
const uids = _(people).pluck("uid");
console.log(uids);

// Find the person with the highest uid
const highestUID = _(people).max("uid");
console.log(highestUID);

// Return an object that says how many even numbers and how many odd numbers there are in numbers
const oddOrEven = function(n) {
  return n % 2 === 0 ? "Even" : "Odd";
};
console.log(_(numbers).groupBy(oddOrEven));

// Get three random numbers out of numbers
console.log(_(numbers).sample(3));

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
const uniques = _.unique(
  _.flatten([1, 25, 100], [1, 14, 25], 25, Infinity, -0)
);
console.log(uniques);
// Find the index of the first element in numbers that is over 7 and is even
const firstIndex = _(numbers).find(function(n) {
  return n > 7 && n % 2 === 0;
});
console.log(firstIndex);

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
_.object(arrToTransform[0], arrToTransform[1]);
