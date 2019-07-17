console.log('run');

// Version 1

debugger;

const studentsClapped = {
  "Alex": 1,
  "Bridget": 2,
  "Charlie": 3,
  "Daisy": 5,
  "Ellie": 7
}

const revengeOfBadger = function (input) {

  let shortListed = [];

  for (let keys in input) {
    if (input[keys] > 2) {
      shortListed.push(keys);
    }
  }
  console.log('shortListed', shortListed); //["Charlie", "Daisy", "Ellie"]

  let winner = "Badger";

  if (shortListed.length > 0) {
    // Math.random() gives you number between 0(inclusive) and 1
    const randomIndex = Math.floor(Math.random() * shortListed.length);
    console.log('randomIndex', randomIndex);
    winner = shortListed[randomIndex];
  }
  console.log(`${winner} will have to show solutions for Friday warmup`);
};

revengeOfBadger(studentsClapped);


// Version 2 (THIS lovers)

/*
const revengeOfBadger = {

  studentsClapped: {
    "Alex": 1,
    "Bridget": 2,
    "Charlie": 3,
    "Daisy": 5,
    "Ellie": 7
  },

  shortListed: [],

  getCandidates: function () {
    for(let keys in this.studentsClapped) {
      if (this.studentsClapped[keys] > 2) {
        this.shortListed.push(keys);
      }
    }
    console.log('shortListed', this.shortListed); //["Charlie", "Daisy", "Ellie"]
    return this.shortListed.length;
  },

  fridayDraw: function () {
    const numberOfCandidates = this.getCandidates();
    console.log('numberOfCandidates', numberOfCandidates); // 3

    let winner = "Badger";

    if (numberOfCandidates > 2) {
      const randomIndex = Math.floor(Math.random() * numberOfCandidates);
      winner = this.shortListed[randomIndex];
    }

    return `${winner} will have to show solutions for Friday warmup`;
  }
};

  console.log(revengeOfBadger.fridayDraw());
*/
