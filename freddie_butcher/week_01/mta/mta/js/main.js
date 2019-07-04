console.log("working");

// Activity
// Create a program that models a simple subway system.
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt()later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)`

const subwaySystem = {
  'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L': ['8th', '6th', 'Union Square','3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

//subwaySystem['N'].indexOf('Times Square');

//Start of function
const planTrip = function (startLine, startStation, endLine, endStation){

//If the lines are the same
  if (startLine === endLine) {

//If index of start station is higher than end station
  if (indexStart > indexEnd) {
//Empty array for indexed stations to file into
    let stationsVisited = [];
//Index no. of start station
      const indexStart = subwaySystem[startLine].indexOf(startStation);
//Index no. of end station
        const indexEnd = subwaySystem[endLine].indexOf(endStation);
//Loop starting at first index number and ending at end index number
//Loop adds station name to stationsVisited array

          for (var i = indexStart; i < indexEnd; i++) {
          stationsVisited.push(subwaySystem[startLine][i]);
}
//Length of stationsVisited array (number of stations)
let numberStationsVisited = stationsVisited.length;
//Log to console
console.log(stationsVisited);
console.log(numberStationsVisited);
} } else {
//Empty array for indexed stations to file into
    let stationsVisited = [];
//Index no. of start station
      const indexStart = subwaySystem[startLine].indexOf(startStation);
//Index no. of end station
        const indexEnd = subwaySystem[endLine].indexOf(endStation);
//Loop starting at first index number and ending at end index number
//Loop adds station name to stationsVisited array

          for (var i = indexStart; i < indexEnd; i--) {
          stationsVisited.push(subwaySystem[startLine][i]);
}
//Length of stationsVisited array (number of stations)
            let numberStationsVisited = stationsVisited.length;
//Log to console
              console.log(stationsVisited);
              console.log(numberStationsVisited);
} else {
console.log('Different Line') };
}};

//Travel to Union Square






//Input to function
planTrip('N', '23rd', 'N', 'Times Square');


// subwaySystem[subwayLine][0] // Times Square


//Output of all stations between two points in an empty array
