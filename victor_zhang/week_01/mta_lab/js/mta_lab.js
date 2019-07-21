console.log("mta_lab.js is up and running!");
// # MTA Lab
//
let sameLine = false;
let forward = false;
let backward = false;
let numStops = 0;
let stopNames = [];
let firstTrip = true;
let secondTrip = false;
let enterLineIdx = 0;
let exitLineIdx = 0;
let swapLineIdx = exitLineIdx;


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



let testVar = subwayStation[0].stops;


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
      exitLineIdx = i; // 2
      sameLine = false;
    }
  }
}

const getDirection = function( enterStopNum, exitStopNum ) { // not necessary
  if ( enterStopNum < exitStopNum ) { // check which direction train is going
    backward = false;
    return forward = true;
  }
  else if ( enterStopNum > exitStopNum ) { // check which direction train is going
    forward = false;
    return backward = true;
  }
};

const addStops = function ( enterStopNum, exitStopNum ) {
  if (enterStopNum < exitStopNum) { // if (forward)
    for (let j = enterStopNum; j < exitStopNum - 1; j++) { // if going fowards, add stops
      stopNames.push(subwayStation[enterLineIdx].stops[j+1]);
    }
  }
  else if (enterStopNum > exitStopNum) { // if (backward)
    for (let j = enterStopNum - 1; j > exitStopNum; j--) { // if going backwards add stops
      stopNames.push(subwayStation[exitLineIdx].stops[j]);
    }
  }
}

const getAllStops = function ( enterStopNum, exitStopNum ) {
  numStops = Math.abs(exitStopNum - enterStopNum); // gets number of stops
  stopNames = [];
  // getDirection( enterStopNum, exitStopNum ); // checks which direction train is going
  addStops( enterStopNum, exitStopNum ); // add stops Names to array
  // return stopNames;
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
  const stopGetOffNum = subwayStation[enterLineIdx].stops.indexOf('Union Square'); // need to vary
  const stopGetOnNum = subwayStation[exitLineIdx].stops.indexOf('Union Square'); // need to vary
  //


  if (sameLine) {
    getAllStops( enterStopNum, exitStopNum ); // gets the stops and add them to an array
    printMessage( enterLine, enterStop, exitLine, exitStop ) // prints message
  }
  else if (!sameLine) { // !sameLine
    if (firstTrip) {
      getAllStops ( enterStopNum, stopGetOffNum );
      printMessage( enterLine, enterStop, exitLine, exitStop )
      firstTrip = false;
      secondTrip = true;
      // print first part of message
    }
    if (secondTrip) {
      getAllStops ( stopGetOnNum, exitStopNum ); // 4 -1
      printMessage( enterLine, enterStop, exitLine, exitStop )
      // printMessage(); or printChangeMessage();
      firstTrip = true;
      secondTrip = false;
    }
  }
}

// need to know trainLine, startStop, destinationStop, which stops, will it change lines?, how many stops, which direction

const planTrip = function( enterLine, enterStop, exitLine, exitStop ) {
  // take input into a function
  getSubwayLine( enterLine, exitLine ); // this will return the index from subway Objects and if trip is in same Line or not
  checkStops( enterStop, exitStop, enterLineIdx, exitLineIdx, swapLineIdx, enterLine, exitLine );

};




planTrip('N', 'Times Square', 'N', 'Union Square'); // single subwayLine
planTrip('N', 'Times Square', '6', '33rd'); // interchange lines
planTrip('6', 'Astor Place', 'L', '8th'); // kind of works, print is weird

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
