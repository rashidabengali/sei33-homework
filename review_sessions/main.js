console.log('run');
// const mixMatch = function (mix, match) {
//   if (mix.length > 2 && match.length > 2) {
//     const mixMatch1 = match.substring(0,2) + mix.substring(2);
//     const mixMatch2 = mix.substring(0,2) + match.substring(2);
//     const result = `${mix} ${match} results to ${mixMatch1} ${mixMatch2}`;
//     console.log(result);
//   } else {
//     console.log(`${mix} ${match} results to ${mix} ${match}`);
//   }
// };
//
// mixMatch('mix', 'pad');

//
//
// const fixStart = function (word) {
//   let editedWord = word[0];
//   for (let i = 1; i < word.length; i++) {
//       if (word[i]===word[0]) {
//         editedWord += '*';
//       } else {
//         editedWord += word[i]
//       }
//   }
//   console.log(word, editedWord);
// };
//
// fixStart('babble');
//
//
// const verbing = function (verb) {
//
//   if (verb.length > 2) {
//     if (verb.endsWith("ing")) {
//       verb += "ly"
//     } else {
//       verb += "ing";
//     }
//   }
//     console.log(verb);
// }
//
// verbing( 'swim' );
// verbing( 'swiming' );
//
//
// const notBad = function (sentence) {
//   if (sentence.includes('not') && sentence.includes('bad')) {
//     const notIndex = sentence.indexOf('not');
//     const badIndex = sentence.indexOf('bad');
//     if (badIndex > notIndex) {
//       const beforeNot = sentence.substring(0,notIndex);
//       //console.log('beforeNot', beforeNot);
//       const afterBad = sentence.substring(badIndex+3, sentence.length);
//       //console.log('afterBad', afterBad);
//       const finalSentence = beforeNot + "good" + afterBad;
//       console.log('finalSentence:', finalSentence);
//     }
//   } else {
//     console.log(sentence);
//   }
// }
//
// notBad('The dinner is not that bad actually.');


//WORD GAME
/*
const guessLetter = function (letter) {

  letter = letter.toUpperCase();
  const playWord = ['L','E','A','T','H','E','R'];
  const guessWord = ['_','_','_','_','_','_','_'];
  let maxWrongGuess = 6;
  let guessedLetterList = [];

  if (guessedLetterList.includes(letter)) {
    console.log('Repeated letter:', letter);
  } else {
    guessedLetterList.push(letter);

    if (playWord.includes(letter)) {
      for (let w=0; w<playWord.length; w++) {
          if (playWord[w]===letter) {
            guessWord[w]=playWord[w];
          }
      }
      console.log("Bravo! You have found a new letter");
      console.log(guessWord);

      if (!guessWord.includes('_')) {
        console.log("Congratulations! You have won this game.");
        console.log(guessWord);
        alert ("Congratulations! You have won this game.");
        return;
      }
    } else {
      maxWrongGuess--;
      console.log("Sorry, wrong guess.");
      console.log(guessWord);
      if (maxWrongGuess<=0) {
        console.log("Badluck, you have lost this game.");
        console.log(guessWord);
        alert ("Badluck, you have lost this game.");
        return;
      }
    }
  }

  guessLetter(prompt('guess letter'));
};

guessLetter(prompt('guess letter'));
*/

// Credit Card Validation
/*
const sameDigits = function (input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[0]) {
      return false
    }
  }
  return true;
}

const sumOfDigits = function (input) {
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    total += parseInt(input[i]);
  }
  return total;
}

const allDigits = function (input) {
  return !isNaN(input);
}

const validateCreditCard = function (input) {
  while (input.includes('-')) {
    input = input.replace('-', '')
  }
  if (input.length === 16 && input[input.length-1] % 2 === 0 && sumOfDigits(input) > 16 && sameDigits(input) === false && allDigits(input) === true) {
    return `Card is valid.`
  }
  return `Card is invalid.`
}

console.log(validateCreditCard('9999-9999-8888-0000'));
console.log(validateCreditCard('a923-3211-9c01-1112'));
*/

/*
const winningRule = [ [0, 1, 2], [3, 4, 5], [6, 7 ,8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

//const played = ["o", "x", "o", "x", "o", "x", "o", "x", "o"]
              // 0    1    2    3    4    5    6    7    8
const played = ["x", "o", "x", "x", "o", "o", "x", "x", "o"];
//const played = ["x", "x", "o", "o", "o", "x", "x", "o", "x"];
played[this.attr(id)] = 'x'; player

played[this.attr(id)] = 'o'; player

     const findWinner = function (played, side) {
        let sum;
        let w;
        for(let i = 0; i < winningRule.length; i++) {
          w = winningRule[i];
          sum = 0;

          for(let b = 0; b < w.length; b++) {
            if(played[w[b]] === side) {
            console.log('sumbefore', sum);
              sum++
            }
            console.log('sumafter', sum);
            if(sum === 3) {
                console.log("winner", side);
                return;
              }
          }
        }
        console.log("draw");
        return;
      }

findWinner(played, 'x');
*/
/*
const array1 = ["one", "two", "three", "four"]

const reverseArray = function (array) {
  let reverse = [];
  // for (let i = array.length-1; i >= 0; i--) {
  //   reverse.push(array[i]);
  // }
  // for (let i = 0; i < array.length; i++) {
  //   reverse.unshift(array[i]);
  // }
  // console.log(reverse);
  console.log(array.reverse());
}

reverseArray(array1);

const array2 = ["one", "two", ["three", "four"]];

const flattenArray = function (array) {
  let flatten = [];
  //for (let i = 0; i < array.length; i++) {

    // if (array[i] instanceof Array) {
    //   for (let j = 0; j < array[i].length; j++) {
    //     flatten.push(array[i][j])
    //   }
    // } else {
    //   flatten.push(array[i])
    // }

    // if (Array.isArray(array[i])) {
    //   flatten = flatten.concat(array[i])
    // } else {
    //   flatten.push(array[i])
    // }

  //}
  //console.log(flatten);
  console.log(array.flat());
}

flattenArray(array2);
*/

/*
// Version 1

const pairwise = {

  cleanNumber: function (input) {
    let number = [];
    let numerals = "0123456789"

    for (let i = 0; i < input.length; i++) {
      if (numerals.indexOf(input[i]) !== -1) {
        number.push(input[i])
      }
    }
    return number.join("")
  },

  CheckValidation: function (input) {
    const number = this.cleanNumber(input)
    if (number.length === 11 & number[0] === "1") {
      return number.substr(1)
    } else if (number.length === 10) {
      return number;
    } else {
      return "0000000000";
    }
  },

  getFormattedNumber: function (input) {
    const validNumber = this.CheckValidation(input)
    const areaCode = validNumber.substr(0, 3)
    const exchangeCode = validNumber.substr(3,3);
    const remaining = validNumber.substr(6);
    return `(${areaCode}) ${exchangeCode}-${remaining}`
  }

}

 console.log(pairwise.getFormattedNumber('11234567890'));
*/
  // console.log('112aghh34567890'.match(/\d/g));

// Version 2
/*
  const pairwise = {

    cleanNumber (input) {
      // let number = input.match(/\d/g);
      let number = input.replace(/[^0-9]+/g, '');
      // number = number.join("");

      return (number.length === 11 && number[0] === "1") ? number.substr(1) : number
    },

    CheckValidation (input) {
      const number = this.cleanNumber(input)
      return (number.length !== 10) ? "0000000000" : number
    },

    getFormattedNumber (input) {
      const validNumber = this.CheckValidation(input)
      const areaCode = validNumber.substr(0, 3)
      const exchangeCode = validNumber.substr(3,3);
      const remaining = validNumber.substr(6);
      return `(${areaCode}) ${exchangeCode}-${remaining}`
    }

  }

   console.log(pairwise.getFormattedNumber('11234567890'));
*/

/*
let list = [];
  const max = 20;
  for (let first = 2; first < max; first++) {
    let found = false;
      for (let j = 2; j <= first; j++) {
        if (!found && (first !== j) && first % j === 0){
          found = true;
        } else if (!found && first===j) {
          list.push(first)
        }
      }
  }
    console.log(list.join(", "));

*/
/*
const findPrime = function (max) {

  let list = [];

  let primes = [];

  // for (let i = 0; i < max; i++) {
  //   list[i] = true;
  // }

  list = new Array(max).fill(true)
  console.log('old', list);

  for (let i = 2; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] === true & j % i === 0) {
        list[j] = false;
      }
    }
  }
  console.log('new', list);

  // for (let i = 2; i < list.length; i++) {
  //   if (list[i] === true) {
  //     primes.push(i);
  //   }
  // }
  // console.log(primes);

  primes = list.reduce(function (array, element, index) {
    if (element === true) {
      array.push(index)
    }
    return array;
  }, [])

  console.log(primes);

  for (let i = 0; i < array.length; i++) {
    array[i]
  }
}

findPrime(10);
*/

// Version 1

// const primeFactors = function (number) {
//
//   let factors = [];
//
//   let i = 2;
//
//   while (number > 1) {
//     if (number % i === 0) {
//       factors.push(i);
//       number = number / i;
//     } else {
//       i++;
//     }
//   }
//   console.log(factors);
// }

// primeFactors(60);

// Version 2
/*
const primeFactors = {

  range: [],

  primeRange: [],

  factors: [],

  findRange: function (number) {
    for (let i = 2; i <= number; i++) {
      this.range.push(i);
    }
    return this.range;
  },

  findPrimeRange: function (array) {

    let isPrime;

    for (let i = 0; i < array.length; i++) {
      isPrime = true;
      // console.log('outer', array[i]);
      for (let j = 2; j < array[i]; j++) {
        // console.log('inner', array[i]);
        if (array[i] % j === 0) {
          // console.log('mod', array[i]);
          isPrime = false;
        }
      }
      if (isPrime === true) {
        this.primeRange.push(array[i])
      }
    }
    return this.primeRange;
  },

  findPrimeFactors: function (number) {

    let primes = this.findPrimeRange(this.findRange(number));

    for (let i = 0; i < primes.length; i++) {
      while (number % primes[i] === 0) {
        this.factors.push(primes[i]);
        number = number / primes[i];
      }
    }
    // return this.factors;
    const newArray = Array.from(new Set(this.factors));
    return newArray;
  }
}

console.log(primeFactors.findPrimeFactors(60));
*/
/*

const happyNumbers = {

  happyList: [],

  findSquareSum: function (digit) {

    let sum = 0;
    let stringNumber = digit.toString();

    for (let i = 0; i < stringNumber.length; i++) {
      sum += +stringNumber[i] * +stringNumber[i];
    }
    return sum;
  },

  happyLogic: function (digit) {

    let cycle = {};
    let squareSum = digit;

    console.log('checking', digit);

    while (true) {
      squareSum = this.findSquareSum(squareSum)

      console.log('calculating...');

      if (squareSum === 1) {
        console.log("found a happy number", digit);
        return true;
      }

      if (cycle[squareSum]) {
        console.log("repeated pattern");
        return false;
      }
      cycle[squareSum] = true;
      console.log('cycle', cycle);
      console.log('squareSum', squareSum);
    }
  },

  printNumbers: function (num) {

    let found = 0;

    for (let i = 0; found < num; i++) {

      if (this.happyLogic(i)) {
        found++
        this.happyList.push(i)
      }
    }
    console.log(this.happyList);
  }
}

happyNumbers.printNumbers(10);
*/
/*
const collatz = function (number) {

  let count = 0;
  let collection = [number];

  while (number > 1) {
    if (number % 2 === 0) {
      number = number /2;
    } else {
      number = (3 * number) + 1
    }
    count++
    collection.push(number);
  }

  console.log(`The process was ${collection.join(', ')}`);
  console.log(`The function ran for ${count} times`);

}

collatz(12)
*/

// const collatz = (n, i=0) => {
//
//   if (n === 1) {
//     console.log(`The function ran for ${i} times`);
//     return;
//   }
//
//   if (n % 2 === 0) {
//     n = n / 2;
//     i++
//     collatz(n, i);
//   } else {
//     n = (3 * n) + 1;
//     i++
//     collatz(n, i);
//   }
//
// }
//
// collatz(27)
/*
const collatz = (n) => {

  let count = 0;
  let collection = [];

  const conjecture = (n) => {

    collection.push(n);

    if (n===1) {
      console.log(count);
      console.log(collection);
      return
    }

    if (n%2===0) {
      n = n/2
      count++
      conjecture(n)
    } else {
      n = (3*n) + 1
      count++
      conjecture(n)
    }
  }
  return conjecture(n)
}

collatz(12)
*/
//
/*
const dashatize = (input) => {

  const number = Math.abs(input) // return the absolute value of a number

  // console.log('num', number);

  if (Number.isNaN(number)) {
    console.log(input);
    return;
  }

//   The Number.isNaN() method determines whether a value is NaN (Not-A-Number).
//
// This method returns true if the value is of the type Number, and equates to NaN. Otherwise it returns false.
//
// Number.isNaN() is different from the global isNaN() function. The global isNaN() function converts the tested value to a Number, then tests it.
//
// Number.isNaN() does not convert the values to a Number, and will not return true for any value that is not of the type Number.
//
// Tip: In JavaScript, the value NaN is considered a type of number.

  let array = number.toString().split("");
  // let array = (""+number).split("");
  // console.log(array);
  let string = "";

  for (let i = 0; i < array.length; i++) {
    if (+array[i] % 2 !== 0) {
      string += '-' + array[i] + '-'
    } else {
      string += array[i]
    }
  }

  let dashed = string.replace(/--/gi, "-")

//   g modifier: global. All matches (don't return on first match)
//
// i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
//
// The beginning and ending / are called delimiters. They tell the interpreter where the regex begins and ends. Anything after the closing delimiter is called a "modifier," in this case g and i.

  if (dashed[0] === '-') {
    dashed = dashed.substr(1, dashed.length)
  }

  if (dashed[dashed.length-1] === '-') {
    dashed = dashed.substr(0, dashed.length-1)
  }

  console.log(dashed);
}



dashatize(274);
dashatize(5311);
dashatize(5311);
dashatize(86320);
dashatize(974302);
dashatize(-1);
dashatize(-28369);
dashatize(NaN);
dashatize(0);
*/

// const findMatch = (array, sum) => {
//
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j < array.length; j++) {
//       if (array[i] + array[j] === sum) {
//         console.log(`The digits ${array[i]} and ${array[j]} equals ${sum}`);
//         return true;
//       }
//     }
//   }
//   return false;
// }
//
// const findMatch = (array, sum) => {
//
// // If an iterable object is passed, all of its elements will be added to the new Set. If you don't specify this parameter, or its value is null, the new Set is empty.
//
//   let search = new Set();
//   search.add(sum - array[0])
//
//   for (let i = 1; i < array.length; i++) {
//     let value = sum - array[i];
//
//     if (search.has(array[i])) {
//       console.log(`The digits ${array[i]} and ${value} equals ${sum}`);
//       return true;
//     } else {
//       search.add(value)
//     }
//   }
//   return false;
// }
/*
const findMatch = (array, sum) => {

  for (let i = 0; i < array.length; i++) {
    const difference = sum - array[i];
    const tempArray = array.filter(element => element === difference && difference !== array[i]);
    if (tempArray.length !== 0) {
      return true
    }
  }
  return false
}

module.exports = findMatch;
*/
// console.log(findMatch([3, 5, 1, 4], 9)); // true
// console.log( findMatch([1, 2, 4, 6], 5) ); // true
// console.log( findMatch([1, 3, 5, 4], 2) ); // false
// console.log( findMatch([2, 3, 5, 8], 6) ); // false
/*
const isIsogram = (word) => {
  word = word.toLowerCase();
  if (word.length === 0) {
    console.log(`${word} is an isogram`);
    return true
  }
  for (let i = 0; i < word.length; i++) {
    for (let j = i+1; j < word.length; j++) {
      if (word[i] === word[j]) {
        console.log(`${word} is not a isogram`);
        return false
      }
    }
  }
  console.log(`${word} is an isogram`);
  return true
}

console.log(isIsogram("Dermatoglyphics")); //, true );
console.log(isIsogram("isogram")); //, true );
console.log(isIsogram("aba")); //, false, "same chars may not be adjacent" );
console.log(isIsogram("moOse")); //, false, "same chars may not be same case" );
console.log(isIsogram("isIsogram")); //, false );
console.log(isIsogram("")); //, true, "an empty string is a valid isogram" );
*/
/*
const isIsogram = (word) => {

  if (word.length === 0) {
    return true
  }
  let array = word.toLowerCase().split("")

  let wordObject = array.reduce((letters, letter) => {
    if (letter in letters) {
      letters[letter] += 1
    } else {
      letters[letter] = 1
    }
    return letters
  }, {})

  // console.log(wordObject);

  console.log(word);

  // const count =
    return Object.values(wordObject).filter(value => value > 1).length === 0 ? true : false
  // if (count.length === 0) {
  //   return true
  // } else {
  //    return false
  // }
}

console.log(isIsogram("Dermatoglyphics")); //, true );
console.log(isIsogram("isogram")); //, true );
console.log(isIsogram("aba")); //, false, "same chars may not be adjacent" );
console.log(isIsogram("moOse")); //, false, "same chars may not be same case" );
console.log(isIsogram("isIsogram")); //, false );
console.log(isIsogram("")); //, true, "an empty string is a valid isogram" );
*/
/*

const isIsogram = (word) => {

  // If an iterable object is passed, all of its elements will be added to the new Set. If you don't specify this parameter, or its value is null, the new Set is empty.

  // let newWord = new Set(word.toLowerCase());
  //
  // if (newWord.size === word.length) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  console.log(word);
  return new Set(word.toLowerCase()).size === word.length
}

console.log(isIsogram("Dermatoglyphics")); //, true );
console.log(isIsogram("isogram")); //, true );
console.log(isIsogram("aba")); //, false, "same chars may not be adjacent" );
console.log(isIsogram("moOse")); //, false, "same chars may not be same case" );
console.log(isIsogram("isIsogram")); //, false );
console.log(isIsogram("")); //, true, "an empty string is a valid isogram" );
*/
/*
function sockMerchant(n, ar) {
     let sum = 0;
    if (n >= 1 && n <= 100) {
        for (let i=0; i<ar.length; i++) {
          console.log('i', i);
            for (let j=i+1; j<ar.length; j++) {
              console.log('j', j);
                if (ar[i] === ar[j]) {
                    sum++
                    console.log(`element: ${ar[i]} at index: ${i}`);
                    console.log(`element: ${ar[j]} at index: ${j}`);
                    ar.splice(i,1, NaN)
                    ar.splice(j,1, NaN)
                }
            }
        }
    }
    console.log('sum', sum);
}

sockMerchant(9, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])
*/
/*
function countingValleys(n, s) {
    let count = 0;
    let total = 0;

    if (n >= 2 && n <= Math.pow(10, 6)) {
        for (let i=0; i<s.length; i++) {
            if (s[i] === 'D') {
                count--;
                console.log('cD', count);
            } else if (s[i] === 'U') {
                count++
                console.log('cU', count);
                if (count === 0) {
                  total++;
                }
            }
        }
    }
    console.log(total);
}

countingValleys(8, 'UDDDUDUU')
*/
/*
function jumpingOnClouds(c) {

  let steps = 0;

  if (c.length >=2 && c.length <= 100) {
    let i = 0;
      while (i < c.length-1) {
        console.log("III", i);
        if (c[i] === 0) {
          console.log('i', i);
          if (c[i+2] === 0) {
            console.log('i2', i);
            i = i + 2;
            // console.log('cB', c);
            steps++;
            // c.splice(i+2,1,NaN)
            // console.log('cA', c);
          } else if (c[i+1] === 0) {
            console.log('i1', i);
            // console.log('cB', c);
            i = i + 1;
            steps++;
            // c.splice(i+1,1,NaN)
            // console.log('cA', c);
          }
        }
      }
  }
  console.log(steps);
}

jumpingOnClouds([0, 0, 0, 0, 1, 0])
*/

// function repeatedString(s, n) {

  // let count = 0;
  // let string = "";
  //
  // if (s.length >= 1 && s.length <= 100 && n >=1 && n <= Math.pow(10, 12)) {
  //   while (string.length < n) {
  //     string += s;
  //   }
  //   console.log(string);
  //   string = string.substr(0, 10)
  //   string = string.split("")
  //   console.log(string);
  //   string.forEach(function (element) {
  //     if (element === 'a') {
  //       count++;
  //     }
  //   });
  // }
  // console.log(count);

//   let count = 0;
//
//   if (s.length >= 1 && s.length <= 100 && n >=1 && n <= Math.pow(10, 12)) {
//     let string = new Array(n + 1).join(s)
//     if (!string.length) {
//       console.log(n);
//     }
//     console.log(string);
//     console.log(string.length);
//     string = string.substr(0, n)
//     console.log('nw', string.length);
//     string = string.split("")
//     console.log(string);
//     string.forEach(function (element) {
//       if (element === 'a') {
//         count++;
//       }
//     });
//     console.log(count);
//   }
// }
//
// repeatedString ('a', 1000000000000)

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
//
// var __input_stdin = "";
// var __input_stdin_array = "";
// var __input_currentline = 0;
//
// process.stdin.on('data', function (data) {
//     __input_stdin += data;
// });


/*
 * Complete the function below.
 */
 /*
const mergedStrings = (strings) => {
    // let mergedString = '';

    let mergedString = strings.join('');

    // for(let i = 0; i < strings.length; i++) {
    //     mergedString += strings[i];
    // }
    console.log(mergedString);

    let alphabetsString = '';

    for(let i = 0; i < mergedString.length; i++) {
        const ansiCode = mergedString[i].charCodeAt(0);
        if (ansiCode >= 97 && ansiCode <= 122) {
            alphabetsString += mergedString[i];
        }
    }

    let sortedString = alphabetsString.split('').sort().join('');

    console.log(sortedString);
}

mergedStrings(["rsrsr", "jkhkjh", "ftetxvmguy"]);
*/

const scrabbleScore = {

  letterValues: {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T" ],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
  },

  letterScore: function (letter) {
    let points = 0;
    for (let score in this.letterValues) {
      if (this.letterValues[score].indexOf(letter) > -1) {
        points += Number(score);
      }
    }
    return points;
  },

  wordScore: function (word) {
    word = word.toUpperCase();
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      // for (let score in this.letterValues) {
      //   if (this.letterValues[score].includes(word[i])) {
      //     sum += Number(score)
      //   }
      // }
      sum += this.letterScore(word[i])
    }
    console.log(sum);
  }
}

scrabbleScore.wordScore('cabbage')
