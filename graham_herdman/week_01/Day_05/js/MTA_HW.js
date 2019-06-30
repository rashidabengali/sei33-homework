console.log("Is this thing on?");

// HomeWork: MTA Lab
console.log("MTA Lab");
console.log("");

// Features
// 1) Exception Handling
// 2) make it like the entire MTA - train network

// Part 1) MTA Lab
// planTrip('N', 'Times Square', '6', '33rd');
// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
////////////////////////////////////////////////////////////////////////////////

// function that converts line number into line string

////////////////////////////////////////////////////////////////////////////////
// 2D Array Solution
/*
[["TS..", "34th", "28th", "23rd", "US..", "8th."]
 ["1st.", "3rd.", "US..", "6th.", "8th.", "...."]
 ["GC..", "33rd", "28th", "23rd", "US..", "AP.."]
]
*/
////////////////////////////////////////////////////////////////////////////////
// Graph Solution
/*

// Union Square stop objects
USN = {
stop: "Union Square",
line: "N",
children: [USL, US6]
}

// line object
N {
line: "N",
stops: ["TS..", "34th", "28th", "23rd", "US..", "8th."],
lines: ["L", "6"]
}

// planTrip('N', 'Times Square', '6', '33rd');
// step through the object that was given
// How do I get the object name from N?

// stop objects
const stopFactory = function (stop, line) {
  return {
    stop: stop,
    line: line,
  }
};

*/
//////////////////////////////////////////

// stop Factory
const stopFactory = function (stop, line) {
  return {
    stop: stop,
    line: line,
  }
};

// line Maker
// returns an array with stop objects in one train line
// [{stop: "Times Square", line: "N"}]
const lineMaker = function (line, stops) {
  const lineArray = [];
  for (let i = 0; i < stops.length; i++) {
   lineArray.push(stopFactory(stops[i], line));
  }
  return lineArray
};

// Search Function

// planTrip = function ('N', 'Times Square', 'N', '8th')
const planTrip = function (originLine, origin, destinationLine, destination) {

  // #1 Make map
  const map = {
    N: {name: "N", stops: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]},
    L: {name: "L", stops: ["8th", "6th", "Union Square", "3rd", "1st"]},
    6: {name: "6", stops: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]}
  };

  // #2 Search Map
  // put in function search
  let currentLine = map[originLine]; // Object
  let icurr = currentLine.stops.indexOf(origin);
  let iUnion = currentLine.stops.indexOf("Union Square");
  let stops = [];
  let forwards = false;
  let backwards = false;

  let currentStop = currentLine.stops[icurr];
  let changeLines = false;

  let i = 0;

  while (currentLine.name !== destinationLine || currentStop !== destination) {

    currentStop = currentLine.stops[icurr];
    changeLines = currentStop === "Union Square" && currentLine.name !== destinationLine;

    // #2.1 check if we need to change lines
    if (changeLines) {
      currentLine = map[destinationLine]; //change to destination line
      icurr = currentLine.stops.indexOf("Union Square"); // now on destination line
      iUnion = currentLine.stops.indexOf(destination);
      forwards = false;
      backwards = false;
    }

    // push a stop into stops list
    stops.push(currentStop);

    // #2.2 LOOP CONTROL
    // loop forwards if origin station starts before iUnion
    if (icurr < iUnion || forwards) {
      forwards = true;
      icurr++;
    // loop backwards if origin station starts behind
    } else if (icurr > iUnion || backwards) {
      backwards = true;
      icurr--;
    }
  }

  return [stops, stops.length];
}

// Print out the stops
// console.log(`You must travel through the following stops on the ${originLine} line: ${stops.join(" ")}`);

debugger;

result = planTrip('N', 'Times Square', '6', '33rd');

// TODO NEED TO MAKE THIS INTERACTIVE
console.log(`You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square.`)
console.log(`Change at Union Square.`)
console.log(`Your journey continues through the following stops: 23rd, 28th, 33rd.`)
console.log(`7 stops in total.`)












/*
// N line first

// stop objects
const stopFactory = function (stop, line) {
  return {
    stop: stop,
    line: line,
  }
};

// initialize

// function to move through the array
const planTrip = function ('N', 'Times Square', 'N', '33rd'){

  // Make the train system
  line = "N";
  stops = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
  nLine = lineFactory(line, stops);

  for (var i = 0; i < array.length; i++) {
    array[i]
  }
}


////////////////////////////////////////////////////////////////////////////////
// line objects
const lineFactory = function (line, stops) {
  return {
    line: line
    stops: stops,
  }
};




// stop objects
const stop = function (stop, children) {
  return {
    stop: stop,
    children: [],
  }
};
// or stop = array[i]
// prev = array[i-1]
// post = array[i+1]

// work for a single line
*/
