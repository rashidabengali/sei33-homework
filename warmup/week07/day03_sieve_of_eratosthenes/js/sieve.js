//console.log('run');

const sieve = {

  list: [], // Initialise our range of primes; setting their value to true means we assume they're all

  primes: [], // will push all the found prime numbers here

  calculatePrime: function (max) {

    // for (let i = 0; i < max; i++) {
    //   this.list[i] = true;
    // }

    this.list = new Array(max).fill(true) // this can be used instead of the above for loop
    // console.log(this.list);

    for (let i = 2; i < this.list.length; i++) {
      // 'currentNum' is a bit clearer than 'i'
      let currentNumber = i
      // console.log(currentNumber);

      // Now loop through all the remaining numbers, testing whether they're divisible by currentNumber
      for (let j = currentNumber + 1; j < this.list.length; j++) {
          if (this.list[j] === true && j % currentNumber === 0) {
            this.list[j] = false;
          }
      } // inner loop
    } // outer loop

    // console.log(this.list);

    // for (let i = 2; i < this.list.length; i++) {
    //   if (this.list[i] === true) {
    //     this.primes.push(i);
    //   }
    // }

    // reduce method to use instead of the above for loop to find out the index which have a value/element true
    this.primes = this.list.reduce(function(array, element, index) {
      if (element === true) {
        array.push(index);
      }
      return array
    }, []);

    //console.log(this.primes);
    console.log(this.primes.join(", "));
  }
}

sieve.calculatePrime(30);

/*

// Graham's Solution

sieve = function (end) {
 nonCandidates = new Set()
 // nonCandidates = new Set()
 // O(sqrt(n))
 for (let i = 2; i < (Math.sqrt(end)+1); i++) {
   let count = 2
   j = i * count
   while (j < end) {
     if (!nonCandidates.has(j)) {
       nonCandidates.add(j)
     }
     count++
     j = i * count
   }
 }
 // O(n)
 primes = []
 for (let i = 2; i < end; i++) {
   if (!nonCandidates.has(i)){
     primes.push(i)
   }
 }
 console.log(primes)
}
sieve(10)


// Ludo's Solution

function primeNumbers ( n ) {
 let numbers = Array();
 numbers[0] = 0;
 numbers[1] = 0;
 for (i = 2; i <= n; i++) {
   numbers[i] = i; // initialization
 }
 for (i = 0; i <= Math.sqrt(n); i++) {
   if (numbers[i] != 0) {
     for (j = 2; j*i <= n; j++) {
       numbers[j*i] = 0; // remove all the multiples
     }
   }
 }
 return numbers;
}
console.log(primeNumbers(30));


// Mee's Solution
  let list = [];
  const max = 10;

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
