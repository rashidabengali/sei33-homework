console.log('run');

// Version 1
/*
const wheatGrains = function (numberOfSquares) {
  let totalGrains = 0;
  let grainsList = [];

  for (let i = 0; i < numberOfSquares; i++) {
    let grainsPerBox = Math.pow(2, i);
    totalGrains += grainsPerBox;
    grainsList.push(grainsPerBox);
  }
  console.log('totalGrains', totalGrains);
  console.log('grainsList', grainsList);
};

//wheatGrains(4);
wheatGrains(64);
*/

// Version 2

const wheatGrains = {

  totalGrains: 0,

  grainsList: [],

  calculateGrains: function (numberOfSquares) {

    for (let i = 0; i < numberOfSquares; i++) {
      let grainsPerBox = Math.pow(2, i);
      this.totalGrains += grainsPerBox;
      this.grainsList.push(grainsPerBox);
    }
    console.log('totalGrains', this.totalGrains);
    console.log('grainsList', this.grainsList);
  }
};

wheatGrains.calculateGrains(4);
