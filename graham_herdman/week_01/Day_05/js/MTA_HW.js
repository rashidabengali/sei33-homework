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

// #1 Function /////////////////////////////////////////////////////////////////
// #1 Function: function to test the plan trip function
const testPlanTrip = function(result, expectedAnswer, testCaseNum) {

  console.log(`TestCase #${testCaseNum}`);
  console.log("-".repeat(10));

	if (result.length === expectedAnswer.length) {
		for (let i = 0; i < result.length; i++) {

      const isCorrect = result[i] === expectedAnswer[i];

      if (isCorrect){
        console.log(`%c Line ${i+1}: ${result[i]}`, 'color: #008000');
      } else {
        console.log(`%c ERROR Output Line ${i+1}: ${result[i]}`, 'color: #FF0000');
        console.log(`%c ERROR Expected Line ${i+1}: ${expectedAnswer[i]}`, 'color: #FF0000');
      }

		}
	} else {
		console.log(`result array not equal to the length of the expected answer array`, 'color: #FF0000')
	}
}
////////////////////////////////////////////////////////////////////////////////

// #2 Function /////////////////////////////////////////////////////////////////
// #2 Function: function that prints the trip
const printTrip = function(stops, numStops, originLine, origin, destinationLine, destination) {

	let line2 = [];
	let line1 = [];

	const output = [];

  // #0 stops
  if (numStops === 0){
    output.push("You are already at your destination ya dummy.")
    output.push(`${numStops} stops in total.`)
    return output;
  }

	// #2 check if we need to print a change in train lines
	if (stops.includes("Union Square") && originLine !== destinationLine) {
		line2 = stops.splice(stops.indexOf('Union Square') + 1);
		line1 = stops;
	} else {
		line1 = stops;
		line2 = [];
	}

	// #3 check if we need to print a change of lines
	if (line2.length !== 0) {
		output.push(`You must travel through the following stops on the ${originLine} line: ${line1.join(', ')}.`);
		output.push(`Change at Union Square.`);
		output.push(`Your journey continues through the following stops on the ${destinationLine} line: ${line2.join(', ')}.`);
		output.push(`${numStops} stops in total.`);
	} else {
		output.push(`You must travel through the following stops on the ${originLine} line: ${line1.join(', ')}.`);
		output.push(`${numStops} stops in total.`);
	}

	return output;
}
////////////////////////////////////////////////////////////////////////////////

// #3 Function /////////////////////////////////////////////////////////////////
// #3 Function: Function that works out which stops to take
const planTrip = function(originLine, origin, destinationLine, destination) {

  // Input checking
  originLine = originLine.toUpperCase();
  destinationLine = destinationLine.toUpperCase();

	// #1 Make map
	const map = {
		N: {
			name: "N",
			stops: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
		},
		L: {
			name: "L",
			stops: ["8th", "6th", "Union Square", "3rd", "1st"]
		},
		6: {
			name: "6",
			stops: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
		}
	};

	// #2 Search Map
	// put in function search
	let currentLine = map[originLine]; // Object
	let icurr = currentLine.stops.indexOf(origin);
	let iEnd = currentLine.stops.indexOf("Union Square");
	let stops = [];
	let forwards = false;
	let backwards = false;

	let currentStop = currentLine.stops[icurr];
	let changeLines = false;
  let changeDestination = false;

	while (currentLine.name !== destinationLine || currentStop !== destination) {

		currentStop = currentLine.stops[icurr];
		changeLines = currentStop === "Union Square" && currentLine.name !== destinationLine;
    changeDestination = currentStop === "Union Square" && currentLine.name === destinationLine;

		// #2.1 check if we need to change lines
		if (changeLines) {
			currentLine = map[destinationLine]; //change to destination line
			icurr = currentLine.stops.indexOf("Union Square"); // now on destination line
			iEnd = currentLine.stops.indexOf(destination);
			forwards = false;
			backwards = false;
		} else if (changeDestination) {
      iEnd = currentLine.stops.indexOf(destination);
    }

		// push a stop into stops list
		stops.push(currentStop);

		// #2.2 LOOP CONTROL
		// loop forwards if origin station starts before iEnd
		if (icurr < iEnd || forwards) {
			forwards = true;
			icurr++;
			// loop backwards if origin station starts behind
		} else if (icurr > iEnd || backwards) {
			backwards = true;
			icurr--;
		}
	}

	// remove the station you got off at
	stops.shift();

  // #3 return print output
  const output = printTrip(stops, stops.length, originLine, origin, destinationLine, destination)

	return output;
}
////////////////////////////////////////////////////////////////////////////////

// #1 Test Case ////////////////////////////////////////////////////////////////
let expectedAnswer = ["You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square.", "Change at Union Square.", "Your journey continues through the following stops on the 6 line: 23rd, 28th, 33rd.", "7 stops in total."];
let result = planTrip("N", "Times Square", "6", "33rd");
testPlanTrip(result, expectedAnswer, 1);
console.log("");
////////////////////////////////////////////////////////////////////////////////

// #2 Test Case ////////////////////////////////////////////////////////////////
expectedAnswer = ["You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square, 8th.", "5 stops in total."];
result = planTrip("N", "Times Square", "N", "8th");
testPlanTrip(result, expectedAnswer, 2);
console.log("");
////////////////////////////////////////////////////////////////////////////////

// #3 Test Case ////////////////////////////////////////////////////////////////
expectedAnswer = ["You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square.", "Change at Union Square.", "Your journey continues through the following stops on the 6 line: 23rd, 28th, 33rd.", "7 stops in total."];
result = planTrip('n', 'Times Square', '6', '33rd');
testPlanTrip(result, expectedAnswer, 3);
console.log("");
////////////////////////////////////////////////////////////////////////////////

// #4 Test Case ////////////////////////////////////////////////////////////////
expectedAnswer = ["You must travel through the following stops on the 6 line: 23rd, 28th, 33rd, Grand Central.", "4 stops in total."];
result = planTrip('6', 'Union Square', '6', 'Grand Central');
testPlanTrip(result, expectedAnswer, 4);
console.log("");
////////////////////////////////////////////////////////////////////////////////

// #5 Test Case ////////////////////////////////////////////////////////////////
expectedAnswer = ["You must travel through the following stops on the N line: Union Square.", "Change at Union Square.", "Your journey continues through the following stops on the 6 line: Astor Place.", "2 stops in total."];
result = planTrip('n', '8th', '6', 'Astor Place');
testPlanTrip(result, expectedAnswer, 5);
console.log("");
////////////////////////////////////////////////////////////////////////////////

// #6 Test Case ////////////////////////////////////////////////////////////////
expectedAnswer = ["You must travel through the following stops on the L line: 6th, Union Square, 3rd, 1st.", "4 stops in total."];
result = planTrip('l', '8th', 'l', '1st');
testPlanTrip(result, expectedAnswer, 6);
console.log("");
////////////////////////////////////////////////////////////////////////////////

// #7 Test Case ////////////////////////////////////////////////////////////////
expectedAnswer = ["You must travel through the following stops on the L line: Union Square.", "Change at Union Square.", "Your journey continues through the following stops on the 6 line: 23rd, 28th, 33rd.", "4 stops in total."];
result = planTrip('l', '3rd', '6', '33rd');
testPlanTrip(result, expectedAnswer, 7);
console.log("");
////////////////////////////////////////////////////////////////////////////////

// #8 Test Case ////////////////////////////////////////////////////////////////
expectedAnswer = ["You must travel through the following stops on the 6 line: Union Square.", "Change at Union Square.", "Your journey continues through the following stops on the N line: 23rd.", "2 stops in total."];
result = planTrip('6', '23rd', 'n', '23rd');
testPlanTrip(result, expectedAnswer, 8);
console.log("");
////////////////////////////////////////////////////////////////////////////////

// #9 Test Case ////////////////////////////////////////////////////////////////
// Shortest trip (0 stops)
expectedAnswer = ["You are already at your destination ya dummy.", "0 stops in total."];
result = planTrip('n', 'Union Square', 'n', 'Union Square');
testPlanTrip(result, expectedAnswer, 9);
console.log("");
////////////////////////////////////////////////////////////////////////////////

// #10 Test Case ////////////////////////////////////////////////////////////////
// Longest Trip (Times Square to Grand Central - 8 stops)
expectedAnswer = ["You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square.", "Change at Union Square.", "Your journey continues through the following stops on the 6 line: 23rd, 28th, 33rd, Grand Central.", "8 stops in total."];
result = planTrip('n', 'Times Square', '6', 'Grand Central');
testPlanTrip(result, expectedAnswer, 10);
console.log("");
////////////////////////////////////////////////////////////////////////////////

// SIMPLER VERSION!!! JUST TAKE SUB ARRAYS
/*
// helper function subarray
Array.prototype.subarray=function(start,end){
     if(!end){ end=-1;}
    return this.slice(start, this.length+1-(end*-1));
}

// much simpler version
const planTripNew = function(originLine, origin, destinationLine, destination) {

  // Input checking
  originLine = originLine.toUpperCase();
  destinationLine = destinationLine.toUpperCase();

	// #1 Make map
	const map = {
		N: {
			name: "N",
			stops: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
		},
		L: {
			name: "L",
			stops: ["8th", "6th", "Union Square", "3rd", "1st"]
		},
		6: {
			name: "6",
			stops: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
		}
	};

  line1 = map[originLine];
  line2 = map[destinationLine]

  if (line2 !== line1) {
    startLine1 = line1.indexOf(origin);
    endLine1 = line1.indexOf('Union Square');
    if (startLine1 >)
    stopsLine1 = line1.subarray(startLine1, endLine1);
  }


}
*/
