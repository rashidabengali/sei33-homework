//Make a Object name subway

const subway = {
  N: ['Time Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

// Make a function called planTrip for MTS lab

const planTrip = function(lineA, stationA, lineB, stationB) {
  if (lineA === lineB) {
    const line = subway[lineA];
    console.log(`You must travel through the following stops on the ${lineA} line:`);
    const stops = planTripOneLine(stationA, stationB, line);

    console.log(stops);
  } else {
    console.log(`You must travel through the following stops on the ${lineA} line:`);
    const stop1 = planTripOneLine(stationA, "Union Square", subway[lineA]);
    console.log("Change at Union Square.");
    console.log("Your journey continues through the following stops:");
    const stop2 = planTripOneLine("Union Square", stationB, subway[lineB]);
    console.log(`${stop1+stop2} stops in total.`);
  }

}

// solved one line first with 2 placeholder and then added the 3rd place holder for the MTS lab problem

const planTripOneLine = function(stationA, stationB, line) {

  const indexA = line.indexOf(stationA);
  const indexB = line.indexOf(stationB);

  let totalStops = 0;
  if (indexA < indexB) {
    for (let i = indexA + 1; i <= indexB; i++) {
      console.log(line[i]);
      totalStops++;
    }
  } else {
    for (let j = indexA - 1; j >= indexB; j--) {
      console.log(line[j]);
      totalStops++;
    }
  }
  return totalStops;

};
// planTripOneLine("b", "e");
// planTripOneLine("d", "a");
// planTrip("N", "34th", "N", "8th");
//planTrip("6", "33rd", "6", "Union Square");
// planTrip("N", "34th", "L", "1st");
planTrip('6','33rd','N','8th');
