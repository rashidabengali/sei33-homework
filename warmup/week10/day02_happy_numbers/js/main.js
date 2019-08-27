console.log('run');

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
        console.log('found happy number', digit);
        return true;
      }

      if (cycle[squareSum]) {
        console.log('repeated number');
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
        found++;
        this.happyList.push(i)
      }
    }
    console.log(this.happyList);
  }
}

happyNumbers.printNumbers(10);
