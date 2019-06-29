console.log("mta_lab.js is up and running!");
// # MTA Lab
//
// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//

// #### Activity
// * Create a program that models a simple subway system.
//

// program here

// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// 1. subway as object
    //  - subwayLine x3

    // stops as an array

// Create subway, lines and stops function
// const subwayFactory = function ( line /* stops, still undefined */) {
//   const subway = {
//     subwayLine: line,
//     stops: [],
//     createStops: function() {
//       for (let i = 1; i < arguments.length; i++) {
//       subway.stops.push(arguments[i]); // should be able to use this.stops...
//       }
//     }
//   };
//   console.log(this.stops);
//   console.log(subway);
//
//   return subway;
// };
//
// const subwayStation = [
//   subwayFactory('N', 'T.S', '34th')
// ]
//
// subwayStation[0].createStops('N', 'T.S', '34th');

let nothing = 'nothing';
let sameLine = false;
let forward = false;
let backward = false;
let numStops = 0;
let stopNames = [];
let firstTrip = true;
let secondTrip = false;


const subwayFactory = function ( line /* stops, still undefined */) {
  const subway = {
    subwayLine: line,
    stops: []
  };
  console.log(this.stops);
  console.log(subway);
  for (let i = 1; i < arguments.length; i++) {
    subway.stops.push(arguments[i]);
  };
  return subway;
};

const subwayStation = [
  subwayFactory('N', 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th'),
  subwayFactory('L', '8th', '6th', 'Union Square', '3rd', '1st'),
  subwayFactory('6', 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place')
];

// console.log(subwayStation[0].createStops('T.S', '34th'));
console.log(subwayStation);
console.log(subwayStation[0].subwayLine);
console.log(subwayStation[0].stops);



// const subway = [
//   {subwayLine: 'N', stops: ['T.S.','34th', etc ]}
//   {subwayLine: 'L', stops: ['T.S.','34th', etc ]}
//   {subwayLine: '6', stops: ['T.S.','34th', etc ]}
// ]

////////////////////* TO CREATE NEW SUBWAYS IN THE FUTURE, STILL doesnt work
// const createSubway = function() { //hard coded subway first
//   // create subway lines and stops
//   console.log(arguments);
//   console.log(subwayFactory(arguments));
//   return subwayStation.push(subwayFactory(arguments));
// } */


console.log(subwayStation);
// console.log(subwayStation.Object.keys());
console.log(Object.keys(subwayStation)); // ["0", "1", "2"]
console.log(Object.keys(subwayStation[0])); // ["subwayLine", "stops"]

let testVar = subwayStation[0].stops;

console.log(testVar.indexOf('34th'));

console.log(subwayStation[0].stops);
console.log(Object.keys(subwayStation[0].stops)); // ["0", "1", "2", "3", "4", "5"]
console.log(Object.values(subwayStation[0].stops)); //["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
console.log(Object.values(subwayStation[0].subwayLine));
console.log(subwayStation[0].subwayLine);

console.log(subwayStation[0].stops.indexOf('23rd') - subwayStation[0].stops.indexOf('34th'));
console.log(subwayStation[0].stops.values); //

const getSubwayLine = function ( enterLine, exitLine ) {
  for (let i = 0; i < subwayStation.length; i++) {
    if (enterLine === exitLine && subwayStation[i].subwayLine === enterLine) {
      enterLineIdx = i;
      exitLineIdx = i;
      sameLine = true;
    }
    else if (subwayStation[i].subwayLine === enterLine) {
      enterLineIdx = i;
      sameLine = false;
    }
    else if (subwayStation[i].subwayLine === exitLine) {
      exitLineIdx = i;
      swapLineIdx = i;
      sameLine = false;
    }
  }
}

const getDirection = function( enterStopNum, exitStopNum ) {
  if ( enterStopNum < exitStopNum ) {
    return forward = true;
  }
  else if ( enterStopNum > exitStopNum ){
    return backward = true;
  }
  // if ( !sameLine && enterStopNum < changeStopNum || changeStopNum < exitStopNum ) {
  //   return forward = true;
  // }
  // else if ( !sameLine && enterStopNum > changeStopNum || changeStopNum > exitStopNum ) {
  //   return backwards = true;
  // }
};

const addStops = function ( enterStopNum, exitStopNum ) {
  if (forward) {
    for (let j = enterStopNum; j < exitStopNum - 1; j++) {
      stopNames.push(subwayStation[enterLineIdx].stops[j+1]);
    }
  }
  else if (backwards) {
    for (let j = enterStopNum; j > exitStopNum; j--) {
      stopNames.push(subwayStation[exitLineIdx].stops[j]);
    }
  }
}

const getAllStops = function ( enterStopNum, exitStopNum ) {
  numStops = Math.abs(exitStopNum - enterStopNum);
  stopNames = [];
  getDirection( enterStopNum, exitStopNum );
  addStops( enterStopNum, exitStopNum );
  return stopNames;
}

const printMessage = function( enterLine, enterStop, exitLine, exitStop ) {
  if (!sameLine && firstTrip) {
    console.log(`From ${ enterStop } on line ${ enterLine }, to ${ exitStop } on line ${ exitLine }.`)
    console.log(`Stay on the train through ${ stopNames.join(', ') }.`)
    console.log(`Get off and change trains at ${ 'Union Square' } after ${ numStops } stops.`)
    console.log(`Get on the train to ${ exitStop } on line ${ exitLine }.`)
  }
  else if (!sameLine && secondTrip) {
    console.log(`Stay on the train through ${ stopNames.join(', ') }.`)
    console.log(`Get off at ${ exitStop } after ${ numStops } stops.`)
  }
  else {
    console.log(`From ${ enterStop } on line ${ enterLine }, to ${ exitStop } on line ${ exitLine }.`)
    console.log(`Stay on the train through ${ stopNames.join(', ') }.`)
    console.log(`Get off at destination: ${ exitStop } after ${ numStops } stops.`)
  }
}

const checkStops = function( enterStop, exitStop, enterLineIdx, exitLineIdx, swapLineIdx, enterLine, exitLine ) {
  const enterStopNum = subwayStation[enterLineIdx].stops.indexOf(enterStop);
  const exitStopNum = subwayStation[exitLineIdx].stops.indexOf(exitStop);
  const changeStopNum = subwayStation[swapLineIdx].stops.indexOf('Union Square'); // need to vary

  if (sameLine) {
    getAllStops( enterStopNum, exitStopNum );
    printMessage( enterLine, enterStop, exitLine, exitStop )
  }
  else if (!sameLine) { // !sameLine
    if (firstTrip) {
      getAllStops ( enterStopNum, changeStopNum );
      printMessage( enterLine, enterStop, exitLine, exitStop )
      firstTrip = false;
      secondTrip = true;
      // print first part of message
    }
    else if (secondTrip) {
      getAllStops ( changeStopNum, exitStopNum );
      printMessage( enterLine, enterStop, exitLine, exitStop )
      // printMessage(); or printChangeMessage();
    }
  }
}


const listStopNames = function() {

}



const planTrip = function( enterLine, enterStop, exitLine, exitStop ) {
  // take input into a function
  let enterLineIdx = 0;
  let exitLineIdx = 0;
  let swapLineIdx = exitLineIdx;
  getSubwayLine( enterLine, exitLine );
  checkStops( enterStop, exitStop, enterLineIdx, exitLineIdx, swapLineIdx, enterLine, exitLine );
  // if ( enterLine !== exitLine ) {
  //   for (let i = 0; i < subwayStation.length; i++) {
  //     const enterStopNum = subwayStation[i].stops.indexOf(enterStop); // need to vary
  //     const exitStopNum = subwayStation[i].stops.indexOf('Union Square'); // need to vary
  //     if (subwayStation[i].subwayLine === enterLine) { // need to vary
  //       const numStops = Math.abs(exitStopNum - enterStopNum);
  //       const stopNames = [];
  //       for (let j = enterStopNum; j < exitStopNum - 1; j++) { // this loop needs to vary
  //         stopNames.push(subwayStation[i].stops[j+1]);
  //       }
  //       // printMessage();
  //       console.log(`From ${ enterStop } on line ${ enterLine }, to ${ exitStop } on line ${ exitLine }.`)
  //       console.log(`Stay on the train through ${ stopNames.join(', ') }.`)
  //       console.log(`Get off and change trains at ${ 'Union Square' } after ${ numStops } stops.`)
  //       console.log(`Get on the train to ${ exitStop } on line ${ exitLine }.`)
  //     }
  //   }
  //   for (let i = 0; i < subwayStation.length; i++) {
  //     const enterStopNum = subwayStation[i].stops.indexOf('Union Square'); // need to vary
  //     const exitStopNum = subwayStation[i].stops.indexOf(exitStop); // need to vary
  //     if (subwayStation[i].subwayLine === exitLine) { // this needs to vary
  //       const numStops = Math.abs(exitStopNum - enterStopNum);
  //       const stopNames = [];
  //       console.log(exitStopNum); // 1  4
  //       console.log(enterStopNum); // 4  2
  //       for(let j = enterStopNum - 1; j > exitStopNum; j--) { // this loop needs to vary
  //         stopNames.push(subwayStation[i].stops[j]);
  //       }
  //       // printMessage(); or printChangeMessage();
  //       console.log(`Stay on the train through ${ stopNames.join(', ') }.`)
  //       console.log(`Get off at ${ exitStop } after ${ numStops } stops.`)
  //     }
  //   }
  // }
  // else {
  //   for (let i = 0; i < subwayStation.length; i++) {
  //     const enterStopNum = subwayStation[i].stops.indexOf(enterStop);
  //     const exitStopNum = subwayStation[i].stops.indexOf(exitStop);
  //     if (subwayStation[i].subwayLine === enterLine) {
  //       const numStops = exitStopNum - enterStopNum;
  //       // indexOf subwayStation[i].stops
  //       console.log(numStops);
  //       // two ways to show stops in cosole.log
  //           // 1. subwayStation[i].stops.join(', '), then slice
  //           // 2. for (let j = enterStopNum; j < exitStopNum; j++) { // if I want to retun numStops and stopNames, this needs to be outside if conditional, inside outer for statement
  //           //  let stopNames = '';
  //           //  stopNames = stopNames + ', ' + subwayStation[i].stops[j];
  //
  //       // let allStopsName = subwayStation[i].stops.join(', ');
  //
  //       const stopNames = [];
  //       for (let j = enterStopNum; j < exitStopNum - 1; j++) { // need to vary
  //         stopNames.push(subwayStation[i].stops[j+1])
  //         console.log(stopNames);
  //       }
  //       // printMessage();
  //       console.log(`From ${ enterStop } on line ${ enterLine }, to ${ exitStop } on line ${ exitLine }.`)
  //       console.log(`Stay on the train through ${ stopNames.join(', ') }.`)
  //       console.log(`Get off at destination: ${ exitStop } after ${ numStops } stops.`)
  //     }
  //     else {
  //       console.log( `Not looking at ${ enterLine } subway Line.`)
  //     };
  //
  //
  //
  //     // indexOf exitLine - indexOf enterLine // should return how many stops from enterstop to endstop
  //         // example 4th stop - 0thstop (enterStop) = 4 stops
  //     // .??? is indexOf subwayStation[i].stops the same as Object.keys(subwayStation[i].stops)
  //           /// ?> one is a single index, the other is array of index
  //     // after calculating stops.. return console.log
  //     // Object.values of subwayStation[i].stops of index enterLine to exitLine
  //     // count stops from Object.keys(subwayStation[i].stops)
  //     // subwayStation[i].stops.values === enterStop
  //   }
  // }
  //




        // count how many stops
          // return the keys from a stop to another and subtract to get number of stops
        // show which stops to reach destination
          // return values of stop object

  // console.log(`You must travel through the following stops on the ${ nothing } line: ${ nothing }`);
  // console.log(`Change at ${ nothing }`); // change at union square if necessary
  // console.log(`Your journey continues through the following stops: ${ nothing }`);
  // console.log(`${ nothing } stops in total, before you reach your destination ${ nothing }`);
};




planTrip('N', 'Times Square', 'N', 'Union Square'); // single subwayLine
planTrip('N', 'Times Square', '6', '33rd'); // interchange lines

//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
