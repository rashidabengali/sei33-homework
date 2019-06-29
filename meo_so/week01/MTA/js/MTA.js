console.log("This is MTA")

//create object holding all train lines in array
const trainLines = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

// function to define train lines for parameter
const getLine = function (line) {
    const lineToCalculate = Array.from(trainLines[line]);
    return lineToCalculate;
}

// function to get segment of train line 
const lineSeg = function (line, start, finish) {
    const changeIndex = line.indexOf(finish);
    const startIndex = line.indexOf(start);
        if (startIndex < changeIndex) {
            return line.splice(startIndex+1, (changeIndex - startIndex));
        } else {
            return line.splice(changeIndex, (startIndex - changeIndex)).reverse();
        };
};
// function to run planTrip
const planTrip = function (startLine, startStation, finalLine, finalStation) {
    if (getLine(startLine).indexOf(startStation) < 0 || getLine(finalLine).indexOf(finalStation) < 0) {
        return console.log('Stations do not exist on the train line.');
    } else if (startLine === finalLine) {
        const stopsPassed  = lineSeg (getLine(startLine), startStation, finalStation);
        console.log(`You must travel through the following stops on the ${ startLine } line: ${ stopsPassed.join(', ') }.\n${ stopsPassed.length} stops in total.`);
        console.log('4', trainLines.N);
    } else {
        const firstTrip = lineSeg(getLine(startLine), startStation, 'Union Square'); //trip from start to US station
        console.log(`You must travel through the following stops on the N line: ${ firstTrip.join(', ') }.\nChange at Union Square.`);
        const secTrip = lineSeg(getLine(finalLine), 'Union Square', finalStation);
        console.log(`Your journey continues through the following stops: ${ secTrip.join(', ')}. \n${ (firstTrip.length + secTrip.length) } stops in total.`);
    };
};
planTrip('N', '23rd', 'N', '8th');
planTrip('6', '35th', 'N', 'Union Square'); //wrong name
planTrip('6', 'Grand Central', '6', 'Astor Place'); // from 6line one end to another
planTrip('N', '23rd', 'L', '8th'); // from N to L
planTrip('N', 'Times Square', '6', 'Grand Central'); //'longest from N to 6'

// planTrip('N', '23rd', 'L', '3rd');
// const toUs = function (line, startStop) {
// const changeStopIndex  = line.indexOf('US');
// if (line.indexOf(startStop) < changeStopIndex) {
//     for (let i = line.indexOf(startStop)-1; i <= changeStopIndex; i++) {
//         stopsRouteA.push(line[i]);
//     };
// };
//     for (let i = line.indexOf(startStop)+1; i >= changeStopIndex; i--) {
//         stopsRouteA.push(line[i]);
// };
// console.log(`You must travel through the following stops on the ${ line } line: ${ stopsRouteA }. \nChange at Union Square.`);
// }

// const fromUs = function (line, finalStop) {
// const changeStopIndex = line.indexOf('US');
// if (line.indexOf(finalStop) < changeStopIndex) {
//     for (let i = changeStopIndex; i > line.indexOf(finalStop); i--){
//         stopsRouteB.push(line[i]);
//     } 
// }
//     for (let i = changeStopIndex; i < line.indexOf(finalStop); i++) {
//         stopsRouteB.push(line[i]);
// };
// console.log(`Your journey continues through the following stops: ${ stopsRouteB }.\n${ (stopsRouteA.length + stopsRouteB.length) } stops in total.`);
// };
// const planTrip = function (startLine, startStop, finalLine, finalStop) {
//     stopsRouteA = [];
//     stopsRouteB = [];
//     toUs(startLine, startStop);
//     fromUs(finalLine, finalStop);
// }
// planTrip(nLine, '34', six, '33');
// planTrip(six, 'GC', lLine, '8');