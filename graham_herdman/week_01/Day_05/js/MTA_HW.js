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
const planTrip = function (originLine, originStop, destinationLine, destinationStop) {

  // Make map
  map = {
    N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    L: ["8th", "6th", "Union Square", "3rd", "1st"],
    6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  };
  // WORKING FROM HERE

  // Step through the map to get to the destinationLine
  // put in function search
  let currentLine = map[originLine]; // Array
  let icurr = currentLine.indexOf(originStop);
  let iUnion = currentLine.indexOf("Union Square");
  let stops = [];

  //while we aren't on the destination line and are not at the destination stop
  while (currentLine !== map[destinationLine] && currentLine[icurr] !== destinationStop) {

      // loop forwards
      if (icurr < iUnion) {
        while (icurr < currentLine.length) {
          // check if the current stop is Union Square and if we are on destination line
          if (currentLine[icurr] === "Union Square" && originLine !== destinationLine) {
            currentLine = map[destinationLine]; //change to destination line
            icurr = currentLine.indexOf("Union Square"); //now on
            break;
          }
          stops.push(currentLine[icurr]); // push a stop into stops
          icurr++;
        }
      } else if (icurr > iUnion) {
        while (icurr > -1) {
          // check if the current stop is Union Square and if we are on destination line
          if (currentLine[icurr] === "Union Square" && originLine !== destinationLine) {
            currentLine = map[destinationLine]; //change to destination line
            icurr = currentLine.indexOf("Union Square"); //now on
            break;
          }
          stops.push(currentLine[icurr]); // push a stop into stops
          icurr++;
        }
      }
      return [stops, stops.length];
  }

}

// Print out the stops
// console.log(`You must travel through the following stops on the ${originLine} line: ${stops.join(" ")}`);

console.log(planTrip('N', 'Times Square', 'N', '8th'));












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
