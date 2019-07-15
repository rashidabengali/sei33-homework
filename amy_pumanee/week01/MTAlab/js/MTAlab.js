// # MTA Lab
//
// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//
// #### Activity
// * Create a program that models a simple subway system.
//
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
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
// const tripFactory = function (a, b, x, y) {
//   return {
//     startLine: a,
//     startStation: b,
//     endLine: x,
//     endStation: y
//   }
// };
//
// planTrip = [ tripFactory('N', 'Times Square', '6', '33rd'),
//              tripFactory('L', '6th', '6', '28th')
// ];
// console.log(`${planTrip[0].startLine} ${planTrip[0].startStation}` );
// console.log(`${planTrip[0].endLine} ${planTrip[0].endStation}` );

// const findLine = function (subway) {
//   return Object.keys(subway);
// };
//
// if (planTrip[0] === Object.keys(subway))

const UNIONSQUARE = 'Union Square';
const route = { N : [ 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th' ],
                 L : [ '8th', '6th', 'Union Square', '3rd', '1st' ],
                 6 : [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place' ]
};
const lineObject = function(lineName, stationName ){
    return {
        line: lineName,
        station: stationName
    }
}

const findTheRoute = function(start, destination) {
    let result = [];
    let arrayLine = route[destination.line.toUpperCase()];

    // the line doesn't exits, return empty route
    if (!arrayLine){
        return result;
    }

    // search start station index
    const indexStart = arrayLine.findIndex((x)=>{
        return x === start.station;
    });

    // search destination station index
    let indexDestination = arrayLine.findIndex((x)=>{
        return x === destination.station;
    });

    // start or destination station doesn't exits from route, return empty route
    if (indexStart === -1 || indexDestination === -1){
        return result;
    }

    if (indexStart <= indexDestination){
        // forward
        for (let i = indexStart+1; i <= indexDestination; i++) {
            result.push(lineObject(start.line, arrayLine[i]));
        }
    }else{
        //backward
        for (let j = indexStart; j > indexDestination; j--) {
            result.push(lineObject(start.line, arrayLine[j-1]));
        }
    }

    return result;
}

const printTheRoute = function(route){
    // the route doesn't exits
    if (route.length === 0){
        console.log('Please check your start and destination');
        return;
    }

    // search union square index from route
    let indexOfUnionSquare = route.findIndex((x)=>{
        return x.station === UNIONSQUARE;
    });

    let afterChanged = "";
    let mainRoute = "";

    if (indexOfUnionSquare !== -1 && indexOfUnionSquare !== route.length) {
        // change line
        mainRoute = route.slice(0, indexOfUnionSquare+1).map((x)=>{
            return x.station;
        }).join(", ");
        afterChanged = `Your journey continues through the following stops on the ${ route[indexOfUnionSquare + 1].line.toUpperCase() } line:` +
        route.slice(indexOfUnionSquare+1, route.length).map((x) =>{
            return x.station;
        }).join(", ");

    }else{
        // direct
        mainRoute = route.map((x)=> {
            return x.station;
        }).join(", ");
    }

    console.log(`You must travel through the following stops on the ${ route[0].line.toUpperCase() } line: ${ mainRoute }.`);

    if (afterChanged.length > 0){
        console.log(`Change at Union Square.`);
        console.log(`${afterChanged}.`);
    }
    console.log(`${ route.length} stops in total.`);
}

const planTrip = function(lineStart, stationStart, lineDestination, stationDestination ){
    const start = lineObject(lineStart, stationStart);
    const destination = lineObject(lineDestination, stationDestination);

    if (start.line !== destination.line){
        // go to union square
        let unionSquareDestination = lineObject(start.line, UNIONSQUARE );
        let result = findTheRoute(start, unionSquareDestination);

        if (result.length > 0){
            // start from union square to destination line
            start.line = destination.line;
            start.station = UNIONSQUARE;

            let destinationResult = findTheRoute(start, destination);
            if (destinationResult.length > 0){
                result = result.concat(destinationResult);
            }else{
                result = [];
            }
        }

        printTheRoute(result);
    }else{
        // direct line
        let result = findTheRoute(start, destination);
        printTheRoute(result);
    }
}

planTrip('N', 'Times Square', 'n', '23rd');



// findLine = function() {
//   if (planTrip[0] === 'N') {
//
//       const station = N.forEach(function) {
//           function subStation(i) {
//             for (let i = N.indexOf(planTrip[0]); i <= N.indexOf('Union Square'); i++) {
//
//               console.log(`You must travel through the following stops on The ${planTrip[0]} Line: ${station}.`);
//             }
//           }
//       }
//       const station = 6.forEach(function) {
//           function subStation(i) {
//             for (let i = 6.indexOf(planTrip[2]); i <= 6.indexOf('Union Square'); i++) {
//
//               console.log(`Your journey continues through the following stops: ${station}.`);
//             }
//   }
// };





//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
