console.log('run');

/*
// Version 1
const findAllergies = {
  scorecard: {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats"
},

getKeys: function () {
  const allergyKeys = Object.keys(this.scorecard).map(Number).reverse();
  //console.log('allergyKeys', allergyKeys);
  return allergyKeys;
},

getList: function (score) {
  const keys = this.getKeys();

  let allergies = []

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];

    if (score >= key) {
      allergies.push(this.scorecard[key])
      score -= key
    }
  }
  //console.log('allergies', allergies);
  return allergies;
},

diagnosis: function (score) {
  const allergyList = this.getList(score);

  if (allergyList.length > 0) {
    console.log('Allergies:', allergyList.join(', '));
  } else {
    console.log('No Allergies');
  }
}

};

findAllergies.diagnosis(34);
*/
// Version 2

const scorecard = {
  "cats": 128,
  "pollen": 64,
  "chocolate": 32,
  "tomatoes": 16,
  "strawberries": 8,
  "shellfish": 4,
  "peanuts": 2,
  "eggs": 1
};

const findAllergies = function (score) {

  let allergyList = [];

  Object.keys(scorecard).forEach(function (key) {

    console.log('old score', score);

    if (score % scorecard[key] < score) {
      allergyList.push(key);
      score = score % scorecard[key];
      console.log('new score', score);
    }

  });

  if (allergyList.length > 0) {
    console.log('Allergies:', allergyList.join(', '));
  } else {
    console.log('No Allergies');
  }

};

findAllergies(34);
