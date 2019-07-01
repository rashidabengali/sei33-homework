console.log("This is MTA");

//create object holding all train lines in array
const trainLines = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

// function to define train lines 
// input: train line name (string)
// output: clone of train line (array)
const getLine = function (line) {
    return Array.from(trainLines[line]);
};

// function to get segment of train line 
// input: train line (array), starting station name (string), destination station on same line (string)
// output: stations passed on the train line (array)
const lineSeg = function (line, start, finish) {
    const endIndex = line.indexOf(finish);
    const startIndex = line.indexOf(start);
    // using station index to calculate the direction of the ride
    if (startIndex < endIndex) {
        return line.splice(startIndex+1, (endIndex - startIndex));
    };
    return line.splice(endIndex, (startIndex - endIndex)).reverse();
};

const tripMessage1 = function (line, stationsPassed) {
    return `You must travel through the following stops on the ${ line } line: ${ stationsPassed.join(', ') }.`;
}

const checkInput = function (startLine, startStation, finalLine, finalStation) {
    const errorMessage = [];
    if (!Object.keys(trainLines).includes(startLine) || !Object.keys(trainLines).includes(finalLine)) {
        errorMessage.push('Invalid lines');
    } else if (getLine(startLine).indexOf(startStation) < 0 || getLine(finalLine).indexOf(finalStation) < 0) {
        errorMessage.push('Invalid station names');
    };
    return errorMessage;
};

// function to run planTrip
// input: first train line name (string), firt station name (string), destination train line (string), 
// destination station name (string).
// first check the input train line and station are valid. 
// output: error message if input are invalid. exit function. 
// then check if the trip involve only one train line, 
// output: print details of one train line trip and total stops. exit function. 
// if trips involve two train line: 
// output: print first trip details then print second trip details. Print total stops involed. exit function.
const planTrip = function (startLine, startStation, finalLine, finalStation) {
    // input checking
    const errorMessage = checkInput(startLine, startStation, finalLine, finalStation);
    if (errorMessage.length > 0) {
        return console.log(errorMessage);
    // when trip happen on one line only
    } else if (startLine === finalLine) {
        const stopsPassed  = lineSeg(getLine(startLine), startStation, finalStation);
        return console.log(tripMessage1(startLine, stopsPassed) + `\n${ stopsPassed.length} stops in total.`);
    };
    // stations travelled on starting line
    const firstTrip = lineSeg(getLine(startLine), startStation, 'Union Square'); //trip from start to US station
    // only show trip on line when array is not empty
    console.log((firstTrip.length > 0) ? (tripMessage1(startLine, firstTrip) + `\nChange at Union Square.`) : `\nChange at Union Square.`);
    // stations travelled on finish line
    const secTrip = lineSeg(getLine(finalLine), 'Union Square', finalStation); //trip from US to final stop.
        console.log(tripMessage1(finalLine, secTrip) + `\n${ (firstTrip.length + secTrip.length) } stops in total.`);
    };

let run = function () {
    let promprom= true;
    if (promprom){
        planTrip(prompt(`starting train line.`), prompt('starting station'), prompt('destination train line'), prompt('destination station'));
    }else{
        console.log('wrong line name');
        planTrip('LD', '23rd', 'N', '8th');
        console.log('\none trip on N 23rd to N 8th');
        planTrip('N', '23rd', 'N', '8th');
        console.log('\nwrong name');
        planTrip('6', '35th', 'N', 'Union Square'); //wrong name
        console.log('\nfrom 6line Grand Central one end to another , Astor Place');
        planTrip('6', 'Grand Central', '6', 'Astor Place'); // from 6line one end to another
        console.log('\nfrom N 8th to L 1st');
        planTrip('N', '8th', 'L', '1st'); // from N to L
        console.log('\nlongest from N Times Square to 6 Grand Central');
        planTrip('N', 'Times Square', '6', 'Grand Central'); //'longest from N to 6'
        console.log('\nstart from N union square to 6 Astor Place');
        planTrip('N', 'Union Square', '6', 'Astor Place');
                
    }
}
run();
