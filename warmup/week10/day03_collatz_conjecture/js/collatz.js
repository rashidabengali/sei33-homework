console.log('run');

// Version 1
/*
const collatz = function (number) {

  let count = 0;
  let collection = [number];

  while (number > 1) {
    if (number % 2 === 0) {
      number = number / 2
    } else {
      number = (3 * number) + 1
    }
    count++;
    collection.push(number)
  }

  console.log(`The function ran for ${count} times`);
  console.log(`The process was ${collection.join(', ')}`);
}

collatz(12);
*/

// Recursion

const collatz = (n, count=0) => {

  if (n===1) {
    console.log(`The function ran for ${count} times`);
    return
  }

  if (n % 2===0) {
    n = n /2
    count++
    collatz(n, count);
  } else {
    n = (3 * n) + 1
    count++
    collatz(n, count)
  }
}

collatz(12);
