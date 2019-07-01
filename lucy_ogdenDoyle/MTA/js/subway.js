console.log(`
  ooOOOO
 oo      _____
_I__n_n__||_|| ________
>(_________|_7_|-|______|
/o ()() ()() o   oo  oo
  `);

// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
function planTrip (startLine, startStop, endLine, endStop) {

for (var i = 0; i < lines.length; i++) {
  if (lines[i].name === startLine) {
    startLine = lines[i];
  }
  if (lines[i].name === endLine) {
    endLine = lines[i];
  }
}

  //check if the stops are on the same lines
  if (startLine.name === endLine.name) {
    if (startStop === endStop) {
      console.log(`Only one stop, you have arrived.`);
    }
    else {
      const tripOne = tripToDestination(startLine.stops, endStop, startStop);
      // print the stops in order
      console.log(`You must travel through the following stops on the ${startLine.name} line: ${tripOne.join(", ")}.`);

      console.log(`${tripOne.length} stops in total.`);
    }


  }
  else {
    //if not the same line:
    // In the start line, how many stops from startStop Union Square
    const tripOne = tripToTransfer(startLine.stops, startStop);

    // in the endLine, how many stops from Union Square to endStop
    const tripTwo = tripToDestination(endLine.stops, endStop);

    //join the first array with the second array, to give list of stops
    const trip = tripOne.concat(tripTwo);


    // print the stops in order
    console.log(`You must travel through the following stops on the ${startLine.name} line: ${tripOne.join(", ")}.`);

    console.log(`Change at Union Square.`);

    console.log(`Your journey continues through the following stops on the ${endLine.name} line: ${tripTwo.join(", ")}.`);

    console.log(`${trip.length} stops in total.`);
    // add them together

  }
  console.log(`
    _____                 . . . . . o o o o o
   __|[_]|__ ___________ _______    ____      o
  |[] [] []| [] [] [] [] [_____(__  ][]]_n_n__][.
 _|________|_[_________]_[________]_|__|________)<
   oo    oo 'oo      oo ' oo    oo 'oo 0000---oo\_
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

}


function tripToTransfer (startLine, startStop, transfer="Union Square") {
  const startStopIndex =  startLine.indexOf(startStop);
  const transferStopIndex = startLine.indexOf(transfer);
  let trip = [];
  if (startStopIndex < transferStopIndex) {
    for ( let i = startStopIndex + 1; i < transferStopIndex + 1; i++ ) {
      trip.push(startLine[i]);
    }
  }
  else {
    for ( let i = transferStopIndex; i < startStopIndex; i++ ) {
      trip.push(startLine[i]);
    }
  }
  return trip;
}

function tripToDestination (startLine, destination, start="Union Square") {
  const startStopIndex =  startLine.indexOf(start);
  const destStopIndex = startLine.indexOf(destination);
  let trip = [];
  if (startStopIndex < destStopIndex) {
    console.log(`s ${startStopIndex}, d ${destStopIndex}, t ${start}`);
    for ( let i = startStopIndex + 1; i < destStopIndex + 1; i++ ) {
      trip.push(startLine[i]);
    }
  }
  else {
    for ( let i = startStopIndex -1 ; i > destStopIndex - 1; i-- ) {
      trip.push(startLine[i]);
    }
  }

  return trip;
}

let lines = [];
function subwayLine (lineName, stops) {
    const line = {
      name: lineName,
      stops: stops
    }
    lines.push(line);
    return line;
}



const n = subwayLine("N", ["Times Square",
"34th",
"28th",
"23rd",
"Union Square",
"8th"]);

subwayLine("L", ["8th",
"6th",
"Union Square",
"3rd",
"1st"]);

subwayLine("6", ["Grand Central",
"33rd",
"28th",
"23rd",
"Union Square",
"Astor Place"]);




//planTrip("N", "Times Square", "N", "Times Square");
/*
Only one stop, you have arrived.
*/

planTrip("N", "Times Square", "6", "Grand Central");
/*
You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square.
Change at Union Square.
Your journey continues through the following stops on the 6 line: 23rd, 28th, 33rd, Grand Central.
8 stops in total.
*/


//planTrip(n, 'Times Square', s, '33rd');
/*
You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square.
Change at Union Square.
Your journey continues through the following stops on the 6 line: 23rd, 28th, 33rd.
7 stops in total.
*/

//planTrip(s, 'Union Square', s, 'Grand Central');
/*
You must travel through the following stops on the 6 line: 23rd, 28th, 33rd, Grand Central.
4 stops in total.
*/

//planTrip(n, '8th', s, 'Astor Place');
/* You must travel through the following stops on the N line: Union Square.
Change at Union Square.
Your journey continues through the following stops on the 6 line: Astor Place.
2 stops in total.
*/

//planTrip(l, '8th', l, '1st');
/* You must travel through the following stops on the L line: 6th, Union Square, 3rd, 1st.
4 stops in total.
*/


//planTrip(l, '3rd', s, '33rd');
/*
You must travel through the following stops on the L line: Union Square.
Change at Union Square.
Your journey continues through the following stops on the 6 line: 23rd, 28th, 33rd.
4 stops in total.
*/

//planTrip(s, '23rd', n, '23rd');
/*
You must travel through the following stops on the 6 line: Union Square.
Change at Union Square.
Your journey continues through the following stops on the N line: 23rd.
2 stops in total.
*/
